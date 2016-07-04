///<reference path="typings/index.d.ts" />

export interface ISentimentAnalyzer {
    sentiment(data:any|Array<any>, callback?:Function) : Promise<any>;
}