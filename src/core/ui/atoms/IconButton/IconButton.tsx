import { forwardRef } from "react";
import Button from "../Button/Button";
import { ButtonType } from "@/core/types/buttonType";

interface IconButtonProps {
  icon: React.ReactNode;
  onClick?: () => void;
  typeButton?: ButtonType;
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon: NewIcon, typeButton, ...props }: IconButtonProps, ref) => {
    return (
      <Button
        ref={ref}
        {...props}
        onClick={props.onClick}
        typeButton={typeButton}
        role="button"
      >
        {NewIcon}
      </Button>
    );
  }
);

IconButton.displayName = "IconButton";
