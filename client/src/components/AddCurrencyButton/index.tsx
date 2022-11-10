import React, {FC, useState} from 'react';
import {Item} from "../../utils/types";
import {CoinsIcon} from "../../UI";
import StyledButton from "../StyledButton"
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
        <div data-testid="add-currency-btn">
            {style === 'coin' ?
                <CoinsIcon data-testid={'coin-btn'} onClick={openModal}/>
                :
                <StyledButton data_testid={'full-btn'} onClick={openModal}>
                    {t('Coin')}
                </StyledButton>
            }

            <Modal isOpen={isOpenModal} setIsOpen={setIsOpenModal} element={element}></Modal>
        </div>
    );
};

export default AddCurrencyButton;
