declare type JSONObject = {[key: string]: any}
declare type PortfolioData = {
    [key: string]: {
        [key: string] : JSONObject
    }
}
declare type DataSection = {[key: string] : JSONObject}
declare type FormControlElement = HTMLInputElement | HTMLTextAreaElement;
