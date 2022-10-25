import Modal from "./index";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";
import {MocStore} from "../../stories/MocStore";
import {MemoryRouter} from "react-router-dom";

export default {
    title: 'Main components/Modal',
    component: Modal,

} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args}/>;

export const Open = Template.bind({});


Open.args = {
    isOpen: true
};
Open.decorators = [
    (story) => <MocStore><MemoryRouter>{story()}</MemoryRouter></MocStore>
];

