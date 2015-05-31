'use strict';

var DOMElement = require('famous/dom-renderables/DOMElement');
var FamousEngine = require('famous/core/FamousEngine');

function BusinessCardManager(node) {


    this.node = node;

    var children = [];


    this.addChild = function(child) {
        children.push(child);
    };

    var deltaTime = 0;
    var direction = 1;
    var speed = 0.14;
    var refresher = node.addComponent({
        onUpdate: function (time) {

            deltaTime += speed * direction;

            if(deltaTime > (Math.PI / 2)) {
                deltaTime = (Math.PI / 2);
                direction = -1;
            }

            if(deltaTime < 0) {
                deltaTime = 0;
                direction = 1;
            }

            for (var index = 0; index < children.length; index++) {


                children[index].node.setRotation(0, deltaTime, 0);
            }

            node.requestUpdateOnNextTick(refresher);
        }
    });

    node.requestUpdate(refresher);


};

module.exports = BusinessCardManager;