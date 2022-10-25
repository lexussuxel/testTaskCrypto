import Header from "./index";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";
import {MocStore} from "../../stories/MocStore";
import {MemoryRouter} from "react-router-dom";

export default {
    title: 'Main components/Header',
    component: Header,

} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args}/>;

export const LoggedIn = Template.bind({});


LoggedIn.args = {
};
LoggedIn.decorators = [
    (story) => <MocStore><MemoryRouter>{story()}</MemoryRouter></MocStore>
];

