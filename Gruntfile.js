module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        compass: {
            dist: {
                options: {
                    sassDir: 'sass',
                    cssDir: 'stylesheets',
                    outputStyle: 'expanded'
                }
            }
        },
        watch: {
            all: {
                files: ['sass/**/*.scss'],
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
                        'stylesheets/*.css',
                        'index.html',
                        'dev/**/*.html'
                    ]
                },
                options: {
                    server: {
                        baseDir: './'
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
    grunt.registerTask('default', ['compass', 'browserSync', 'watch']);

};