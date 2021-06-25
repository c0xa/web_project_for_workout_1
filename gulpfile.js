const {series, parallel, src, dest} = require("gulp");

const gulp = require("gulp"),
	svgmin = require("gulp-svgmin"),
	svgstore = require("gulp-svgstore"),
	rename = require("gulp-rename"),
    inject = require("gulp-inject"),
	less = require("gulp-less"),
	autoprefixer = require("gulp-autoprefixer"),
	// replace = require("gulp-replace"),
	browserSync = require("browser-sync").create(),
	mergeStream = require("merge-stream");

gulp.task("svgstore", function () {
	const svgs = gulp
		.src("./src/assets/icons/**/*.svg")
		.pipe(
			svgmin(function () {
				return {
					plugins: [
						{
							removeTitle: true,
						},
						{
							removeStyleElement: true,
						},
					],
				};
			})
		)
		.pipe(rename({prefix: "icon-"}))
		.pipe(svgstore({inlineSvg: true}));

	function fileContents(filePath, file) {
		return file.contents.toString();
	}

	return mergeStream(
		gulp
			.src("./src/index.html")
			.pipe(inject(svgs, {transform: fileContents}))
			.pipe(gulp.dest("./src")),

		gulp
			.src("./src/yandex-index.html")
			.pipe(inject(svgs, {transform: fileContents}))
			.pipe(gulp.dest("./src")),

		gulp
			.src("./src/mail-index.html")
			.pipe(inject(svgs, {transform: fileContents}))
			.pipe(gulp.dest("./src")));
});

gulp.task("less", function () {
	return src("./src/assets/styles/main.less")
		.pipe(less())
		.pipe(
			autoprefixer({
				cascade: false,
			})
		)
	// pipe(replace("../../../../fonts", "src/assets/styles/common/fonts"))
	// 	.pipe(dest("./dist"));
});

gulp.task("html", function () {
	return mergeStream(
		gulp
			.src("./src/index.html")
			.pipe(gulp.dest("./dist")),

		gulp
			.src("./src/yandex-index.html")
			.pipe(gulp.dest("./dist")),

		gulp
			.src("./src/mail-index.html")
			.pipe(gulp.dest("./dist"))
	);
});

gulp.task("fonts", function () {
	return gulp.src("./src/assets/styles/common/**")
		.pipe(dest("./dist/src/assets/fonts"))
})

gulp.task("page", function () {
	return gulp.src("./src/assets/page/**")
		.pipe(dest("./dist/src/"))
})


gulp.task("serve", function () {
	browserSync.init({
		server: {
			baseDir: "dist",
		},
	});

	gulp.watch("./src/assets/styles/**/*.less").on("change", series("less"));
	gulp.watch("./src/index.html").on("change", series("html"));
	gulp.watch("./src/yandex-index.html").on("change", series("html"));
	gulp.watch("./src/mail-index.html").on("change", series("html"));

	gulp.watch("./dist/main.css").on("change", browserSync.reload);
	gulp.watch("./dist/index.html").on("change", browserSync.reload);
	gulp.watch("./dist/yandex-index.html").on("change", browserSync.reload);
	gulp.watch("./dist/mail-index.html").on("change", browserSync.reload);
});

gulp.task("build", series("svgstore", "less", "html", "fonts", "page"));

gulp.task("default", series("svgstore", parallel("html", "less", "fonts", "page"), "serve"));
