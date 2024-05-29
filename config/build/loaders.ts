import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { ModuleOptions } from 'webpack'
import { BuildOptions } from './types'

export const webpackLoaders = (
    options: BuildOptions
): ModuleOptions['rules'] => {
    return [
        {
            test: /\.(png|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        },
        {
            //Create React Component from svg
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: [
                {
                    loader: '@svgr/webpack',
                    options: {
                        icon: true,
                        svgoConfig: {
                            plugins: [
                                {
                                    name: 'convertColors',
                                    params: {
                                        currentColor: true,
                                    },
                                },
                            ],
                        },
                    },
                },
            ],
        },
        {
            test: /\.s[ac]ss$/i,
            use: [
                // Creates `style` nodes from JS strings
                options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                // Translates CSS into CommonJS
                'css-loader',
                // Compiles Sass to CSS
                'sass-loader',
            ],
        },
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        },
    ]
}
