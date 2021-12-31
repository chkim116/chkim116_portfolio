import { DefinePlugin } from 'webpack';
import { WebpackManifestPlugin } from 'webpack-manifest-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import dotenv from 'dotenv';
import PATHS from './PATHS';
dotenv.config();

export default function getPlugins(mode: 'production' | 'development') {
    const devPlugins = [
        new HTMLWebpackPlugin({
            template: PATHS.html,
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            chunkFilename: '[id].[contenthash].css',
        }),
        new DefinePlugin({
            'process.env': JSON.stringify(process.env),
        }),
    ];

    const prodPlugins = [
        ...devPlugins,
        new CopyPlugin({
            patterns: [
                {
                    from: PATHS.robots,
                    to: PATHS.output,
                },
            ],
        }),
        new WebpackManifestPlugin({
            fileName: 'mainfest.json',
            basePath: '/',
        }),
    ];

    return mode === 'production' ? prodPlugins : devPlugins;
}
