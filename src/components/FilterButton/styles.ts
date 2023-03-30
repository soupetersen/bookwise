import { styled } from "@/stitches.config";

export const ButtonFilter = styled("button", {
  display: "inline-block",
  margin: "0 9px",
  userSelect: "none",
  cursor: "pointer",

  minWidth: "7.625rem",
  height: "2.125rem",

  backgroundColor: "$transparent",
  border: "1px solid $purple100",
  borderRadius: 999,

  padding: "$1",
  color: "$purple100",

  variants: {
    active: {
      true: {
        backgroundColor: "$purple100",
        border: "1px solid transparent",
        color: "$white",
        ":hover": {
          border: "1px solid $purple100",
        },
      },
    },
  },
});
