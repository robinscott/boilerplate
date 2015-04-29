module.exports = function(grunt) {

    // Configurations
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            all: {
                files: ['sass/**/*.scss'],
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

    // Load tasks
    // grunt.loadNpmTasks('grunt-contrib-sass');
    // grunt.loadNpmTasks('grunt-contrib-watch');
    // grunt.loadNpmTasks('grunt-contrib-concat');
     grunt.loadNpmTasks('grunt-browser-sync');

    // Register tasks
    grunt.registerTask('default', ['watch']);

};