module.exports = {
    sass: {
        files: ['<%= sassDir %>**/*.scss'],
        tasks: ['sass', 'autoprefixer'],
        options: {
            spawn: false
        }
    }
};