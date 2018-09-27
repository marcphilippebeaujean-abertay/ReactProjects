// Sass configuration

var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");

gulp.task("sass", () => {
  gulp
    .src("./src/scss/*.scss") // get scss
    .pipe(plumber())
    .pipe(sass())
    .on("error", error => {
      // we have an error
      done(error);
    }) // convert files
    .pipe(gulp.dest("./src/css")); // convert to css
});

gulp.task("default", ["sass"], () => gulp.watch("./src/scss/*.scss", ["sass"]));
