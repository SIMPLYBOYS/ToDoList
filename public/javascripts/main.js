require.config({
	paths: {
	  jquery: '../bower_components/jquery/jquery',
	  underscore: '../bower_components/underscore/underscore',
	  backbone: '../bower_components/backbone/backbone',
	  localStorage: '../bower_components/backbone.localStorage/backbone.localStorage'
	}

});

require(['app'], function(App){
	App.initialize();
});