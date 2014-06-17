module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
        	dist: {
        		options: {
        			style: 'compressed'
        		},
        		files: {
        			'stylesheets/screen.css' : 'sass/screen.scss'
        		}
        	}
        },
        watch: {
            all: {
                files: ['sass/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                    livereload: true
                }
            }
        },
        connect: {
            server: {
              options: {
                port: 9001,
                hostname: 'localhost',
                keepalive: true
              }
            }
        }

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['connect','watch']);

};