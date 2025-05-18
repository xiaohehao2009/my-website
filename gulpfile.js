const { parallel, src, dest } = require("gulp");
const uglify = require("gulp-uglify");
const cleanCSS = require("gulp-clean-css");

const sourceDir = "src";
const outputDir = "out";

const minifyJS = () =>
  src(`${sourceDir}/**/*.js`)
    .pipe(uglify())
    .pipe(dest(outputDir));

const minifyCSS = () =>
  src(`${sourceDir}/**/*.css`)
    .pipe(cleanCSS({
      inline: "none"
    }))
    .pipe(dest(outputDir));

const transport = () =>
  src([`${sourceDir}/**/*`,`!${sourceDir}/**/*.js`,`${sourceDir}/**/*.css`])
    .pipe(dest(outputDir));

exports.default = parallel(minifyJS, minifyCSS, transport);
