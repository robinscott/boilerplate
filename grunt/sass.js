module.exports = {    
    dist: {
        files: [{
            cwd: '<%= sassDir %>',
            dest: '<%= cssDir %>',
            expand: true,
            ext: '.css',
            src: ['*.scss']
        }],
        options: {
            loadPath: '<%= loadPaths %>',
            precision: 8,
            style: 'expanded'
        }
    }
};