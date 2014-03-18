module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
      build: {
        src: 'src/**/*.js',
        dest: 'dist/bundle.js'
      }
    }
  });
  grunt.loadNpmTasks('grunt-browserify');
  grunt.registerTask('default', ['browserify']);
};
