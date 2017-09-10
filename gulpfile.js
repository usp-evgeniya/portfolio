const gulp = require('gulp'),
    //styles
    sass = require('gulp-sass'),
    nodeSass = require('node-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require('gulp-rename'),
    //scripts
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    webpack = require('webpack'),
    gulpWebpack = require('gulp-webpack'),
    webpackConfig = require('./webpack.config.js'),
    jshint = require('gulp-jshint'),
    lintConfig = require('./lint.config.js'),
    //templates
    pug = require('gulp-pug'),
    //build
    del = require('del'),
    browserSync = require('browser-sync').create()
    

var paths = {
    styles: {
        src: 'src/styles/styles.scss',
        watch: 'src/styles/*.scss',
        dest: 'dist/css/'
    },
    scripts: {
        src: 'src/scripts/main.js',
        watch: 'src/scripts/*.js',
        dest: 'dist/js/'
    },
    templates: {
        src: 'src/templates/pages/*.pug',
        watch: 'src/templates/**/*.pug',
        dest: 'dist/'
    },
    images: {
        src: 'src/images/**/*.*',
        dest: 'dist/img/'
    },
    fonts: {
        src: 'src/fonts/**/*.*',
        dest: 'dist/fonts/'
    }
}

function styles() {
    return gulp.src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(autoprefixer({
        browsers : ['last 4 versions'],
        cascade : false
    }))
    .pipe(sourcemaps.write())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(paths.styles.dest))
}

function scripts() {
    return gulp.src(paths.scripts.src)
    .pipe(jshint(lintConfig))
    .pipe(jshint.reporter('default'))
    .pipe(gulpWebpack(webpackConfig, webpack))
    .pipe(gulp.dest(paths.scripts.dest));
}



function templates() {
    return gulp.src(paths.templates.src)
    .pipe(pug({pretty: true}))
    .pipe(gulp.dest(paths.templates.dest));
}

function images() {
    return gulp.src(paths.images.src)
    .pipe(gulp.dest(paths.images.dest));
}

function fonts() {
    return gulp.src(paths.fonts.src)
    .pipe(gulp.dest(paths.fonts.dest));
}


function clean() {
    return del('dist')
}

function watch() {
    gulp.watch(paths.styles.watch, styles);
    gulp.watch(paths.scripts.watch, scripts);
    gulp.watch(paths.templates.watch, templates);
    gulp.watch(paths.images.src, images);
    gulp.watch(paths.fonts.src, fonts)
}

function server() {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });
    browserSync.watch(['./src/**/*.*', './dist/**/*.*'], browserSync.reload);
}

exports.styles = styles;
exports.scripts = scripts;
exports.templates = templates;
exports.images = images;
exports.fonts = fonts;
exports.watch = watch;
exports.clean = clean;
exports.clean = server;

gulp.task('build', gulp.series(
    clean,
    gulp.parallel(styles,scripts,templates,images,fonts)
))

gulp.task('default', gulp.series(
    clean,
    gulp.parallel(styles,scripts,templates,images,fonts),
    gulp.parallel(watch,server)
))

