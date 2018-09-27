var gulp = require('gulp'),
    handlebars = require('gulp-compile-handlebars'),
    rename = require('gulp-rename'),
    newer = require('gulp-newer'),
    //concat = require('gulp-concat'),
    devBuild = (process.env.NODE_ENV !== 'production'),
    folder = {
        src: 'src/',
        build: 'dist/'
    };

// HTML processing
gulp.task('html', function() {
  return gulp.src('./src/templates/pages/*.hbs')
    .pipe(handlebars({}, {
      ignorePartials: true,
      batch: ['./src/templates/partials']
    }))
    .pipe(rename({
      extname: '.html'
    }))
    .pipe(gulp.dest('./dist'));
});

// JavaScript processing
gulp.task('js', function() {
    return gulp.src(folder.src + 'js/**/*')
                    //.pipe(deporder())
                    //.pipe(concat('main.js'));
                .pipe(gulp.dest(folder.build + 'js/'));
});

// run all tasks
gulp.task('run', ['html', 'js']);

gulp.task('default', ['run']);