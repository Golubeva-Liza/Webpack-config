import * as path from "path";
import * as HtmlWebpackPlugin from "html-webpack-plugin";

module.exports = (env) => {
    return {
        mode: env.mode ?? "development",
        entry: path.resolve(__dirname, "src", "index.ts"),
        output: {
            path: path.resolve(__dirname, "build"),
            filename: "[name].[contenthash].js",
            clean: true,
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, "public", "index.html"),
            }),
        ],
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: "ts-loader",
                    exclude: /node_modules/,
                },
            ],
        },
        resolve: {
            extensions: [".tsx", ".ts", ".js"],
        },
    };
};
