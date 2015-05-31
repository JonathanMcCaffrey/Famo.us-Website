'use strict';

var DOMElement = require('famous/dom-renderables/DOMElement');
var FamousEngine = require('famous/core/FamousEngine');

function BusinessCard(node, imageName, link) {
    this.node = node;

    this.node
        .setSizeMode('absolute', 'absolute', 'absolute')
        .setAlign(0.5, 0.4, 0)
        .setAbsoluteSize(350, 200)
        .setMountPoint(0.5, 0.5)
        .setOrigin(0.5, 0.5);

    this.el = new DOMElement(node, {tagName: 'img'})
        .setAttribute('src', imageName);
    this.el.setProperty('cursor', 'pointer');
    this.el.setProperty('zIndex', '2');

    this.node.addUIEvent("click");

    this.node.onReceive = function onReceive(type, ev) {
        if (type == 'click') {
            window.open(link);
        }
    };
};

module.exports = BusinessCard;