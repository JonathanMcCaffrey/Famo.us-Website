'use strict';
var DOMElement = require('famous/dom-renderables/DOMElement');
var FamousEngine = require('famous/core/FamousEngine');
var GestureHandler = require('famous/components/GestureHandler');

function TestPanel(node, size) {
    this.node = node;

    this.node.setSizeMode('absolute', 'absolute', 'absolute').setAlign(0.25, 0.4, 0).setAbsoluteSize(size.x, size.y).setMountPoint(0.5, 0.5).setOrigin(0.5, 0.5);

    this.image = new DOMElement(node.addChild(), {tagName: 'img', content: 'test'}).setAttribute('src', './images/Test.png');
    this.image.setProperty('cursor', 'pointer');


    this.subNode = node.addChild();
    this.image2 = new DOMElement(this.subNode, {tagName: 'img', content: 'test'}).setAttribute('src', './images/Test.png');
    this.image2.setProperty('cursor', 'pointer');

    this.subNode.setRotation(0,90,0);

};

module.exports = TestPanel;
