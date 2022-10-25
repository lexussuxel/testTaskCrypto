import UnderHeader from "./index";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";
import {MocStore} from "../../stories/MocStore";
import {MemoryRouter} from "react-router-dom";

// export default {
//     title: 'Main components/UnderHeader',
//     component: UnderHeader,
//
// } as ComponentMeta<typeof UnderHeader>;

const Template: ComponentStory<typeof UnderHeader> = (args) => <UnderHeader {...args}/>;

export const Common = Template.bind({});


Common.args = {
};
Common.decorators = [
    (story) => <MocStore><MemoryRouter>{story()}</MemoryRouter></MocStore>
];

