module.exports = function(grunt) {

    // Configurations
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            sass: {
                files: ['app/sass/**/*.scss'],
                tasks: ['sass', 'autoprefixer'],
                options: {
                    spawn: false
                }
            }
        },

        autoprefixer: {
            options: {
                browsers: [
                    'last 2 versions',
                    'ie 8',
                    'ie 9'
                ]
            },
            dist: {
                files: {
                    'app/css/main.css': 'app/css/main.css'
                }
            }
        },

        sass: {
            dist: {
                files: [{
                    cwd: 'app/sass/',
                    dest: 'app/css/',
                    expand: true,
                    ext: '.css',
                    src: ['*.scss']
                }],
                options: {
                    loadPath: [
                        //"app/bower_components/bootstrap-sass-official/assets/stylesheets/",
                        //"app/bower_components/angular-ui-tree/source/"
                    ],
                    precision: 8,
                    style: 'expanded'
                }
            }
        },

        browserSync: {
            dist: {
                bsFiles: {
                    src : [
                        'app/css/**/*.css',
                        'app/**/*.html',
                        'app/**/*.htm'
                    ]
                },
                options: {
                    server: {
                        baseDir: 'app/'
                    },
                    watchTask: true
                }
            }
        }

    });

    // Load tasks
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-autoprefixer');
    // grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-browser-sync');

    // Register tasks
    grunt.registerTask('default', ['sass', 'autoprefixer', 'browserSync', 'watch']);

};