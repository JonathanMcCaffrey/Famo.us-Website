'use strict';

var DOMElement = require('famous/dom-renderables/DOMElement');
var FamousEngine = require('famous/core/FamousEngine');


function FrontSide(node, imageName, link) {
    this.node = node;

    this.image = new DOMElement(node, {tagName: 'img'})
        .setAttribute('src', imageName);
    this.image.setProperty('cursor', 'pointer');

}

function BackSide(node) {
    this.node = node;

    this.image = new DOMElement(node, {tagName: 'img'})
        .setAttribute('src', './images/BusinessCards/card-placeholder.png');
    this.image.setProperty('cursor', 'pointer');

}

function BusinessCard(node, imageName, link) {
    this.node = node;

    this.frontSide = new FrontSide(node.addChild(), imageName, link);
    this.backSide = new BackSide(node.addChild());

    this.node
        .setSizeMode('absolute', 'absolute', 'absolute')
        .setAlign(0.5, 0.4, 0)
        .setAbsoluteSize(350, 200)
        .setMountPoint(0.5, 0.5)
        .setOrigin(0.5, 0.5);

    this.node.addUIEvent("click");

    this.node.onReceive = function onReceive(type, ev) {
        if (type == 'click') {
            window.open(link);
        }
    };
};

module.exports = BusinessCard;