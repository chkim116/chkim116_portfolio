import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import PATHS from './PATHS';

export default function getRules() {
    const rules = [
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
            include: PATHS.app,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
        },
        {
            test: /\.(png|jpg|gif)$/i,
            include: PATHS.app,
            loader: 'url-loader',
            options: {
                name: '[hash].[ext]',
                publicPath: PATHS.publicPath,
                limit: 10_000,
                esModule: false,
            },
        },
    ];

    return rules;
}
