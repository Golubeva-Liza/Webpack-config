export interface BuildPaths {
    entry: string
    output: string
    html: string
    src: string
}

export interface EnvVars {
    mode: 'production' | 'development'
    port?: number
}

export interface BuildOptions {
    isDev: boolean
    paths: BuildPaths
}