import {Dispatch, FC, FormEvent, SetStateAction, useEffect, useMemo, useState} from 'react';
import {createPortal} from "react-dom";
import { ColumnWrapper } from '../../UI';
import {ContentModal, Input, SubmitButton, WrapperModal, Title } from './styles';

interface IModalProps{
    isOpen: boolean;
    onClose: (count: number)=> void;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}


const Modal: FC<IModalProps> = ({isOpen, setIsOpen, onClose}) => {
    const element = useMemo(()=> document.createElement('div'), [])
    const [inputValue, setInputValue]= useState<number>(0)

    useEffect(() => {
        const modalRootElement = document.querySelector('#modal');
        if (isOpen) {
            modalRootElement?.appendChild(element);
            return () => {
                modalRootElement?.removeChild(element);
            };
        } 
        return;
    }, [isOpen]);

    const exitFromModal = ()=>{
        setInputValue(0)
        setIsOpen(false);
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        onClose(inputValue);
        exitFromModal();
    }

    return createPortal (
        <WrapperModal active={isOpen} onClick={exitFromModal}>
            <ContentModal onClick={(e) => e.stopPropagation()}>
                <Title>Enter count of currency</Title>
                <form onSubmit={handleSubmit}>
                    <ColumnWrapper>
                        <Input type='number' value={inputValue} min="0" step="0.5" onChange={(e)=> {setInputValue(parseFloat(e.target.value))}}/>
                        <SubmitButton type='submit' disabled={isNaN(inputValue)}>Submit</SubmitButton>
                    </ColumnWrapper>

                </form>

            </ContentModal>
        </WrapperModal>, element);
};

export default Modal;