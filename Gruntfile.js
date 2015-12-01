module.exports = function(grunt) {
    
    require('time-grunt')(grunt);

    require('load-grunt-config')(grunt, {
    	data: {
    		sassDir: 'app/sass/',
    		cssDir: 'app/css/',
    		loadPaths: ["bower_components/normalize-scss/"]
    	}
    });

};