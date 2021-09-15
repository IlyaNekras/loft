let gulp = require('gulp'),
    sass = require('gulp-sass')(require('sass'));

gulp.task('scss', function() {
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'));
});