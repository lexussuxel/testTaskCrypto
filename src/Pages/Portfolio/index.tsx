import {FC} from 'react';
import {ColumnWrapper, WrapperComponents } from '../../UI';
import {useAppSelector} from "../../hooks/useTypedSelector";

const Portfolio: FC= () => {
    const { count, percent, portfolio} = useAppSelector((state)=> state.portfolio);
    return (
        <WrapperComponents>
            <ColumnWrapper>
                <h1>Your portfolio</h1>
                { portfolio.length?
                    <div>
                    {
                        portfolio.map((element) =>
                            <div>{element.name} {element.count} {(element.count * parseFloat(element.priceUsd)).toFixed(2)}</div>)
                    }
                    </div>
                    :
                    <div>Sorry, your portfolio is empty</div>
                }
                <hr/>
                <div>${count.toFixed(2)} + ${percent.toFixed(2)}%</div>
            </ColumnWrapper>
        </WrapperComponents>
    );
};

export default Portfolio;