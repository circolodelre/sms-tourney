
const gulp = require('gulp'),
      sass = require('gulp-sass'),
      watch = require('gulp-watch'),
      rename = require('gulp-rename'),
      concat = require('gulp-concat'),
      concatCss = require('gulp-concat-css'),
      modifyCssUrls = require('gulp-modify-css-urls'),
      templateCache = require('gulp-angular-templatecache'),
      runSequence = require('run-sequence'),
      nodemon = require('gulp-nodemon'),
      basename = require('path').basename;

gulp.task('sass', function() {
    return gulp.src('./style/bulma.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./style'));
});

gulp.task('style', function() {
    var style = [
        './style/**/*.css'
    ];
    return gulp.src(style)
        .pipe(concatCss('style.css'))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('fonts', function() {
    return gulp.src('./node_modules/**/fonts/*.{ttf,woff,eof,eot,svg,htc}')
        .pipe(rename({dirname: ''}))
        .pipe(gulp.dest('./public/fonts'));
});

gulp.task('tpl', function() {
    return gulp.src('./app/**/*.html')
        .pipe(templateCache({filename: 'tpl.js', root: 'app/', module: 'app'}))
        .pipe(gulp.dest('app'));
});

gulp.task('js', function() {
    var js = [
        './node_modules/jquery/dist/jquery.min.js',
        './node_modules/angular/angular.min.js',
        './node_modules/angular-ui-router/release/angular-ui-router.min.js',
        './app/server.js',
        './app/tpl.js',
        './app/**/*.js'
    ];
    return gulp.src(js)
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./public/js'));
});

gulp.task('app', function(done) {
    runSequence('sass', 'style', 'fonts', 'tpl', 'js', done);
});

gulp.task('watch-api', function(){
    return nodemon({
        script: 'api',
        watch: ['api'],
        ext: 'js',
        env: { 'NODE_ENV': 'development' }
    })
});

gulp.task('watch-app', function(){
    return watch([
        'app/**',
        'style/bulma.sass',
        'style/**/*.css',
    ], function() {
        gulp.run(['app']);
    });
});

gulp.task('start', ['watch-api', 'watch-app']);

gulp.task('default', ['start']);