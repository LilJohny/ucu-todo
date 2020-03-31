import gulp from 'gulp';
import babelify from 'babelify';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
gulp.task('scripts', () => {
    return browserify(['./src/app.js'])
        .transform(babelify)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('dist'))
        .pipe(buffer());     // You need this if you want to continue using the stream with other plugins
});