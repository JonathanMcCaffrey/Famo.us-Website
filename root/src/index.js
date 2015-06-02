'use strict';

var DOMElement = require('famous/dom-renderables/DOMElement');
var FamousEngine = require('famous/core/FamousEngine');
var SocialMediaIcon = require('./UI/Button/SocialMediaIcon');

var BusinessCardManager = require('./Manager/BusinessCardManager');
var BusinessCard = require('./UI/Button/BusinessCard');
var TestDragItem = require('./UI/Button/TestDragItem');


FamousEngine.init();
var context = FamousEngine.createScene();

var cardManager = new BusinessCardManager(context.addChild());


var bh = new BusinessCard(context.addChild(), './images/BusinessCards/card-bitheads.png', 'http://www.bitheads.com/');
cardManager.addChild(bh);


var sl = new BusinessCard(context.addChild(), './images/BusinessCards/card-smokelabs.png', 'http://www.bitheads.com/');
cardManager.addChild(sl);

var tdi = new TestDragItem(context.addChild());

var fb = new SocialMediaIcon(context.addChild(), {x:-50, y:-50}, { x:1,y:1 }, './images/SocialMediaIcons/facebook.png', 'http://www.facebook.com/jonathan.mccaffrey.50' );
var li = new SocialMediaIcon(context.addChild(), {x:-125, y:-50}, { x:1,y:1 }, './images/SocialMediaIcons/linkedin.png', 'https://ca.linkedin.com/in/jonmcc' );
var tw = new SocialMediaIcon(context.addChild(), {x:-200, y:-50}, { x:1,y:1 }, './images/SocialMediaIcons/twitter.png', 'https://twitter.com/jon_mccaffrey' );
var gh = new SocialMediaIcon(context.addChild(), {x:-275, y:-50}, { x:1,y:1 }, './images/SocialMediaIcons/github.png', 'https://github.com/JonathanMcCaffrey' );

var fm = new SocialMediaIcon(context.addChild(), {x:50, y:-50}, { x:0,y:1 }, './images/famous_logo.png', 'http://famous.org/' );
