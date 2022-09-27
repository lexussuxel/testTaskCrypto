import axios from "axios";

export interface IParams{
    search?: string;
    limit?: number;
    offset?: number;
    ids?: Array<string>;
}

export interface IFullParams{
    id:string;
    interval: string;
}

export type Item = {
    id: string;
    rank: string;
    symbol:string;
    name:string;
    supply: string;
    maxSupply: string;
    marketCapUsd: string;
    volumeUsd24Hr: string;
    priceUsd: string;
    changePercent24Hr: string;
    vwap24Hr: string;

}

export async function getData(params?: IParams){
    const data = await axios.get('https://api.coincap.io/v2/assets', {params})
    return data
}

export async function getFullDataById(params:IFullParams){
    const data = await axios.get(`api.coincap.io/v2/assets/${params.id}/history`, {params})
    return data
}