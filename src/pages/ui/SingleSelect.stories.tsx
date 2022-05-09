import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { distances } from "../../data/distances";
import SingleSelect from "./SingleSelect";

export default {
  title: "UI/Home/SingleSelect",
  component: SingleSelect,
} as ComponentMeta<typeof SingleSelect>;

const Template: ComponentStory<typeof SingleSelect> = (args) => (
  <SingleSelect {...args} />
);

export const SingleSelectDefault = Template.bind({});

SingleSelectDefault.args = {
  items: distances,
};
