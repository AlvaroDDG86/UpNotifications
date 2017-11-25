var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

gulp.task('serve', ['sass'], function() {
        browserSync.init({
            server: "."
        });
        gulp.watch("scss/*.scss", ['sass']);
        gulp.watch("*.html").on('change', browserSync.reload);
    });

gulp.task('sass', function(){
    console.log("Procesando scss");
    return gulp.src('scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'))
        .pipe(autoprefixer({
            versions:['last 2 browsers']
        }))
        .pipe(browserSync.stream());
});


gulp.task('default', function(){
    gulp.watch('scss/*.scss',['sass']);
});