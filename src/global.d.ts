declare module '*.png'
declare module '*.jpeg'
declare module '*.jpg'
declare module '*.svg' {
    const svg: React.FunctionComponent<React.SVGProps<SVGElement>>
    export default svg
}
