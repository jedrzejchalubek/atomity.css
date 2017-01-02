const gulp = require('gulp');
const rename = require("gulp-rename");
const stylus = require('gulp-stylus');
const autoprefixer = require('gulp-autoprefixer');

// Modules to complie.
const modules = [
    'stylus/atomity.styl',
    'stylus/generators/**/*.styl'
];

// Task for compiling and outputing
// unminified stylesheet files.
gulp.task('unminified', function () {
    return gulp.src(modules)
        .pipe(stylus())
        .pipe(autoprefixer({
            browsers: ['last 3 versions']
        }))
        .pipe(gulp.dest('css'));
});

// Task for compiling and outputing
// minified stylesheet files.
gulp.task('minified', function () {
    return gulp.src(modules)
        .pipe(stylus({ compress: true }))
        .pipe(autoprefixer({
            browsers: ['last 3 versions']
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('css'));
});

// Watch task. Runs unminified and minified
// tasks on changes in stylus files.
gulp.task('watch', function() {
    gulp.watch('stylus/**/*.styl', ['unminified', 'minified']);
});

// Default task runs all available tasks.
gulp.task('default', ['unminified', 'minified', 'watch']);