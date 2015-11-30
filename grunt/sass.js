module.exports = {    
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
                "bower_components/normalize-scss/",
            ],
            precision: 8,
            style: 'expanded'
        }
    }
};