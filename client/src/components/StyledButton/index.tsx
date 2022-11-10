import {FC, ReactNode} from 'react';
import {StyledButtonWrapper} from './styles';

interface IStyledButtonProps{
    disabled?: boolean;
    onClick?: ()=>void;
    children: ReactNode;
    backgroundColor?:string;
    data_testid?: string;
    type?: "submit" | "button" | "reset";
}

const StyledButton: FC<IStyledButtonProps> = ({ disabled, backgroundColor, children, onClick, type, data_testid}) => {
    return (
        <StyledButtonWrapper data-testid={data_testid} disabled={disabled} style={{backgroundColor}} onClick={onClick} type={type}>
            {children}
        </StyledButtonWrapper>
    );
};

export default StyledButton;
