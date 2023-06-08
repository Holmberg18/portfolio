declare type JSONObject = {[key: string]: string}
declare type PortfolioData = {
    [key: string]: {
        [key: string] : JSONObject
    }
}
declare type DataSection = {[key: string] : JSONObject}