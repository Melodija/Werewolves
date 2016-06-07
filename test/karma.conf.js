// Karma configuration
// Generated on Tue Jun 07 2016 12:32:10 GMT+0100 (BST)

module.exports = function(config) {
  config.set({

    basePath: '../',


    frameworks: ['jasmine'],


    files: [
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/js/**/*.js',
      'test/unit/**/*.js'
    ],


    exclude: [
    ],



    preprocessors: {
    },

    port: 9876,


    colors: true,



    logLevel: config.LOG_INFO,


    autoWatch: true,



    browsers: ['Chrome'],



    singleRun: false,

    concurrency: Infinity
  })
}
