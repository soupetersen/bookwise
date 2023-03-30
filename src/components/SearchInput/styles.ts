import { styled } from "@/stitches.config";

export const TextInputContainer = styled("div", {
  backgroundColor: "$gray900",
  padding: "$3 $4",
  borderRadius: "$sm",
  boxSizing: "border-box",
  border: "2px solid $gray500",
  display: "flex",
  minWidth: "25rem",

  svg: {
    fill: "$gray500",
    cursor: "pointer",
  },

  "&:has(input:focus)": {
    borderColor: "$green200",
    svg: {
      fill: "$green200",
    },
  },
});

export const Input = styled("input", {
  fontFamily: "$default",
  fontSize: "$sm",
  color: "$white",
  fontWeight: "$regular",
  background: "transparent",
  border: 0,
  width: "100%",

  "&:focus": {
    outline: 0,
  },

  "&:disabled": {
    cursor: "not-allowed",
  },

  "&:placeholder": {
    color: "$gray400",
  },
});
