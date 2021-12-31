import { Configuration, EnvironmentPlugin } from 'webpack';
import 'webpack-dev-server';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import dotenv from 'dotenv';
import path from 'path';
dotenv.config();

type NODE_ENV = 'production' | 'development';

const { REACT_APP_DEV_URL } = process.env;
const mode = (process.env.NODE_ENV || 'development') as NODE_ENV;

const config: Configuration = {
    name: 'client',
    target: 'web',
    mode,
    entry: {
        client: './src/index.tsx', // 번들 대상
    },
    module: {
        rules: [
            {
                test: /.(ts|tsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        [
                            '@babel/preset-react',
                            {
                                runtime: 'automatic',
                            },
                        ],
                        '@babel/preset-typescript',
                        [
                            '@babel/preset-env',
                            {
                                targets: {
                                    browsers: ['> 1% in KR'],
                                    node: 'current',
                                },
                                modules: 'auto',
                                useBuiltIns: 'usage',
                                corejs: 3,
                            },
                        ],
                    ],
                },
            },
            {
                test: /\.css$/i,
                exclude: /node_modules/,
                include: path.resolve(process.cwd(), 'src'),
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.(png|jpg|gif)$/i,
                include: path.resolve(process.cwd(), 'src'),
                loader: 'url-loader',
                options: {
                    name: '[hash].[ext]',
                    publicPath: '/',
                    limit: 10_000,
                    esModule: false,
                },
            },
        ],
    },
    devServer: {
        static: {
            directory: path.resolve(process.cwd(), 'build'),
            publicPath: '/',
        },
        open: true,
        port: 3000,
        historyApiFallback: true,
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(process.cwd(), 'public/robots.txt'),
                    to: path.resolve(process.cwd(), 'build'),
                },
            ],
        }),
        new HTMLWebpackPlugin({
            template: path.resolve(process.cwd(), 'public/index.html'),
        }),
        new MiniCssExtractPlugin({
            filename: 'styles.css',
        }),
        new EnvironmentPlugin({
            REACT_APP_DEV_URL,
        }),
    ],
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
    },
    output: {
        filename: 'client.js',
        path: path.resolve(process.cwd(), 'build'),
        publicPath: '/',
    },
};

export default config;
