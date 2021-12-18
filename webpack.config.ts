import { Configuration } from "webpack";
import "webpack-dev-server";
import HTMLWebpackPlugin from "html-webpack-plugin";
import dotenv from "dotenv";
import path from "path";
dotenv.config();

type NODE_ENV = "production" | "development";

const mode = (process.env.NODE_ENV || "development") as NODE_ENV;

const config: Configuration = {
    name: "client",
    target: "web",
    mode,
    entry: {
        client: "./src/index.tsx", // 번들 대상
    },
    module: {
        rules: [
            {
                test: /.(ts|tsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: [
                        [
                            "@babel/preset-react",
                            {
                                runtime: "automatic",
                            },
                        ],
                        "@babel/preset-typescript",
                        [
                            "@babel/preset-env",
                            {
                                targets: {
                                    browsers: ["> 1% in KR"],
                                    node: "current",
                                },
                                modules: "auto",
                                useBuiltIns: "usage",
                                corejs: 3,
                            },
                        ],
                    ],
                },
            },
        ],
    },
    devServer: {
        static: {
            directory: path.resolve(process.cwd(), "build"),
            publicPath: "/",
        },
        open: true,
        port: 5500,
        historyApiFallback: true,
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(process.cwd(), "public/index.html"),
        }),
    ],
    resolve: {
        extensions: [".js", ".ts", ".tsx"],
    },
    output: {
        filename: "client.js",
        path: path.resolve(process.cwd(), "build"),
        publicPath: "/web/",
    },
};

export default config;
