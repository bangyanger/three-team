var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCss = require('gulp-clean-css');

//编译scss
gulp.task('sass', function() {
        return gulp.src('scss/*.scss')
            .pipe(sass())
            .pipe(cleanCss()) //压缩css
            .pipe(gulp.dest('dist/'))
    })
    //监听scss
gulp.task('watch', function() {
    gulp.watch('scss/*.scss', gulp.series('sass'));
})