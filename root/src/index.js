'use strict';

var DOMElement = require('famous/dom-renderables/DOMElement');
var FamousEngine = require('famous/core/FamousEngine');
var SocialMediaIcon = require('./UI/Button/SocialMediaIcon');


FamousEngine.init();
var context = FamousEngine.createScene();

var fb = new SocialMediaIcon(context.addChild(), {x:-50, y:-50}, { x:1,y:1 }, './images/facebook.png', 'http://www.facebook.com/jonathan.mccaffrey.50' );
var li = new SocialMediaIcon(context.addChild(), {x:-125, y:-50}, { x:1,y:1 }, './images/linkedin.png', 'https://ca.linkedin.com/in/jonmcc' );
var tw = new SocialMediaIcon(context.addChild(), {x:-200, y:-50}, { x:1,y:1 }, './images/twitter.png', 'https://twitter.com/jon_mccaffrey' );
var gh = new SocialMediaIcon(context.addChild(), {x:-275, y:-50}, { x:1,y:1 }, './images/github.png', 'https://github.com/JonathanMcCaffrey' );

var fm = new SocialMediaIcon(context.addChild(), {x:50, y:-50}, { x:0,y:1 }, './images/famous_logo.png', 'http://famous.org/' );
