import { Button as MUIButton } from "@mui/material";
import { ButtonProps } from "../types";

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <MUIButton variant="contained" onClick={onClick}>
      {children}
    </MUIButton>
  );
};

export default Button;
