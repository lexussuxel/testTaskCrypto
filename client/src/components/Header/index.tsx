import {FC, useEffect, useState} from "react";
import {Logo} from "../../UI";
import {useNavigate} from "react-router-dom";
import {
    ColumnWrapperHeader,
    CrossIcon,
    HeaderButtonWrapper,
    MenuIcon,
    StyledInlineWrapper,
    WrapperHeader,
    WrapperHeaderContent
} from "./styles";
import StyledButton from "../StyledButton"
import {useAppSelector} from "../../hooks/useTypedSelector";
import {convertBigNumbers} from "../../utils/convertBigNumbers";
import {useTranslation} from "react-i18next";
import Switch from "../Switch";

interface ISwitch {
    callback: ()=>void;
    name:string;
    set: boolean;
}

const Header: FC = () => {
    const navigate = useNavigate();
    const {
        t, i18n: {changeLanguage, language}
    } = useTranslation();
    const {count, percent} = useAppSelector((state) => state.portfolio);
    const [isActive, setIsActive] = useState<boolean>(false);
    const [switches, setSwitches] = useState<Array<ISwitch>>([]);
    useEffect(() => {
        setSwitches([{
                callback: () => switchLng('en'),
                name: "en",
                set: language === 'en'
            },
                {
                    callback: () => switchLng('ru'),
                    name: "ru",
                    set: language === "ru"
                }]
        )
    }, [language])
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
                    <HeaderButtonWrapper data-testid="coins" onClick={() => navigateTo('/')}><p>{t('Header.Coins')}</p>
                    </HeaderButtonWrapper>
                    <HeaderButtonWrapper data-testid="about" onClick={() => navigateTo('/about')}>
                        <p>{t('Header.About')}</p>
                    </HeaderButtonWrapper>
                </StyledInlineWrapper>

                <StyledInlineWrapper>
                    <Switch switches={switches}/>
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
