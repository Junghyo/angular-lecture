
const path = require("path");

module.exports = {
    mode: "production",        // development, production, none
    devtool: "source-map",
    entry: path.join(__dirname, ""),
    output: {
        filename: "",
        path: path.join(__dirname, "dist")
    },
    optimization: {
        
    },
    module: {
        rules: [
            {
                
            }
        ]
    }
}