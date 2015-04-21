"use strict";

//******************************************************************************
//* DEPENDENCIES
//******************************************************************************
var gulp        = require("gulp"),
    tslint      = require("gulp-tslint"),
    tsc         = require("gulp-typescript"),
    runSequence = require("run-sequence"),
    browserSync = require("browser-sync"),
    reload      = browserSync.reload;

//******************************************************************************
//* LINT
//******************************************************************************
gulp.task("lint", function() {
  return gulp.src([
                __dirname + "/source/**/**.ts",
                __dirname + "/test/**/**.test.ts"
              ])
             .pipe(tslint())
             .pipe(tslint.report("verbose"));
});

//******************************************************************************
//* BUILD
//******************************************************************************
var tsProject = tsc.createProject({
  removeComments : false,
  noImplicitAny : false,
  target : "ES3",
  module : "amd",
  declarationFiles : false
});

gulp.task("build-source", function() {
  return gulp.src(__dirname + "/source/**/**.ts")
             .pipe(tsc(tsProject))
             .js.pipe(gulp.dest(__dirname + "/build/source/"));
});

gulp.task("build", function(cb) {
  runSequence("lint", "build-source", cb);
});

//******************************************************************************
//* SERVE
//******************************************************************************
gulp.task("serve", function(cb) {
    browserSync({
        port: 8080,
        server: {
            baseDir: __dirname + "/"
        }
    });

    gulp.watch([
      __dirname + "/node_modules/**/*.css",
      __dirname + "/node_modules/**/*.js",
      __dirname + "/source/**/*.ts",
      __dirname + "/test/**/*.ts",
      __dirname + "/css/**/*.css",
      __dirname + "/img/**/*.css",
      __dirname + "/index.html"
    ], browserSync.reload, cb);
});

//******************************************************************************
//* DEFAULT
//******************************************************************************
gulp.task("default", function (cb) {
  runSequence(
    "lint",
    "build-source",
    "serve",
    cb);
});
