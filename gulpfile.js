const { src, dest, watch, series } = require('gulp');
const source = require('vinyl-source-stream');
const sass = require('gulp-sass');
const browserify = require('browserify');
const browserSync = require('browser-sync').create(); 
const cssnano = require('gulp-cssnano');  
const autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const replace = require('gulp-replace');


// DEVELOPMENT TASKS
function compileSass(done) {
  src('src/sass/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('src/css'));
    done();
}

function browserifyJS(done) {
  browserify({
    entries: 'src/app/app.js',
    debug: true
  })
    .bundle()
    .on('error', function(error){
      console.log("Error!", error.message);
      this.emit('end'); 
      })     
    .pipe(source('bundle.js'))  
    .pipe(dest('src/js'));
    done();
}

function liveReload() {
  browserSync.init({
    server: {
      baseDir: './src',
      index: 'index.html'
    }
  });

  watch('src/sass/**/*.sass', compileSass).on('change',browserSync.reload);
  watch('src/app/**/*.js', browserifyJS).on('change',browserSync.reload);
  watch('src/*.html').on('change',browserSync.reload);
  
}

// PRODUCTION / Build Tasks
function buildCSS(done) {
  src('src/css/style.css')
    .pipe(sourcemaps.init())
      .pipe(autoprefixer({
        cascade: false
      }))
      .pipe(cssnano())
    .pipe(sourcemaps.write())
    .pipe(dest('build/css'))
  done();
}

function buildJS(done) {
  src('src/js/bundle.js')
    .pipe(sourcemaps.init())
      .pipe(babel({
        presets: ['@babel/env']
      }))
      .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(dest('build/js'))
    done();
}


function buildHTML(done) {
  let cbString = new Date().getTime();
  src('src/index.html')
    .pipe(replace(/cb=\d+/g, 'cb=' + cbString))
    .pipe(dest('build'));
    done();
}


exports.dev = liveReload;
exports.build = series(buildCSS, buildJS, buildHTML);

