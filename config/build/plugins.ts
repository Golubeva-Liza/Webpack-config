import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { Configuration, DefinePlugin } from 'webpack'
import { BuildOptions } from './types'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'

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

        new DefinePlugin({
            //global vars like env in code
            // __ENV__: JSON.stringify(_)
        }),

        // поверка типов идет в отдельном процессе, не во время сборки
        new ForkTsCheckerWebpackPlugin(),

        isDev && new ReactRefreshWebpackPlugin()
    ].filter(Boolean)
}
