/*global Backbone */
var app = app || {};

define([
	'jquery',
	'underscore',
	'backbone',
	'collections/todos',
	'views/app-view'
], function($, _, Backbone, TodoCollection, AppView){
    var TodoRouter = Backbone.Router.extend({
		routes: {
			'*filter': 'setFilter'
		},

		setFilter: function (param) {
			// Set the current filter to be used
			app.TodoFilter = param || '';

			// Trigger a collection filter event, causing hiding/unhiding
			// of Todo view items
			app.todos.trigger('filter');
		}
	});

    var initialize = function(){
       app.TodoRouter = new TodoRouter();
       app.AppView = new AppView();
       //app.AppView.initialize();
       //alert('Router start');
       Backbone.history.start();
    };

    return {
    	initialize: initialize
    };
});

/*(function () {
	'use strict';

	// Todo Router
	// ----------
	var TodoRouter = Backbone.Router.extend({
		routes: {
			'*filter': 'setFilter'
		},

		setFilter: function (param) {
			// Set the current filter to be used
			app.TodoFilter = param || '';

			// Trigger a collection filter event, causing hiding/unhiding
			// of Todo view items
			app.todos.trigger('filter');
		}
	});

	app.TodoRouter = new TodoRouter();
	Backbone.history.start();
})();*/
