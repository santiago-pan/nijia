import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import HomeSearch from "./HomeSearch";

export default {
  title: "UI/Home/HomeSearch",
  component: HomeSearch,
} as ComponentMeta<typeof HomeSearch>;

const Template: ComponentStory<typeof HomeSearch> = (args) => (
  <HomeSearch {...args} />
);

export const DefaultHomeSearch = Template.bind({});

DefaultHomeSearch.args = {};
