const path = require('path');
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');

module.exports = {
    future: { webpack5: true },
    webpack: (config, {dev, defaultLoaders}) => {
        /**
         * Install and Update our Service worker
         * on our main entry file :)
         * Reason: https://github.com/ooade/NextSimpleStarter/issues/32
         */
        // const oldEntry = config.entry
        // config.entry = () =>
        // 	oldEntry().then(entry => {
        // 		entry['main.js'] && entry['main.js'].push(path.resolve('./utils/offline'))
        // 		return entry
        // 	})
        //
        // /* Enable only in Production */
        // if (!dev) {
        // 	// Service Worker
        // 	config.plugins.push(
        // 		new SWPrecacheWebpackPlugin({
        // 			cacheId: 'next-ss',
        // 			filepath: './src/static/sw.js',
        // 			minify: true,
        // 			staticFileGlobsIgnorePatterns: [/\.map$/],
        // 			staticFileGlobs: [
        // 				'./src/static/**/*', // Precache all static files by default
        // 			],
        // 			mergeStaticsConfig: false,
        // 			stripPrefix: './src/static/',
        // 			runtimeCaching: [
        // 				// Example with different handlers
        // 				{
        // 					handler: 'fastest',
        // 					urlPattern: /[.](png|jpg|css)/
        // 				},
        // 				{
        // 					handler: 'networkFirst',
        // 					urlPattern: /^http.*/ //cache all files
        // 				}
        // 			]
        // 		})
        // 	)
        // }
        // // config.module.rules.push({
        // //     test: /\.+(js)$/,
        // //     loader: defaultLoaders.babel,
        // //     include: path.resolve(__dirname, '../src'),
        // // });
		//
        // config.plugins.push(
        //     new FilterWarningsPlugin({
        //         exclude: /mini-css-extract-plugin[^]*Conflicting order between:/,
        //     }),
        // );


        return config
    }
}