const gulp = require('gulp');
const sass = require('gulp-sass') ( require ( 'sass' ));//scss -> css
const minifyCSS = require('gulp-minify-css');//压缩

gulp.task('sass', async () => {
    return gulp.src('components/css/**/*.scss')
    .pipe(sass().on("error", sass.logError))
    .pipe(minifyCSS())
    .pipe(gulp.dest('dist/css'));
});