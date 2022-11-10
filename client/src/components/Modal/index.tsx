import {Dispatch, FC, FormEvent, SetStateAction, useState} from 'react';
import {ColumnWrapper} from '../../UI';
import {ContentModal, Title, WrapperModal} from './styles';
import StyledButton from "../StyledButton"
import {Item} from "../../utils/types";
import Input from "../Input"
import {changeCount} from "../../store/reducers/portfolioSlice";
import {useAppDispatch} from "../../hooks/useTypedDispatch";
import {useTranslation} from "react-i18next";

interface IModalProps {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    element: Item | undefined;
}


const Modal: FC<IModalProps> = ({isOpen, setIsOpen, element}) => {
    const [inputValue, setInputValue] = useState<number>(0)
    const {t} = useTranslation();
    const exitFromModal = () => {
        setInputValue(0)
        setIsOpen(false);
    }
    const dispatch = useAppDispatch();
    const addCurrency = (count: number) => {
        dispatch(changeCount(element ? {...element, count} : null));
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addCurrency(inputValue);
        exitFromModal();
    }

    return (
        <WrapperModal data-testid="modal" active={isOpen} onClick={exitFromModal}>
            <ContentModal onClick={(e) => e.stopPropagation()}>
                <Title>{t('Modal.Title')}</Title>
                <div>{t('Modal.Desc')}
                    ${isNaN(inputValue) ? 0 : (parseFloat(element?.priceUsd || "") * inputValue).toFixed(3)} +
                    ${isNaN(inputValue) ? 0 : (parseFloat(element?.priceUsd || "") * inputValue * 0.018).toFixed(3)}%
                </div>
                <form onSubmit={handleSubmit}>
                    <ColumnWrapper>
                        <Input value={inputValue} onChange={(e) => {
                            setInputValue(parseFloat(e.target.value))
                        }}/>
                        <StyledButton type='submit' disabled={isNaN(inputValue)}>{t('Modal.Submit')}</StyledButton>
                    </ColumnWrapper>

                </form>

            </ContentModal>
        </WrapperModal>);
};

export default Modal;
