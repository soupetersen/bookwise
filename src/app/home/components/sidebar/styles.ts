import { styled } from "@/stitches.config";

export const SideBarContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  width: "14.5rem",
  height: "100%",
  borderRadius: "12px",

  padding: "$10 3.125rem",

  background: "$gray700",

  section: {
    display: "flex",
    Position: "relative",
    flexDirection: "column",
    height: "100%",
    width: "100%",
    marginTop: "4rem",
    gap: "$3",
  },

  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "transparent",
    color: "$gray200",
    cursor: "pointer",

    outline: "none",
    border: "none",

    a: {
      all: "unset",
    },
  },
});
