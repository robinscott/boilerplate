module.exports = {   
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
};