const { parallel, src, dest } = require("gulp");
const uglify = require("gulp-uglify");
const cleanCSS = require("gulp-clean-css");

const minifyJS = () =>
  src("src/**/*.js")
    .pipe(uglify())
    .pipe(dest("dist"));

const minifyCSS = () =>
  src("src/**/*.css")
    .pipe(cleanCSS({
      inline: "none"
    }))
    .pipe(dest("dist"));

const transport = () =>
  src(["src/**/*","!src/**/*.js","!src/**/*.css"])
    .pipe(dest("dist"));

exports.default = parallel(minifyJS, minifyCSS, transport);
