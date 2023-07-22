const path = require("path");

module.exports = async () => {
    return {
        output: {
            path: path.resolve(__dirname, "dist"),
        },
        entry: {
            main: ["./src/index.tsx"],
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: "ts-loader",
                }
            ]
        }
    };
}
