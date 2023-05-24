// const scss = require ('rollup-plugin-scss');
const postcss = require ('rollup-plugin-postcss');
const urlPlug = require ('@rollup/plugin-url');
const svgPlug = require ('@svgr/rollup');
// const cssnano = require ('cssnano');
const autoprefixer = require ('autoprefixer');
// Not transpiled with TypeScript or Babel, so use plain Es6/Node.js!
module.exports = {
    // This function will run for each entry/format/env combination
    rollup: function (config, options) {

        // config.plugins.push(scss({ fileName: 'bundle.css' }));
        config.plugins.push(
            postcss({
                modules: true,
                use: [
                    [
                        "sass",
                        {
                            includePaths: ["./node_modules"]
                        },
                    ]
                ]
            }),
        );
        config.plugins.push(urlPlug());
        config.plugins.push(svgPlug());

        return config; // always return a config.
    },
};
