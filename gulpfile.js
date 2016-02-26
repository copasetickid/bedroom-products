var gulp = require('gulp'),
    jade = require('gulp-jade'),
    sass = require('gulp-sass'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'), //User convential text streams with Gulp
    jadeify = require("jadeify"); // Bundles JS

var config = {
  port: 8000,
  devBaseURL: 'http:://localhost',
  paths: {
    html: './src/*.html',
    js: './src//js/**/**.js',
    images: './src/images/*',
    css: [
      'node_modules/bootstrap/dist/css/bootstrap.min.css',
      'node_modules/bootstrap/dist/css/bootstrap-theme-min.css'
    ],
    dist: './public',
    mainJs: './src/main.js'
  }
}

// run this task by typing in gulp jade in CLI
gulp.task('jade', function() {
    return gulp.src('src/templates/**/*.jade')
        .pipe(jade()) // pip to jade plugin
        .pipe(gulp.dest('public')); // tell gulp our output folder
});

gulp.task('js', function(){
  browserify('./src/js/main.js')
    .transform(jadeify)
    .bundle().on('error', console.error.bind(console))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(config.paths.dist + '/scripts'));
});

gulp.task('sass', function () {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(config.paths.dist + '/css'));
});

gulp.task('default', ['jade', 'sass', 'js']);
