const { parallel, src, dest } = require("gulp");
const uglify = require("gulp-uglify");
const cleanCSS = require("gulp-clean-css");

const minifyJS = () =>
  src('src/**/*.js')
    .pipe(uglify({
      output: {
        comments: /^!/
      }
    }))
    .pipe(dest('out'));

const minifyCSS = () =>
  src('src/**/*.css')
    .pipe(cleanCSS({
      inline: false
    }))
    .pipe(dest('out'));

const transport = () =>
  src(
    ['src/**/*','!src/**/*.js','!src/**/*.css'],
    { encoding: false }
  )
    .pipe(dest('out'));

exports.default = parallel(minifyJS, minifyCSS, transport);
