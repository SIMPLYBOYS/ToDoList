/*global $ */
/*jshint unused:false */
var app = app || {};
var ENTER_KEY = 13;
var ESC_KEY = 27;

/*$(function () {
	'use strict';

	// kick things off by creating the `App`
	new app.AppView();
});*/

define([
	'jquery',
	'underscore',
	'backbone',
	'routers/router'], function($, _, Backbone, Router){
  var initialize = function(){
  	// alert('AMD function check!');
  	Router.initialize();
  }

  return {
     initialize: initialize
  };
});
