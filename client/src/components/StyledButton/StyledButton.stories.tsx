import StyledButton from "./index";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";

export default {
    title: 'Buttons/StyledButton',
    component: StyledButton,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
    parameters:{
        controls:{

        }
    }
} as ComponentMeta<typeof StyledButton>;

const Template: ComponentStory<typeof StyledButton> = (args) => <StyledButton {...args}/>;

export const Primary = Template.bind({});


Primary.args = {
    children: "I am styled button!",
    disabled: false,
};
Primary.argTypes = {
    type: {control: 'none'}
}


export const Form = Template.bind({});


Form.args = {
    children: "I am styled button!",
    disabled: false,
    type: 'submit'
};