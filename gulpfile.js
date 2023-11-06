const gulp = require('gulp');
require('./gulp/development.js');
require('./gulp/build.js');

gulp.task('default', gulp.series(
  'clean:dev', 
  gulp.parallel('inclideHTML:dev', 'scss:dev', 'js:dev', 'images:dev', 'fonts:dev'),
  gulp.parallel('server:dev', 'watch:dev')
));

gulp.task('build', gulp.series(
  'clean:build', 
  gulp.parallel('inclideHTML:build', 'scss:build', 'js:build', 'images:build', 'fonts:build'),
  gulp.parallel('server:build'),
  gulp.series('zip:build')
));