export const tableFields = [
    {mobileShown: true, name: 'Rank'},
    {mobileShown: true, name: 'Name'},
    {mobileShown: false, name: 'Price'},
    {mobileShown: false, name: 'Market Cap'},
    {mobileShown: false, name: 'VWAP (24Hr)'},
    {mobileShown: false, name: 'Supply'},
    {mobileShown: false, name: 'Volume (24Hr)'},
    {mobileShown: true, name: 'Change (24Hr)'}
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