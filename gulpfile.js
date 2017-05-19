
var gulp = require('gulp');
var less = require('gulp-less');
var connect = require('gulp-connect');
var  minifyCss = require("gulp-minify-css");
var livereload = require('gulp-livereload');


gulp.task('less', function() {
    gulp.src('css/*.less')
        .pipe(less())
        .pipe(gulp.dest('css'))
        .pipe(minifyCss())
        .pipe(livereload());
});


gulp.task('connect', function() {
    connect.server({
        host: 'localhost', //地址，可不写，不写的话，默认localhost
        port: 3000, //端口号，可不写，默认8000
        root: './', //当前项目主目录
        livereload: true //自动刷新
    });
});
gulp.task('html', function() {
    gulp.src('./*.html')
        .pipe(connect.reload());
});
gulp.task('watch', function() {
    gulp.watch('./css/*.less', ['html']); //监控less文件
    gulp.watch('./css/*.css', ['html']); //监控css文件
    gulp.watch('./js/*.js', ['html']); //监控js文件
    gulp.watch(['./*.html'], ['html']); //监控html文件
});
gulp.task('default',['connect','watch']);