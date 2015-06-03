'use strict';
var DOMElement = require('famous/dom-renderables/DOMElement');
var FamousEngine = require('famous/core/FamousEngine');
var GestureHandler = require('famous/components/GestureHandler');

function DraggablePanel(node, owner) {
    this.node = node;

    this.node.setSizeMode('absolute', 'absolute', 'absolute').setAlign(0.25, 0.4, 0).setAbsoluteSize(owner.node.getAbsoluteSize()[0], owner.node.getAbsoluteSize()[1]).setMountPoint(0.5, 0.5).setOrigin(0.5, 0.5);

    this.image = new DOMElement(node, {tagName: 'img', content: 'test'}).setAttribute('src', './images/Test.png');
    this.image.setProperty('cursor', 'pointer');

    this.gesture = new GestureHandler(this.node);
    this.gesture.on('drag', function(e) {
        this.node.setPosition(e.centerDelta.x + this.node.getPosition()[0], e.centerDelta.y + this.node.getPosition()[1], 0);
        owner.node.setPosition(this.node.getPosition()[0],this.node.getPosition()[1], 0);

    }.bind(this));
};

module.exports = DraggablePanel;
