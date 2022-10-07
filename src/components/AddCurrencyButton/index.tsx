import React, {FC, MouseEventHandler, useState} from 'react';
import {Item} from "../../utils/types";
import {CoinsIcon} from "../../UI";
import {useAppDispatch} from "../../hooks/useTypedDispatch";
import {changeCount} from "../../store/reducers/portfolioSlice";
import Modal from "../Modal";

interface IAddCurrencyButtonProps {
    element: Item;
}

const AddCurrencyButton:FC<IAddCurrencyButtonProps> = ({element}) => {
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
            <CoinsIcon onClick={openModal}/>
            <Modal isOpen={isOpenModal} setIsOpen={setIsOpenModal} onClose={addCurrency} price={parseFloat(element.priceUsd)}></Modal>
        </div>
    );
};

export default AddCurrencyButton;