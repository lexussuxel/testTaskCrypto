import Footer from "./index";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";

export default {
    title: 'Main components/Footer',
    component: Footer,

} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args}/>;

export const Main = Template.bind({});


Main.args = {
};
