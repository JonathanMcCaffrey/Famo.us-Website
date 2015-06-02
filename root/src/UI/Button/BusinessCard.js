'use strict';
var DOMElement = require('famous/dom-renderables/DOMElement');
var FamousEngine = require('famous/core/FamousEngine');
var GestureHandler = require('famous/components/GestureHandler');

var CARD_FRONT = 0;
var CARD_BACK = 1;

function FrontSide(node, imageName, link) {
    this.node = node;
    this.image = new DOMElement(node, {tagName: 'img'}).setAttribute('src', imageName);
    this.image.setProperty('cursor', 'pointer');
}

function BackSide(node) {
    this.node = node;

    this.image = new DOMElement(node, {tagName: 'img', content: 'test'}).setAttribute('src', './images/BusinessCards/card-placeholder.png');
    this.image.setProperty('cursor', 'pointer');
}

function BusinessCard(node, imageName, linktest) {
    this.index = 0;
    this.link = linktest;
    this.delta = 0;
    this.state = CARD_FRONT;
    this.node = node;

    this.backSide = new BackSide(node.addChild());
    this.frontSide = new FrontSide(node.addChild(), imageName, this.link);


    this.node.setSizeMode('absolute', 'absolute', 'absolute').setAlign(0.5, 0.4, 0).setAbsoluteSize(262, 150).setMountPoint(0.5, 0.5).setOrigin(0.5, 0.5);

    var emitBackCardSelected = function () {
        this.node.emit('cardSelected', { state:CARD_BACK, id:this.index });
    }.bind(this);

    var emitFrontCardSelected = function () {
        this.node.emit('cardSelected', { state:CARD_FRONT, id:this.index });
    }.bind(this);

    var emitCardDragged = function () {
        this.node.emit('cardDragged', { id:this.index });
    }.bind(this);


    this.backGesture = new GestureHandler(this.backSide.node);
    this.backGesture.on('tap', emitBackCardSelected);
    this.backGesture.on('drag', emitCardDragged);


    this.frontGesture = new GestureHandler(this.frontSide.node);
    this.frontGesture.on('tap', emitFrontCardSelected);


    this.backGesture.on('drag', function(index, e) {
        this.node.setPosition(e.centerDelta.x, e.centerDelta.y, 0);
    }.bind(this, this.index));


    this.frontGesture.on('drag', function(index, e) {
        this.node.setPosition(e.centerDelta.x, e.centerDelta.y, 0);
    }.bind(this, this.index));


    _bindEvents.call(this);

};

function _bindEvents() {
    this.node.addComponent({
        onReceive: function(e, payload) {
            if (e === 'cardDragged') {



            }


            if (e === 'cardSelected') {
                if (payload.id == this.index) {

                    if (payload.state == CARD_BACK) {
                        this.state = CARD_FRONT;
                    } else if(payload.state == CARD_FRONT) {
                        this.state = CARD_BACK;
                    }
                }
            }
        }.bind(this)
    });

}

module.exports = BusinessCard;
