import React, {FC, useEffect, useState} from 'react';
import {ColumnWrapper} from "../../UI";
import {useNavigate} from "react-router-dom";
import {InlineItemsWrapper, ItemDescription, ItemTitle, ItemWrapper, UnderHeaderWrapper} from './styles';
import {convertBigNumbers} from "../../utils/convertBigNumbers";
import {Item} from "../../utils/types";
import {getData} from "../../utils/api";

const UnderHeader: FC = () => {
    const navigate = useNavigate();
    const [data, setData] = useState<Array<Item>>([]);
    const res = getData({limit:3});
    useEffect(() => {
        res.then((res)=>{setData(res.data)})
    }, [])
    return (
        <UnderHeaderWrapper>
            <ColumnWrapper>
                <InlineItemsWrapper>
                    {data.map((element) => (
                        <ItemWrapper onClick={() => navigate(`/currency/${element.id}`)} key={element.rank}>
                            <ColumnWrapper>
                                <ItemTitle>
                                    {element.name}
                                </ItemTitle>
                                <ItemDescription>
                                    {"$" + convertBigNumbers(element.priceUsd)}
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
