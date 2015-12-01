module.exports = {   
    dist: {
        bsFiles: {
            src : [
                '<%= cssDir %>**/*.css',
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