var gulp = require('gulp'),
	wiredep = require('wiredep').stream,
	browserSync = require('browser-sync').create(),
	reload      = browserSync.reload;


gulp.task('bower', function () {
  // gulp.src('./app/index.html')
  //   .pipe(wiredep({
  //     derictory: "app/bower_components"
  //   }))
  //   .pipe(gulp.dest('./app'));
  gulp.src('./app/*.html')
    .pipe(wiredep({
      derictory: "app/bower_components"
    }))
    .pipe(gulp.dest('./app'));
});

gulp.task('watch', function (){
	gulp.watch('bower.json',['bower']);
})


gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./app/"

        }
    });
});

gulp.task('default', ['watch','browser-sync']);
gulp.watch("./app/*.html").on("change", browserSync.reload);
gulp.watch("./app/css/*.css").on("change", browserSync.reload);
gulp.watch("./app/js/*.js").on("change", browserSync.reload);