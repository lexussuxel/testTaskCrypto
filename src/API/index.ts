import axios, {AxiosResponse} from "axios";

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


export async function getData(params?: IParams): Promise<AxiosResponse>{
    return await axios.get('https://api.coincap.io/v2/assets', {params})
}

export async function getFullDataById(params:IFullParams): Promise<AxiosResponse>{
    return await axios.get(`api.coincap.io/v2/assets/${params.id}/history`, {params})
}