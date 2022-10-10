export const tableFields = [
    {mobileShown: true, name: 'Rank', id: 'rank'},
    {mobileShown: true, name: 'Name', id: 'name'},
    {mobileShown: false, name: 'Price', id: 'priceUsd'},
    {mobileShown: false, name: 'Market Cap', id: 'marketCapUsd'},
    {mobileShown: false, name: 'VWAP (24Hr)', id: 'vwap24Hr'},
    {mobileShown: false, name: 'Supply', id: 'supply'},
    {mobileShown: false, name: 'Volume (24Hr)', id: 'volumeUsd24Hr'},
    {mobileShown: true, name: 'Change (24Hr)', id: 'changePercent24Hr'}
]

export const convertable = [
    'priceUsd',
    'supply',
    'marketCapUsd',
    'volumeUsd24Hr',
    'changePercent24Hr',
    'vwap24Hr'
]

export const currency = [
    'marketCapUsd',
    'volumeUsd24Hr',
    'priceUsd',
    'vwap24Hr'
]

export type ItemChart = {
    time: Date;
    priceUsd: string;
    date: string;
    circulatingSupply: string;
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