var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
    return gulp.src('scss/upnotification.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'));
});


gulp.task('default', function(){
    gulp.watch('scss/upnotification.scss',['sass']);
});