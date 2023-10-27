import babel from 'rollup-plugin-babel';
import {terser} from 'rollup-plugin-terser';
import scss from "rollup-plugin-scss";

export default {
    input: 'jquery.nestable.js',
    output: {
        file: 'dist/jquery.nestable.min.js',
        format: 'esm',
        plugins: [terser()]
    },
    plugins: [
        babel(),
        scss({
            fileName: "jquery.nestable.min.css",
            failOnError: true,
            runtime: require("sass"),
        }),
    ]
};