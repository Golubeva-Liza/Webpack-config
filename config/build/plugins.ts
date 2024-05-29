import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { Configuration } from 'webpack'
import { BuildOptions } from './types'

export const webpackPlugins = ({
    isDev,
    paths,
}: BuildOptions): Configuration['plugins'] => {
    return [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        !isDev &&
            new MiniCssExtractPlugin({
                filename: 'css/[name].[contenthash:8].css',
                chunkFilename: 'css/[name].[contenthash:8].css',
            }),
    ].filter(Boolean)
}
