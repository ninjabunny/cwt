import React from "react";
import InputsRefDemo from "../InputsRefDemo";

export default {
  title: "Example/InputsRefDemo",
  component: InputsRefDemo,
};

const Template = (args) => <InputsRefDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Add default props here if any
};
