import AddCurrencyButton from "./index";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";
import {MocStore} from "../../stories/MocStore";

export default {
    title: 'AddCurrencyButton',
    component: AddCurrencyButton,
} as ComponentMeta<typeof AddCurrencyButton>;

const Template: ComponentStory<typeof AddCurrencyButton> = (args) => <AddCurrencyButton {...args}></AddCurrencyButton>;

export const Small = Template.bind({});


Small.args = {
    element: undefined,
    style: 'coin'
};
Small.decorators = [
    (story) => <MocStore>{story()}</MocStore>
];

export const Large = Template.bind({});
Large.args = { element: undefined};
Large.decorators = [
    (story) => <MocStore>{story()}</MocStore>
];