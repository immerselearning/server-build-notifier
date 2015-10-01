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
      }
    },

    sass: {
      common: {
        files: generate_uglify_files("common", "scss", "css")
      },
      chrome: {
        files: generate_uglify_files("Chrome", "scss", "css")
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-sass");

  grunt.registerTask("default", ["uglify", "sass"]);
};
