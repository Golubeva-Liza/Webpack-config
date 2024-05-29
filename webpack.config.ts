import path from 'path'
import webpack from 'webpack'
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'
import {
    BuildOptions,
    BuildPaths,
    EnvVars,
    webpackLoaders,
    webpackPlugins,
} from './config/build'

export default (env: EnvVars): webpack.Configuration => {
    const isDev = env.mode === 'development'

    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: path.resolve(__dirname, 'build'),
        public: path.resolve(__dirname, 'public'),
        src: path.resolve(__dirname, 'src'),
    }

    const options: BuildOptions = {
        isDev,
        paths,
    }

    return {
        mode: env.mode ?? 'development',
        entry: paths.entry,
        output: {
            path: paths.output,
            filename: '[name].[contenthash].js',
            clean: true,
        },
        plugins: webpackPlugins(options),
        module: {
            rules: webpackLoaders(options),
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
            alias: {
                '@': paths.src
            }
        },
        devtool: 'inline-source-map',
        devServer: {
            port: env.port ?? 8080,
            open: true,
            historyApiFallback: true,
            hot: true
        },
    }
}
