module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),
   
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'server.js']
    },

    sass: {
      dist: {
        files: {
          'public/styles/main.css': 'src/scss/main.scss'
        }
      },
      options: {
        includePaths: [
          'bower_components/normalize-css'
        ]
      }
    },

    bowercopy: {
      folders: {
        options: {
          srcPrefix: 'src'
        },
        files: {
          'public/scripts' : 'scripts',
          'public/views': 'views'
        }
      },

      options: {
        srcPrefix: 'bower_components'
      },

      scripts: {
        options: {
          destPrefix: 'public/scripts/vendor'
        },
        files: {
          'jquery/jquery.js': 'jquery/dist/jquery.min.js'
        }
      }
    },
                                      
    watch: {
      css: {
        files: 'src/scss/**/*.scss', tasks: ['sass']
      },
      src: {
        files: ['src/scripts/**/*.*', 'src/views/**/*.*', 'src/html/**/*.*', 'src/config/**/*.*'],
        tasks: ['jshint', 'bowercopy']                 
      }
    }


  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-bowercopy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint','sass','bowercopy']);

};
