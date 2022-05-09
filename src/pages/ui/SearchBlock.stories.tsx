import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import SearchBlock from "./SearchBlock";

export default {
  title: "UI/Home/SearchBlock",
  component: SearchBlock,
} as ComponentMeta<typeof SearchBlock>;

const Template: ComponentStory<typeof SearchBlock> = (args) => (
  <SearchBlock {...args} />
);

export const CitiesSearch = Template.bind({});

CitiesSearch.args = {
  type:'buy'
};
