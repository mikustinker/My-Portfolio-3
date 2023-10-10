import * as React from "react";
import { useTheme } from "@material-ui/styles";

const Logo = (props) => {
  const theme = useTheme();
  return <h1 {...props}>MIKUS</h1>;
};

export default Logo;
