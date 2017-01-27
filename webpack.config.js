module.exports = {
	entry: { app: './index.js' },
	output: {
		path: './',
		filename: 'app.bundle.js'
	},
	devtool: 'source-map',

	watch: true,

	watchOptions: {
		aggregateTimeout: 200
	}
};
