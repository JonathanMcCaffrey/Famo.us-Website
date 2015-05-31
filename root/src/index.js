'use strict';

// Famous dependencies
var DOMElement = require('famous/dom-renderables/DOMElement');
var FamousEngine = require('famous/core/FamousEngine');

FamousEngine.init();
var context = FamousEngine.createScene();


function Icon(node, position, align, imageName, link) {
    this.node = node;

    node
        .setSizeMode('absolute', 'absolute', 'absolute')
        .setAbsoluteSize(50, 50)
        .setAlign(align.x,align.y)
        .setMountPoint(0.5, 0.5)
        .setOrigin(0.5, 0.5)
        .setPosition(position.x, position.y, 0);

    this.el = new DOMElement(node, { tagName: 'img' })
        .setAttribute('src', imageName);
    this.el.setProperty('cursor', 'pointer');
    this.el.setProperty('zIndex', '2');

    node.addUIEvent("mouseover");
    node.addUIEvent("mouseout");
    node.addUIEvent("click");

    var isHover = false;
    node.onReceive = function onReceive(type, ev) {
        if (type === 'mouseover') {
            isHover = true;
        }
        if(type == 'mouseout') {
            isHover = false;
        }
        if(type == 'click') {
            window.open(link);
        }
    };

    var deltaTime = 0;
    var spinner = node.addComponent({
        onUpdate: function(time) {
            if(isHover) {
                deltaTime += 0.02;
                node.setRotation(0, deltaTime, 0);
            } else {
                if(deltaTime  > 3.14) {
                    deltaTime = deltaTime % 3.14;
                }

                if(deltaTime > 0) {
                    deltaTime -= 0.035;

                    if(deltaTime < 0) {
                        deltaTime = 0;
                    }
                }

                node.setRotation(0, deltaTime, 0);
            }

            node.requestUpdateOnNextTick(spinner);

        }
    });

    node.requestUpdate(spinner);
}

var fb = new Icon(context.addChild(), {x:-50, y:-50}, { x:1,y:1 }, './images/facebook.png', 'http://www.facebook.com/jonathan.mccaffrey.50' );
var li = new Icon(context.addChild(), {x:-125, y:-50}, { x:1,y:1 }, './images/linkedin.png', 'https://ca.linkedin.com/in/jonmcc' );
var tw = new Icon(context.addChild(), {x:-200, y:-50}, { x:1,y:1 }, './images/twitter.png', 'https://twitter.com/jon_mccaffrey' );
var gh = new Icon(context.addChild(), {x:-275, y:-50}, { x:1,y:1 }, './images/github.png', 'https://github.com/JonathanMcCaffrey' );

var fm = new Icon(context.addChild(), {x:50, y:-50}, { x:0,y:1 }, './images/famous_logo.png', 'http://famous.org/' );
