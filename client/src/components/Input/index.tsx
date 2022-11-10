import React, { ChangeEvent, FC } from 'react';
import { StyledInput } from './styles';

interface IInput{
    value: string | number;
    onChange: ( e: ChangeEvent<HTMLInputElement>)=>void;
}

const Input: FC<IInput> = ({ value, onChange}) => {
    return (
        <StyledInput data-testid="modal-input" type='number' value={value} min="0" step='10e-4' onChange={onChange}/>
    );
};

export default Input;
