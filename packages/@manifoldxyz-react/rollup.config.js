const resolve = require("@rollup/plugin-node-resolve")
const commonjs = require("@rollup/plugin-commonjs")
const typescript = require("@rollup/plugin-typescript")
const {default: dts} = require("rollup-plugin-dts")
const { terser } = require("rollup-plugin-terser")
const peerDepsExternal = require('rollup-plugin-peer-deps-external')
const json = require("@rollup/plugin-json")
const packageJson = require("./package.json");

module.exports = [
    {
        input: "src/index.ts",
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true,
            },
        ],
        plugins: [
            peerDepsExternal(),
            resolve(),
            commonjs(),
            typescript({ tsconfig: "./tsconfig.json" }),
            terser(),
            json()
        ],
    }

  ];
