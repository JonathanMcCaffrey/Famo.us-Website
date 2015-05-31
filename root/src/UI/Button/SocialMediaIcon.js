'use strict';

var DOMElement = require('famous/dom-renderables/DOMElement');
var FamousEngine = require('famous/core/FamousEngine');

//var UI = new function() {
//  var Button = new function() {
function SocialMediaIcon(node, position, align, imageName, link) {
    this.node = node;

    node
        .setSizeMode('absolute', 'absolute', 'absolute')
        .setAbsoluteSize(50, 50)
        .setAlign(align.x, align.y)
        .setMountPoint(0.5, 0.5)
        .setOrigin(0.5, 0.5)
        .setPosition(position.x, position.y, 0);

    this.el = new DOMElement(node, {tagName: 'img'})
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
        if (type == 'mouseout') {
            isHover = false;
        }
        if (type == 'click') {
            window.open(link);
        }
    };

    var deltaTime = 0;
    var spinner = node.addComponent({
        onUpdate: function (time) {
            if (isHover) {
                deltaTime += 0.02;
                node.setRotation(0, deltaTime, 0);
            } else {
                if (deltaTime > 3.14) {
                    deltaTime = deltaTime % 3.14;
                }

                if (deltaTime > 0) {
                    deltaTime -= 0.035;

                    if (deltaTime < 0) {
                        deltaTime = 0;
                    }
                }

                node.setRotation(0, deltaTime, 0);
            }

            node.requestUpdateOnNextTick(spinner);

        }
    });

    node.requestUpdate(spinner);
};
//   };
//};


module.exports = SocialMediaIcon;