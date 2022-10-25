import Input from "./index";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {useState} from "react";

export default {
    title: 'Inputs/Input',
    component: Input,
    argTypes:{
        onChange: {
            action: 'clicked'
        }
    }

} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => {
    const [value, setValue] = useState(args.value)
    return <Input value={value} onChange={(e)=>{setValue(e.target.value)}}/>;
}

export const Primary = Template.bind({});


Primary.args = {
    value: "12"
};
