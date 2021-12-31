import { Configuration } from 'webpack';
import 'webpack-dev-server';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import dotenv from 'dotenv';
import getPlugins from './plugins';
import PATHS from './PATHS';
import getRules from './rules';
dotenv.config();

type NODE_ENV = 'production' | 'development';

const { NODE_ENV } = process.env;
const mode = (NODE_ENV || 'development') as NODE_ENV;

const config: Configuration = {
    name: 'client',
    target: 'web',
    mode,
    entry: {
        client: './src/index.tsx', // 번들 대상
    },
    module: {
        rules: [...getRules()],
    },
    plugins: [...getPlugins(mode)],
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
    },
    output: {
        filename: '[name].[chunkhash].js',
        path: PATHS.output,
        publicPath: PATHS.publicPath,
    },
    optimization:
        mode === 'production'
            ? {
                  minimizer: [new CssMinimizerPlugin()],
                  splitChunks: {
                      cacheGroups: {
                          vendor: {
                              chunks: 'initial',
                              name: 'vendor',
                              enforce: true,
                          },
                      },
                  },
              }
            : {},
    devServer:
        mode === 'production'
            ? {}
            : {
                  static: {
                      directory: PATHS.output,
                      publicPath: PATHS.publicPath,
                  },
                  open: true,
                  port: 3000,
                  historyApiFallback: true,
              },
};

export default config;
