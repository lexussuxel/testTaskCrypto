import {FC} from 'react';
import { ColumnWrapper } from '../../UI';
import { FooterWrapper, Title } from './styles';

const Footer :FC = () => {

    return (
        <FooterWrapper>
            <ColumnWrapper>
                <Title>
                    This application was developed for educational purposes by Alexandra Danilevich
                </Title>
            </ColumnWrapper>

        </FooterWrapper>
    );
};

export default Footer;