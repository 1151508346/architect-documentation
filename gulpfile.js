const { src, dest } = require('gulp')
const gulp = require('gulp')
const uglify = require('gulp-uglify')
const fs = require('fs')
const babel = require('gulp-babel');
const gulpClean = require('gulp-clean');
const htmlmin = require('gulp-htmlmin');
const gulpCleanCss = require('gulp-clean-css');
const path = require('path');
const scripts = () => {
  return src("static/js/*.js")
    .pipe(
      babel({
        presets: ["@babel/preset-env"]
      })
    )
    .pipe(uglify())
    .pipe(dest('dist/static/js'))
}
// 这些文件压缩不了，可能有些特殊符号导致的
const blackList = [
  '103.1.webpack-usage.html',
  '103.13.webpack5.html',
  '127.frontend.html',
  '4.NodeInstall.html',
  '61.10.devops-nginx.html',
  '81.axios.html',
]
const html = (fileName) => {
  let r;
  if (blackList.indexOf(fileName) !== -1) {
    r = src(`./html/${fileName}`)
      .pipe(dest('dist/html'))
  } else {
    r = src(`./html/${fileName}`)
      .pipe(
        htmlmin({
          removeComments: true, //除HTML注释
          collapseWhitespace: true,
          minifyCSS: true,
          minifyJS: true
        })
      )
      .pipe(dest('dist/html'))
  }

  return r;
}

const htmls = () => {
  const htmlList = fs.readdirSync(path.join(__dirname, 'html'))
  return htmlList.map(fileName => {
    return () => html(fileName);
  })
}
const indexHtml = () => {
  return src("./index.html", { allowEmpty: true })
    .pipe(
      htmlmin({
        removeComments: true, //清除HTML注释
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true
      })
    )
    .pipe(dest('dist'))
}
const csss = () => {
  return src("./static/css/*.css")
    .pipe(
      gulpCleanCss()
    )
    .pipe(dest('dist/static/css'))
}

exports.copyImg = copy = () => {
  return src("./static/img/*.*")
  .pipe(dest('dist/static/img'))
}
exports.copyzhufengImg = copy = () => {
  return src("./static/zhufengImg/*.*")
  .pipe(dest('dist/static/zhufengImg'))
}
// 拷贝多个文件夹
exports.copy = copy = () => {
  return src([
    "./static/img/*",
    "./static/zhufengImg/*",
    "./static/icon/*",
  ],{
    base:'./'  // 用来保留原来的目录结构
  }).pipe(dest('dist'))
}

exports.clean = clean = () => {
  return src(["dist"], { allowEmpty: true })
    .pipe(gulpClean());
}

exports.htmls = () => gulp.series(htmls())
exports.indexHtml = indexHtml;
exports.default = gulp.parallel([gulp.series([indexHtml,scripts,copy, csss]),gulp.series(htmls())])
