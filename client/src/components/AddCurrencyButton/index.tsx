import React, {FC, useState} from 'react';
import {Item} from "../../utils/types";
import {CoinsIcon, StyledButton} from "../../UI";
import Modal from "../Modal";
import {useTranslation} from "react-i18next";

interface IAddCurrencyButtonProps {
    element: Item | undefined;
    style?: string;
}

const AddCurrencyButton: FC<IAddCurrencyButtonProps> = ({element, style}) => {
    if (element === undefined)
        return null;
    const {t} = useTranslation();
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

    const openModal = () => {
        setIsOpenModal(true);
    }

    return (
        <div>
            {style === 'coin' ?
                <CoinsIcon onClick={openModal}/>
                :
                <StyledButton onClick={openModal}>
                    {t('Coin')}
                </StyledButton>
            }

            <Modal isOpen={isOpenModal} setIsOpen={setIsOpenModal} element={element}></Modal>
        </div>
    );
};

export default AddCurrencyButton;
