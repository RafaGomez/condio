import CondioButton from "../lib-components/condio-button";

export default {
  title: "Condio/Button",
  component: CondioButton,
  argTypes: {
    text: { control: { type: "text" } },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CondioButton },
  template: '<condio-button v-bind="$props" />',
});

export const Simple = Template.bind({});
Simple.args = {
  text: "YOUR TEXT IS HERE",
};
