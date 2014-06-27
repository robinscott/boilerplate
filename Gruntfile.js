module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        compass: {
            dist: {
                options: {
                    sassDir: 'app/sass',
                    cssDir: 'app/stylesheets',
                    outputStyle: 'expanded'
                }
            }
        },
        watch: {
            all: {
                files: ['app/sass/**/*.scss'],
                tasks: ['compass'],
                options: {
                    spawn: false
                }
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'app/stylesheets/*.css',
                        'app/*.html'
                    ]
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
    //grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['browserSync','watch']);

};