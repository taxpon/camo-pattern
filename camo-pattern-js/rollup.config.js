import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';
import scss from "rollup-plugin-scss";

const production = !process.env.ROLLUP_WATCH;

function serve() {
	let server;

	function toExit() {
		if (server) server.kill(0);
	}

	return {
		writeBundle() {
			if (server) return;
			server = require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
				stdio: ['ignore', 'inherit', 'inherit'],
				shell: true
			});

			process.on('SIGTERM', toExit);
			process.on('exit', toExit);
		}
	};
}

export default [
	{
		input: 'src/index.ts',
		output: {
			sourcemap: !production,
			format: 'esm',
			file: 'public/build/lib/camo-pattern.js'
		},
		plugins: [
			typescript({
				sourceMap: !production,
				inlineSources: !production,
				tsconfig: "./tsconfig.json"
			}),
			scss(),
			!production && serve(),
			!production && livereload('public'),
			production && terser()
		],
		watch: {
			clearScreen: false
		}
	}
];
