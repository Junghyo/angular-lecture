
const path = require("path");

module.exports = {
    mode: "development",        // development, production, none
    devtool: "source-map",
    entry: path.join(__dirname, "./source/A08_Main.ts"),
    output: {
        filename: "A08Result.js",
        path: path.join(__dirname, "dist")
    },
    optimization: {
        
    },
    module: {
        rules: [
            {
                test:/\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    }
}