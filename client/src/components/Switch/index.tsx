import {FC} from "react";
import {SingleSwitch, SwitchWrapper} from "./styles";
import {useTranslation} from "react-i18next";

interface ISwitchProps {
    switches: Array<{callback: ()=>void, name: string, set: boolean}>
}

const Switch : FC<ISwitchProps> = ({switches}) => {
    const {t} = useTranslation()
    return (
        <SwitchWrapper>
            {switches.map((singleSwitch)=>
                <SingleSwitch onClick={singleSwitch.callback} key={'name'}
                              set={singleSwitch.set}>{t(`Header.${singleSwitch.name}`)}</SingleSwitch>
            )}
        </SwitchWrapper>
    );
};

export default Switch;
