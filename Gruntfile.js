/*
 After you have changed any settings for the responsive_images task,
 run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {

  grunt.initConfig({
/*
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            width: 750,
            suffix: '_2x',
            quality: 50
          },
          {
            width: 375,
            suffix: '_1x',
            quality: 50
          }]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images_src/',
          dest: 'images/'
        }]
      }
    },
*/
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            width: 2340,
            suffix: '_2x',
            quality: 70
          },
          {
            width: 1270,
            suffix: '_1x',
            quality: 70
          },
          {
            width: 1940,
            suffix: '_2x',
            quality: 70
          },
          {
            width: 970,
            suffix: '_1x',
            quality: 70
          },
          {
            width: 1500,
            suffix: '_2x',
            quality: 70
          },
          {
            width: 750,
            suffix: '_1x',
            quality: 70
          },
          {
            width: 400,
            suffix: '_1x',
            quality: 30
          }]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images_src/big_picture/',
          dest: 'images/'
        }]
      }
    },

    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['images'],
      },
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['images']
        },
      },
    },

    /* Copy the "fixed" images that don't go through processing into the images/directory */
    copy: {
      dev: {
        files: [{
          expand: true,
          src: ['images_src/fixed/*.{gif,jpg,png}'],
          dest: 'images/',
          flatten: true,
        }]
      },
    },

  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  //grunt.registerTask('default', ['clean', 'mkdir', 'copy', 'responsive_images']);
  grunt.registerTask('default', ['responsive_images']);

};
