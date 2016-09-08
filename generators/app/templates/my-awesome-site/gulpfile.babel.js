'use strict';

import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';

const $ = gulpLoadPlugins();

// Minify the HTML.
gulp.task('minify-html', () => {
  return gulp.src('_site/**/*.html')
    .pipe($.htmlmin({
      removeComments: true,
      collapseWhitespace: true,
      collapseBooleanAttributes: true,
      removeAttributeQuotes: true,
      removeRedundantAttributes: true,
      removeEmptyAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
      removeOptionalTags: true
    }))
    .pipe(gulp.dest('_site'))
});

// Pug (Jade) to HTML.
gulp.task('pug', () => {
  return gulp.src([
    '_site/**/*.pug',
    '!_site/node_modules/**'
  ])
  .pipe($.pug())
  .pipe(gulp.dest('_site'))
});

gulp.task('jekyll-build', $.shell.task([ 'jekyll build' ]));

// Default task.
gulp.task('default', () => console.log('in jekyll build task'));
