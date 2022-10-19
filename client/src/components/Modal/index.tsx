import {Dispatch, FC, FormEvent, SetStateAction, useState} from 'react';
import {ColumnWrapper, Input, SubmitButton} from '../../UI';
import {ContentModal, WrapperModal, Title } from './styles';
import {Item} from "../../utils/types";
import {changeCount} from "../../store/reducers/portfolioSlice";
import {useAppDispatch} from "../../hooks/useTypedDispatch";

interface IModalProps{
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    element: Item | undefined;
}


const Modal: FC<IModalProps> = ({isOpen, setIsOpen,  element}) => {
    const [inputValue, setInputValue]= useState<number>(0)

    const exitFromModal = ()=>{
        setInputValue(0)
        setIsOpen(false);
    }
    const dispatch = useAppDispatch();
    const addCurrency = (count: number)=>{
        dispatch(changeCount(element ? {...element, count}: null));
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        addCurrency(inputValue);
        exitFromModal();
    }

    return (
        <WrapperModal active={isOpen} onClick={exitFromModal}>
            <ContentModal onClick={(e) => e.stopPropagation()}>
                <Title>Enter count of currency</Title>
                <div>Total price: ${isNaN(inputValue)? 0 :(parseFloat(element?.priceUsd || "") * inputValue).toFixed(3)} + ${isNaN(inputValue)? 0 :(parseFloat(element?.priceUsd || "") * inputValue * 0.018).toFixed(3)}%</div>
                <form onSubmit={handleSubmit}>
                    <ColumnWrapper>
                        <Input type='number' value={inputValue} min="0" step='10e-4' onChange={(e)=> {setInputValue(parseFloat(e.target.value))}}/>
                        <SubmitButton type='submit' disabled={isNaN(inputValue)}>Submit</SubmitButton>
                    </ColumnWrapper>

                </form>

            </ContentModal>
        </WrapperModal>);
};

export default Modal;