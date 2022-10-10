import {FC} from 'react';
import { ColumnWrapper } from '../../UI';
import { FooterWrapper, Title } from './styles';
import {useTranslation} from "react-i18next";

const Footer :FC = () => {
    const {t} = useTranslation();
    return (
        <FooterWrapper>
            <ColumnWrapper>
                <Title>
                    {t('Footer.Description')}
                </Title>
            </ColumnWrapper>

        </FooterWrapper>
    );
};

export default Footer;