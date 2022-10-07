import {FC, useEffect, useState} from 'react';
import {FieldDescription, FieldName, ParamsWrapper, SecondaryText, StyledInlineWrapper, Title, WrapperCurrency } from './styles';
import {useParams} from "react-router-dom";
import {Item} from "../../utils/types";
import {getData, getFullDataById} from "../../API";
import { InlineWrapper } from '../../UI';
import {convertBigNumbers} from "../../utils/convertBigNumbers";
import {Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';
import {colors} from "../../UI/colors";
import {useMediaQuery} from "../../hooks/useMediaQuery";

const OneCurrencyPage: FC = () => {
    const { id } = useParams();
    const [data, setData] = useState<Item>();
    const [chartData, setChartData] = useState<Array<any>>([]);
    const isPhone = useMediaQuery('(max-width: 480px)');
    useEffect(()=>{
        getData({search: id || ''}).then((res)=>{setData(res.data.data[0])})
        getFullDataById({id: id || "", interval:'h2'}).then((res)=> {setChartData(res.data.data.map((element: any)=>{ return{...element, time: new Date(element.time)}} ))})
    },[id])
    const style = {
        display: isPhone?'none':'initial'
    }
    return (
        <WrapperCurrency>
           <InlineWrapper>
               <Title>{data?.name}</Title>
               <SecondaryText>
                   ({data?.symbol})
               </SecondaryText>
           </InlineWrapper>
            <ParamsWrapper>
                <StyledInlineWrapper>
                    <FieldName>Rank:</FieldName>
                    <FieldDescription>{data?.rank}</FieldDescription>
                </StyledInlineWrapper>
                <StyledInlineWrapper>
                    <FieldName>Price: </FieldName>
                    <FieldDescription>${convertBigNumbers(data?.priceUsd || "")}</FieldDescription>
                </StyledInlineWrapper>
                <StyledInlineWrapper>
                    <FieldName>Market Cap: </FieldName>
                    <FieldDescription>${convertBigNumbers(data?.marketCapUsd || "")}</FieldDescription>
                </StyledInlineWrapper>
                <StyledInlineWrapper>
                    <FieldName>VWAP (24Hr): </FieldName>
                    <FieldDescription>${convertBigNumbers(data?.vwap24Hr || "")}</FieldDescription>
                </StyledInlineWrapper>
                <StyledInlineWrapper>
                    <FieldName>Supply: </FieldName>
                    <FieldDescription>{convertBigNumbers(data?.supply || "")}</FieldDescription>
                </StyledInlineWrapper>
                <StyledInlineWrapper>
                    <FieldName>Volume (24Hr): </FieldName>
                    <FieldDescription>${convertBigNumbers(data?.volumeUsd24Hr || "")}</FieldDescription>
                </StyledInlineWrapper>
                <StyledInlineWrapper>
                    <FieldName>Change (24Hr): </FieldName>
                    <FieldDescription>{parseFloat(data?.changePercent24Hr || "").toFixed(2)}%</FieldDescription>
                </StyledInlineWrapper>
                <StyledInlineWrapper>
                    <FieldName></FieldName>
                    <FieldDescription></FieldDescription>
                </StyledInlineWrapper>
            </ParamsWrapper>
            <div style={{position: 'static'}}>
                <ResponsiveContainer width="100%"  aspect={window.innerWidth <=480? 1: 2}>
                    <AreaChart data={chartData}  margin={{ top: 30, right: 0, left: 0, bottom: 0 }}>
                        <YAxis domain={['dataMin', 'auto']}/>
                        <XAxis dataKey='time' display={'none'}/>
                        <Tooltip wrapperStyle={style}/>
                        <Area type="monotone" dataKey="priceUsd" stroke={colors.main_blue} fillOpacity={0.5} fill={colors.bright_blue} />
                    </AreaChart>
                </ResponsiveContainer>
            </div>



        </WrapperCurrency>
    );
};

export default OneCurrencyPage;