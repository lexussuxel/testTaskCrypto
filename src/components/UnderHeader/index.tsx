import React, {FC, useEffect, useState} from 'react';
import {  ColumnWrapper} from "../../UI";
import {getData, Item} from "../../API";
import {useNavigate} from "react-router-dom";
import { UnderHeaderWrapper, InlineItemsWrapper, ItemWrapper, ItemDescription, ItemTitle } from './styles';

const UnderHeader:FC = () => {
    const response = getData({limit:3});
    const navigate = useNavigate();
    const [data, setData] = useState<Array<Item>>([]);
    useEffect(()=>{
        response.then((res)=>{setData(res)})
    }, [])
    return (
        <UnderHeaderWrapper>
            <ColumnWrapper>
                <InlineItemsWrapper>
                    {data.map((element) => (
                        <ItemWrapper onClick={()=>navigate(`/currency/${element.id}`)}>
                            <ColumnWrapper>
                                <ItemTitle>
                                    {element.name}
                                </ItemTitle>
                                <ItemDescription>
                                    {parseInt(element.priceUsd).toFixed(2) + " $"}
                                </ItemDescription>
                            </ColumnWrapper>
                        </ItemWrapper>
                    ))}
                </InlineItemsWrapper>
            </ColumnWrapper>
        </UnderHeaderWrapper>
    );
};

export default UnderHeader;