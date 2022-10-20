import {FC, useState} from "react";
import {Logo, StyledButton} from "../../UI";
import {useNavigate} from "react-router-dom";
import {
    ColumnWrapperHeader,
    CrossIcon,
    HeaderButtonWrapper,
    MenuIcon,
    SingleSwitch,
    StyledInlineWrapper,
    SwitchWrapper,
    WrapperHeader,
    WrapperHeaderContent
} from "./styles";
import {useAppSelector} from "../../hooks/useTypedSelector";
import {convertBigNumbers} from "../../utils/convertBigNumbers";
import {useTranslation} from "react-i18next";


const Header: FC = () => {
    const navigate = useNavigate();
    const {
        t, i18n: {changeLanguage, language}
    } = useTranslation();
    const {count, percent} = useAppSelector((state) => state.portfolio);
    const [isActive, setIsActive] = useState<boolean>(false);

    const navigateTo = (to: string) => {
        navigate(to);
        setIsActive(false);
    }

    const switchLng = (locale: string) => {
        localStorage.setItem('locale', locale)
        changeLanguage(locale)

    }

    return (
        <WrapperHeader>

            <Logo onClick={() => navigate('/')}>CryptoMan</Logo>
            <MenuIcon onClick={() => setIsActive(true)}/>
            <WrapperHeaderContent isActive={isActive}>
                <CrossIcon onClick={() => setIsActive(false)}/>
                <StyledInlineWrapper>
                    <HeaderButtonWrapper onClick={() => navigateTo('/')}><p>{t('Header.Coins')}</p>
                    </HeaderButtonWrapper>
                    <HeaderButtonWrapper onClick={() => navigateTo('/about')}><p>{t('Header.About')}</p>
                    </HeaderButtonWrapper>
                </StyledInlineWrapper>

                <StyledInlineWrapper>
                    <SwitchWrapper>
                        <SingleSwitch onClick={() => switchLng('en')}
                                      set={language === 'en'}>{t('Header.en')}</SingleSwitch>
                        <SingleSwitch onClick={() => switchLng('ru')}
                                      set={language === 'ru'}>{t('Header.ru')}</SingleSwitch>
                    </SwitchWrapper>
                    <StyledButton onClick={() => navigateTo('/portfolio')}>
                        <ColumnWrapperHeader>
                            <div>{t('Portfolio.Portfolio')}</div>
                            <div>${convertBigNumbers(count.toString())} + ${convertBigNumbers(percent.toString())}%
                            </div>
                        </ColumnWrapperHeader>
                    </StyledButton>
                </StyledInlineWrapper>
            </WrapperHeaderContent>
        </WrapperHeader>)
}

export default Header;
