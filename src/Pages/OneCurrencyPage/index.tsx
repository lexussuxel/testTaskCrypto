import {FC, useEffect, useState} from 'react';
import {FieldDescription, FieldName, ParamsWrapper, SecondaryText, StyledInlineWrapper, Title, WrapperCurrency, SpaceBetween } from './styles';
import {useParams} from "react-router-dom";
import {convertable, currency, Item, ItemChart, tableFields} from "../../utils/types";
import {getData, getFullDataById} from "../../API";
import {InlineWrapper} from '../../UI';
import {convertBigNumbers} from "../../utils/convertBigNumbers";
import {Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';
import {colors} from "../../UI/colors";
import {useMediaQuery} from "../../hooks/useMediaQuery";
import {useTranslation} from "react-i18next";
import AddCurrencyButton from "../../components/AddCurrencyButton";

const OneCurrencyPage: FC = () => {
    const {t} = useTranslation();
    const {id} = useParams();
    const [data, setData] = useState<Item>();
    const [chartData, setChartData] = useState<Array<ItemChart>>([]);
    const isPhone = useMediaQuery('(max-width: 480px)');
    useEffect(() => {
        getData({search: id || ''}).then((res) => {
            setData(res.data.data[0])
        })
        getFullDataById({id: id || "", interval: 'h2'}).then((res) => {
            setChartData(res.data.data.map((element: ItemChart) => {
                return {...element, time: new Date(element.time)}
            }))
        })
    }, [id])
    const style = {
        display: isPhone ? 'none' : 'initial',
    }
    return (
        <WrapperCurrency>
            <SpaceBetween>
                <InlineWrapper>
                    <Title>{data?.name}</Title>
                    <SecondaryText>
                        ({data?.symbol})
                    </SecondaryText>
                </InlineWrapper>
               <AddCurrencyButton element={data} />
            </SpaceBetween>
            <ParamsWrapper>
                {tableFields.map((element, key) =>
                    <StyledInlineWrapper key={key}>
                        <FieldName>{t(`Currency.${element.id}`)}</FieldName>
                        <FieldDescription>{currency.includes(element.id) ? "$" : ""}{!(data) || convertable.includes(element.id) ? convertBigNumbers(data?.[element.id as keyof typeof data]) : data[element.id as keyof typeof data]}{element.id === 'changePercent24Hr' ? "%" : ""}</FieldDescription>
                    </StyledInlineWrapper>
                )}
            </ParamsWrapper>
                <ResponsiveContainer width="100%" aspect={isPhone ? 1 : 2} >
                    <AreaChart data={chartData} margin={{top: 30, right: 0, left: 0, bottom: 0}} style={{position: isPhone?'static':'relative'}}>
                        <YAxis domain={['dataMin', 'auto']}/>
                        <XAxis dataKey='time' display={'none'}/>
                        <Tooltip wrapperStyle={style}/>
                        <Area type="monotone" dataKey="priceUsd" stroke={colors.main_blue} fillOpacity={0.5}
                              fill={colors.bright_blue}/>
                    </AreaChart>
                </ResponsiveContainer>
        </WrapperCurrency>
    );
};

export default OneCurrencyPage;