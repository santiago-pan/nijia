import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { taiwanCities } from "../../data/cities";
import Search from "./Search";

export default {
  title: "UI/Home/Search",
  component: Search,
} as ComponentMeta<typeof Search>;

const Template: ComponentStory<typeof Search> = (args) => <Search {...args} />;

export const CitiesSearch = Template.bind({});

CitiesSearch.args = {
  options: taiwanCities,
};
