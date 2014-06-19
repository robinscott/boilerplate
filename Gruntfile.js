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
        			'app/stylesheets/screen.css' : 'app/sass/screen.scss'
        		}
        	}
        },
        watch: {
            all: {
                files: ['app/sass/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false
                }
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src : 'app/stylesheets/screen.css'
                },
                options: {
                    server: {
                        baseDir: 'app'
                    },
                    watchTask: true
                }
            }
        }

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['browserSync','watch']);

};