import Footer from "../Components/Footer/Footer";

export default {
  title: "Example/Footer",
  component: Footer,
  parameters: {
    layout: "bottom",
  },
  tags: ["autodocs"],
  argTypes: {
    setLetter: { action: "setLetter" },
    activeLetter: { action: "activeLetter", options: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'], control: {type: 'select'}},
  },
};

export const Primary = {
  args: {},
};
