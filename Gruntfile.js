module.exports = function(grunt) {
  grunt.initConfig({
     // configurações das tasks
      pkg: grunt.file.readJSON('package.json'),
      uglify: {
      build: {
        src: 'js/cobit5.js',
        dest: 'js/cobit5.min.js'
      },
       
      bowerRequirejs: {
        target: {
          rjsConfig: 'js/config.js'
        }
      }

    }
  });
 
  // carrega plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-bower-requirejs');
  
   // Default task(s).
  //grunt.registerTask('default', ['uglify']);
  grunt.registerTask('default', ['bowerRequirejs']);
};