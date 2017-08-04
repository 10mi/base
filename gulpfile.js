var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var plumber = require("gulp-plumber");
var browser = require("browser-sync");
var imagemin = require("gulp-imagemin");



gulp.task('imagemin', function(){
    gulp.src("img/*.jpg")
        .pipe(imagemin({
          progressive: true
        }))
        .pipe(gulp.dest("jpegtran_images"));
    gulp.src("img/*.png")
        .pipe(imagemin())
        .pipe(gulp.dest("optipng_images"));
});

gulp.task('sass',function(){
    gulp.src('sass/*.scss')
    .pipe(plumber())
    .pipe(sass({style : 'expanded'}))
    .pipe(autoprefixer())
    .pipe(gulp.dest('css'));
});

gulp.task('default', function(){
  gulp.watch('sass/*.scss', ['sass']);
});

gulp.task("server", function() {
    browser({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("./*", function(){
      browser.reload();
    })

});
