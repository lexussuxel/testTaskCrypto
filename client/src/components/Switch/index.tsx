import {FC} from "react";
import {SingleSwitch, SwitchWrapper} from "./styles";

interface ISwitchProps {
    switches: Array<{callback: ()=>void, name: string, set: boolean}>
}

const Switch : FC<ISwitchProps> = ({switches}) => {
    return (
        <SwitchWrapper>
            {switches.map((singleSwitch)=>
                <SingleSwitch onClick={singleSwitch.callback}
                              set={singleSwitch.set}>{singleSwitch.name}</SingleSwitch>
            )}
        </SwitchWrapper>
    );
};

export default Switch;