// Sass configuration

var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task("sass", () => {
  gulp
    .src("./src/scss/*.scss") // get scss
    .pipe(sass()) // convert files
    .pipe(gulp.dest("./src/css")); // convert to css
});

gulp.task("default", ["sass"], () => gulp.watch("./src/scss/*.scss", ["sass"]));
