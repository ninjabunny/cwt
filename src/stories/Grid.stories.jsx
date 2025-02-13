import React from "react";
import GridExample from "../Grid";

export default {
  title: "Example/GridExample",
  component: GridExample,
};

const Template = (args) => (
  <div style={{ height: "100vh", width: "100%" }}>
    <GridExample {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  // Add default props here if any
};
