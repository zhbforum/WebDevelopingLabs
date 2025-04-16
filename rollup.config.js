import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import nodeResolve from "@rollup/plugin-node-resolve";
import run from "@rollup/plugin-run";

const isDev = process.env.ROLLUP_WATCH === 'true';

export default 
{
    input: './src/index.js',
    output: 
    {
      file: './dist/server.mjs',
      format: 'es',
    },
    plugins: 
    [
      nodeResolve(),
      commonjs(),
      json(),
      isDev && run()
    ]
};