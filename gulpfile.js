const gulp = require('gulp');
const rename = require("gulp-rename");
const stylus = require('gulp-stylus');
const autoprefixer = require('gulp-autoprefixer');

const modules = [
    'stylus/atomity.styl',
    'stylus/generators/**/*.styl'
];

gulp.task('unminified', function () {
    return gulp.src(modules)
        .pipe(stylus())
        .pipe(autoprefixer({
            browsers: ['last 3 versions']
        }))
        .pipe(gulp.dest('css'));
});

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

gulp.task('watch', function() {
    gulp.watch('stylus/**/*.styl', ['unminified', 'minified']);
});

gulp.task('default', ['unminified', 'minified', 'watch']);