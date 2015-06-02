'use strict';
var DOMElement = require('famous/dom-renderables/DOMElement');
var FamousEngine = require('famous/core/FamousEngine');
var GestureHandler = require('famous/components/GestureHandler');

var CARD_FRONT = 0;
var CARD_BACK = 1;
var CARD_DOUBLE_BACK = 2;

function FrontSide(node, imageName, link) {
    this.node = node;
    this.image = new DOMElement(node, {tagName: 'img'}).setAttribute('src', imageName);
    this.image.setProperty('cursor', 'pointer');
}

function BackSide(node) {
    this.node = node;
    this.image = new DOMElement(node, {tagName: 'img'}).setAttribute('src', './images/BusinessCards/card-placeholder.png');
    this.image.setProperty('cursor', 'pointer');
}

function BusinessCard(node, imageName, linktest) {
    this.link = linktest;
    this.delta = 0;
    this.state = 0;
    this.node = node;
    this.frontSide = new FrontSide(node.addChild(), imageName, this.link);
    this.backSide = new BackSide(node.addChild());
    this.isClicked = false;

    this.aname = 'trasd';

    this.node.setSizeMode('absolute', 'absolute', 'absolute').setAlign(0.5, 0.4, 0).setAbsoluteSize(262, 150).setMountPoint(0.5, 0.5).setOrigin(0.5, 0.5);

    var emitFrontCardSelected = function () {
        this.node.emit('cardSelected', { state:1 });
    }.bind(this);

    var emitBackCardSelected = function () {
        this.node.emit('cardSelected', { state:0 });
    }.bind(this);


    this.frontGesture = new GestureHandler(this.frontSide.node);
    this.frontGesture.on('tap', emitFrontCardSelected);

    this.backGesture = new GestureHandler(this.backSide.node);
    this.backGesture.on('tap', emitBackCardSelected);

    _bindEvents.call(this);

};

function _bindEvents() {
    this.node.addComponent({
        onReceive: function(e, payload) {
            if (e === 'cardSelected') {
                if(payload.state == 1) {
                    this.state = 0;
                } else {
                    this.state = 1;
                }
            }
        }.bind(this)
    });

}



module.exports = BusinessCard;
