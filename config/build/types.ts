export interface BuildPaths {
    entry: string
    output: string
    src: string
    public: string
}

export interface EnvVars {
    mode: 'production' | 'development'
    port?: number
}

export interface BuildOptions {
    isDev: boolean
    paths: BuildPaths
}