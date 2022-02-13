import svgSprite from "gulp-svg-sprite";

export const makeSvgSprite = () => {
    return app.gulp.src(`${app.path.src.svgicons}`, {})
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title: "SVG",
            message: "Error: <%= error.message %>"
        }))
    )
    .pipe(svgSprite({
        mode: {
            stack: {
                sprite: `../icon_sprite/sprite.svg`,
                example: true
            }
        },
    }
    ))
    .pipe(app.gulp.dest(`${app.path.srcFolder}/img/`));
};