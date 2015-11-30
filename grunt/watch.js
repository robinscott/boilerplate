module.exports = {
    sass: {
        files: ['app/sass/**/*.scss'],
        tasks: ['sass', 'autoprefixer'],
        options: {
            spawn: false
        }
    }
};