export const tableFields = [
    'Rank',
    'Name',
    'Price',
    'Market Cap',
    'VWAP (24Hr)',
    'Supply',
    'Volume (24Hr)',
    'Change (24Hr)'
]

export const tableFieldsPhone = [
    'Name',
    'Price',
    'Change (24Hr)'
]

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

export type ShortItem = {
    id: string;
    symbol: string;
    name: string;
    priceUsd: string;
    count: number;
}

export interface IPortfolio {
    portfolio: Array<ShortItem>
    percent: number;
    count: number;
}