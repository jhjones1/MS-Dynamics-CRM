// Include gulpfile
'use strict';

var gulpfile = require('gulpfile.js');
// var gulpAbout = require('gulp-about');
var sass = require('gulp-sass');
var plugins = require('gulp-load-plugins');
// Include Our Plugins
var plugins.jshint = require('gulpfile-jshint');
// var sass = require('gulp-sass');
var plugins.concat = require('gulp-concat');
var plugins.uglify = require('gulp-uglify');
var plugins.rename = require('gulp-rename');
var plugins.repository = require('gulp-repository');
var plugins.folder = require('gulp-folder');

var plugins.description = require('gulp-description');
// development mode?
// var devBuild = (process.env.NODE_ENV !== 'production'),

plugins.description = {
    name: "AlgaeCal Developer Test 2017 ",
    version: "1.0.0",
    private: true
};
   // folders
plugins.folder = {
    src: 'src/',
    build: 'build/'
};
// Options
// You can pass in an object of options that are shown below: (the values for the keys are the defaults):
gulpLoadPlugins({
    DEBUG: false, // when set to true, the plugin will log info to console. Useful for bug reporting and issue debugging 
    pattern: ['gulp-*', 'gulp.*', '@*/gulp{-,.}*'], // the glob(s) to search for 
    overridePattern: true, // When true, overrides the built-in patterns. Otherwise, extends built-in patterns matcher list. 
    config: 'package.json', // where to find the plugins, by default searched up from process.cwd() 
    scope: ['dependencies', 'devDependencies', 'peerDependencies'], // which keys in the config to look within 
    replaceString: /^gulp(-|\.)/, // what to remove from the name of the module when adding it to the context 
    camelize: true, // if true, transforms hyphenated plugins names to camel case 
    lazy: true, // whether the plugins should be lazy loaded on demand 
    rename: {}, // a mapping of plugins to rename 
    renameFn: function (name) { ... }, // a function to handle the renaming of plugins (the default works) 
    postRequireTransforms: {}, // see documentation below 
    maintainScope: true // toggles loading all npm scopes like non-scoped packages 
});
// Lint Task
gulpfile.task('lint', function() {
    return gulpfile.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulpfile.task('sass', function() {
    return gulpfile.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulpfile.dest('./css'));
});
gulpfile.task('sass:watch', function() {
    gulpfile.watch('./sass/**/*.scss', ['sass']);
});


// Compile Our Sass
gulpfile.task('sass', function() {
    return gulpfile.src('scss/*.scss')
        .pipe(sass())
        .pipe(gulpfile.dest('dist/css'));
});

repository = {
    type: "git",
    url: "git://github.com/jhjones1/repository.git"
};

// Concatenate & Minify JS
gulpfile.task('scripts', function() {
    return gulpfile.src('js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulpfile.dest('dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulpfile.dest('dist/js'));
});

// Watch Files For Changes
gulpfile.task('watch', function() {
    gulpfile.watch('js/*.js', ['lint', 'scripts']);
    gulpfile.watch('scss/*.scss', ['sass']);
});

// Default Task
gulpfile.task('default', ['lint', 'sass', 'scripts', 'watch']);

var about = require('gulp-about');
gulpfile = require('gulpfile');

gulpfile.task('about', function() {
    return gulpfile.src('package.json')
        .pipe(about())
        .pipe(gulpfile.dest('dist')); // writes dist/about.json 
});