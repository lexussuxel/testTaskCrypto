import {FC, useState} from 'react';
import {ColumnWrapper,  Input, StyledButton, SubmitButton, WrapperComponents} from '../../UI';
import {useAppSelector} from "../../hooks/useTypedSelector";
import {ItemWrapper, PortfolioWrapper, StyledHr, Title, ButtonWrapper, InfoWrapper, StyledForm, StyledInlineWrapper, ItemDescription } from './styles';
import {ShortItem} from "../../utils/types";
import {useAppDispatch} from "../../hooks/useTypedDispatch";
import {changeCount, remove} from "../../store/reducers/portfolioSlice";

const Portfolio: FC= () => {
    const { count, percent, portfolio} = useAppSelector((state)=> state.portfolio);
    const [inputValue, setInputValue] = useState<number>(0);
    const [checkedValue, setCheckedValue] = useState<string>('');
    const changeCheckedValue = (element: ShortItem)=>{
        setCheckedValue(element.id);
        setInputValue(element.count)
    }

    const dispatch = useAppDispatch()

    const handleSubmit = (element: ShortItem) => {
        setCheckedValue("");
        dispatch(changeCount({...element, count: inputValue - element.count}))
    }

    const handleRemove = (element: ShortItem) => {
        setCheckedValue("");
        dispatch(remove(element))
    }

    return (
            <PortfolioWrapper>
                <ColumnWrapper>
                    <Title>Your portfolio</Title>
                    { portfolio.length?
                        portfolio.map((element) =>
                            <ItemWrapper key={element.id}>
                                <StyledInlineWrapper>
                                    <InfoWrapper>
                                        <div>{element.name} </div>
                                        {checkedValue === element.id?
                                            <StyledForm onSubmit={() => handleSubmit(element)}>
                                                <Input type='number' value={inputValue} min="0" step='10e-4' onChange={(e)=> {setInputValue(parseFloat(e.target.value))}}/>
                                                <SubmitButton type='submit' disabled={isNaN(inputValue)}>add</SubmitButton>
                                                <SubmitButton type='button' onClick={()=> handleRemove(element)}>remove</SubmitButton>
                                            </StyledForm>
                                            :  <ItemDescription>{element.count} {element.symbol}</ItemDescription>

                                        }
                                        <ItemDescription>
                                            ${checkedValue === element.id?(inputValue * parseFloat(element.priceUsd)).toFixed(2)
                                            :
                                            (element.count * parseFloat(element.priceUsd)).toFixed(2)}
                                        </ItemDescription>
                                    </InfoWrapper>
                                    <ButtonWrapper visible={checkedValue !== element.id}>
                                        <StyledButton onClick={()=> changeCheckedValue(element)}>change value</StyledButton>
                                    </ButtonWrapper>
                                </StyledInlineWrapper>
                                <StyledHr/>
                            </ItemWrapper>)
                        :
                        <div>Sorry, your portfolio is empty</div>
                    }
                    <div>${count.toFixed(2)} + ${percent.toFixed(2)}%</div>
                </ColumnWrapper>
            </PortfolioWrapper>
    );
};

export default Portfolio;