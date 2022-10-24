import {FC, ReactNode} from 'react';
import {IButtonWrapper, StyledButtonWrapper} from './styles';




interface IStyledButtonProps extends IButtonWrapper{
    onClick?: ()=>void;
    children: ReactNode;
    backgroundColor?:string;
    type?: "submit" | "button" | "reset";
}

const StyledButton: FC<IStyledButtonProps> = ({ disabled, backgroundColor, children, onClick, type}) => {
    return (
        <StyledButtonWrapper disabled={disabled} style={{backgroundColor}} onClick={onClick} type={type}>
            {children}
        </StyledButtonWrapper>
    );
};

export default StyledButton;
