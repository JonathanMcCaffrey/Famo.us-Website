'use strict';

var DOMElement = require('famous/dom-renderables/DOMElement');
var FamousEngine = require('famous/core/FamousEngine');

function BusinessCardManager(node) {

    this.node = node;

    var children = [];


    this.cardClicked = function(child) {


    }

    this.addChild = function(child) {
        children.push(child);

        for (var index = 0.0; index < children.length; index++) {
            children[index].node.setAlign(
                0.5,
                (0.6 * (index  - (children.length / 2.0)) / (children.length)) + 0.5,
                0);
        }
    };

    var speed = 0.06;
    var refresher = node.addComponent({
        onUpdate: function (time) {

            for (var index = 0; index < children.length; index++) {
                var direction = -1;

                if(children[index].state == 1)
                {
                    direction = 1;
                }


                var deltaTime = children[index].delta;
                deltaTime += speed * direction;


                if(deltaTime > Math.PI) {
                    deltaTime = Math.PI;
                    direction = -1;

                    children[index].backSide.node.setScale(0,0,0);
                }

                if(deltaTime < 0) {
                    deltaTime = 0;
                    direction = 1;

                    children[index].backSide.node.setScale(1,1,1);
                }

                children[index].delta = deltaTime;

                children[index].node.setRotation(0, deltaTime, 0);


            }

            node.requestUpdateOnNextTick(refresher);
        }
    });

    node.requestUpdate(refresher);

};

module.exports = BusinessCardManager;