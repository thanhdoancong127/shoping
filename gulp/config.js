var src = "app";
var srcAssets = "app/assets";

var build = "dist";
var developmentAssets = "dist/assets";

module.exports = {
    browsersync: {
      development: {
        server: {
          baseDir: [build]
        },
        port: 9999,
        // proxy: "http://localhost:3333",
        files: [
          developmentAssets + '/css/*.css',
          developmentAssets + '/js/*.js',
          developmentAssets + '/images/**',
          developmentAssets + '/fonts/*'
        ]
      }
    },
  deleteAssets: {
    src: [developmentAssets]
  },
  base64: {
    src: developmentAssets + '/css/*.css',
    dest: developmentAssets + '/css',
    options: {
      baseDir: build,
      extensions: ['png'],
      maxImageSize: 20 * 1024, // bytes
      debug: false
    }
  },
  copyfonts: {
    development: {
      src:  srcAssets + '/fonts/*',
      dest: developmentAssets + '/fonts'
    }
  },
  images: {
    src:  srcAssets + '/images/**/*',
    dest: developmentAssets + '/images'
  },
};