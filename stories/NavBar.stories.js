import NavBar from "../components/navBar/NavBar";
import { withDesign } from "storybook-addon-designs";

export default {
  title: "NavBar",
  component: NavBar,
  decorators: [withDesign],
};

export const Navbar = () => <NavBar />;

Navbar.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/5AiuW5qbxE1xDpBqGLkLUc/Justin-Lee's-team-library?node-id=411%3A2",
  },
};
