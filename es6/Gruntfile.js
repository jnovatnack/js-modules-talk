module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      build: ['build/'],
      release: ['dist']
    },
    transpile: {
      main: {
        type: 'cjs',
        files: [{
          cwd: 'src',
          expand: true,
          dest: 'build/',
          src: '*.js'
        }]
      }
    },
    browserify: {
      build: {
        src: 'build/*.js',
        dest: 'dist/bundle.js',
      }
    },
  });
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-es6-module-transpiler');
  grunt.registerTask('default', ['clean', 'transpile', 'browserify']);
};