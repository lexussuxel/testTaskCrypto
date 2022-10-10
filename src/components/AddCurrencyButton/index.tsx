import React, {FC, MouseEventHandler, useState} from 'react';
import {Item} from "../../utils/types";
import {CoinsIcon, StyledButton} from "../../UI";
import {useAppDispatch} from "../../hooks/useTypedDispatch";
import {changeCount} from "../../store/reducers/portfolioSlice";
import Modal from "../Modal";

interface IAddCurrencyButtonProps {
    element: Item | undefined;
    style?: string;
}

const AddCurrencyButton:FC<IAddCurrencyButtonProps> = ({element, style}) => {
    if (element === undefined)
        return null;
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
    const dispatch = useAppDispatch()

    const openModal = ()=>{
        setIsOpenModal(true);
    }

    const addCurrency = (count: number)=>{
        dispatch(changeCount(element ? {...element, count}: null));
    }
    return (
        <div>
            {style === 'coin'?
                <CoinsIcon onClick={openModal}/>
                :
                <StyledButton onClick={openModal}>
                    Add to wallet
                </StyledButton>
            }

            <Modal isOpen={isOpenModal} setIsOpen={setIsOpenModal} onClose={addCurrency} price={parseFloat(element.priceUsd)}></Modal>
        </div>
    );
};

export default AddCurrencyButton;