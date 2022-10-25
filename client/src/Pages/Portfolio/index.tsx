import {FC, useState} from 'react';
import {ColumnWrapper} from '../../UI';
import {useAppSelector} from "../../hooks/useTypedSelector";
import {
    ButtonWrapper,
    InfoWrapper,
    ItemDescription,
    ItemWrapper,
    PortfolioWrapper,
    StyledForm,
    StyledHr,
    StyledInlineWrapper,
    Title
} from './styles';
import Input from '../../components/Input'
import {ShortItem} from "../../utils/types";
import {useAppDispatch} from "../../hooks/useTypedDispatch";
import {changeCount, remove} from "../../store/reducers/portfolioSlice";
import {useTranslation} from "react-i18next";
import StyledButton from "../../components/StyledButton"

const Portfolio: FC = () => {
    const {t} = useTranslation();
    const {count, percent, portfolio} = useAppSelector((state) => state.portfolio);
    const [inputValue, setInputValue] = useState<number>(0);
    const [checkedValue, setCheckedValue] = useState<string>('');
    const changeCheckedValue = (element: ShortItem) => {
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
                <Title>{t('Portfolio.Your portfolio')}</Title>
                {portfolio.length ?
                    portfolio.map((element) =>
                        <ItemWrapper key={element.id}>
                            <StyledInlineWrapper>
                                <InfoWrapper>
                                    <div>{element.name} </div>
                                    {checkedValue === element.id ?
                                        <StyledForm onSubmit={() => handleSubmit(element)}>
                                            <Input  value={inputValue}
                                                   onChange={(e) => {
                                                       setInputValue(parseFloat(e.target.value))
                                                   }}/>
                                            <StyledButton type='submit'
                                                          disabled={isNaN(inputValue)}>{t('Portfolio.Submit')}</StyledButton>
                                            <StyledButton type='button'
                                                          onClick={() => handleRemove(element)}>{t('Portfolio.Delete')}</StyledButton>
                                        </StyledForm>
                                        : <ItemDescription>{element.count} {element.symbol}</ItemDescription>

                                    }
                                    <ItemDescription>
                                        ${checkedValue === element.id ? (inputValue * parseFloat(element.priceUsd)).toFixed(2)
                                        :
                                        (element.count * parseFloat(element.priceUsd)).toFixed(2)}
                                    </ItemDescription>
                                </InfoWrapper>
                                <ButtonWrapper visible={checkedValue !== element.id}>
                                    <StyledButton onClick={() => changeCheckedValue(element)}>
                                        {t('Portfolio.Edit')}
                                    </StyledButton>
                                </ButtonWrapper>
                            </StyledInlineWrapper>
                            <StyledHr/>
                        </ItemWrapper>)
                    :
                    <div>{t('Portfolio.Empty')}</div>
                }
                <StyledInlineWrapper>
                    <Title>{t('Portfolio.Total')}</Title>
                    <p>${count.toFixed(2)} + ${percent.toFixed(2)}%</p>
                </StyledInlineWrapper>

            </ColumnWrapper>
        </PortfolioWrapper>
    );
};

export default Portfolio;
