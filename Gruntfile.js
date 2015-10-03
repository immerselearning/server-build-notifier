var path = require("path");

module.exports = function(grunt) {

  function generate_uglify_files(name, extIn, extOut) {
    if (!extOut) {
      extOut = extIn;
    }
    var files = [
      {
        expand: true,
        cwd: name,
        src: "*." + extIn,
        dest: "build/Chrome",
        ext: ".min." + extOut
      }
    ];
    return files;
  }

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    uglify: {
      common: {
        files: generate_uglify_files("common", "js")
      },
      chrome: {
        files: generate_uglify_files("Chrome", "js")
      },
      firefox: {
        files: generate_uglify_files("Firefox", "js")
      },
      vendor: {
        files: generate_uglify_files("vendor", "js")
      }
    },

    sass: {
      common: {
        files: generate_uglify_files("common", "scss", "css")
      },
      chrome: {
        files: generate_uglify_files("Chrome", "scss", "css")
      },
      firefox: {
        files: generate_uglify_files("Firefox", "scss", "css")
      },
      vendor: {
        files: generate_uglify_files("vendor", "css")
      }
    },

    copy: {
      firefox: {
        files: [{
          expand: true,
          cwd: "build/Chrome",
          src: "*.min.{css,js}",
          dest: "build/Firefox"
        }]
      },

      chrome_manifest: {
        files: [{src: "Chrome/manifest.json", dest: "build/Chrome/manifest.json"}]
      },

      firefox_manifest: {
        files: [{src: "Firefox/manifest.json", dest: "build/Firefox/manifest.json"}]
      }
    },

    zip: {
      firefox: {
        cwd: "build/Firefox",
        files: [{
          expand: true,
          src: "build/Firefox/*",
          dest: "build/Firefox/server-build-notifier.xpi"
        }]
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-zip");

  grunt.registerTask("default", ["uglify", "sass", "copy", "zip"]);
};
