import {FC} from 'react';
import {ColumnWrapper, InlineWrapper, WrapperComponents} from '../../UI';
import {Description, StyledLink, Text, Title} from './styles'
import {useTranslation} from "react-i18next";

const About: FC = () => {
    const {t} = useTranslation();
    return (
        <WrapperComponents>
            <ColumnWrapper>
                <Title>{t('About.Title')}</Title>
                <Description>{t('About.Description')}
                    <Text>Api:</Text>
                    <StyledLink href={'https://docs.coincap.io/'}>CoinCap</StyledLink>
                </Description>

                <InlineWrapper>
                    <Text>GitHub:</Text>
                    <StyledLink href={'https://github.com/lexussuxel'}>lexussuxel</StyledLink>
                </InlineWrapper>
                <InlineWrapper>
                    <Text>LinkedIn:</Text>
                    <StyledLink href={'https://www.linkedin.com/in/alexandra-danilevich-a70579231/'}>Alexandra
                        Danilevich</StyledLink>
                </InlineWrapper>


            </ColumnWrapper>

        </WrapperComponents>
    );
};

export default About;
