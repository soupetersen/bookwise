import { styled } from "@/stitches.config";

export const Button = styled("button", {
  display: "flex",
  alignItems: "center",
  width: "23.25rem",
  height: "4.5rem",
  padding: "$5",
  backgroundColor: "$gray600",
  outline: "none",
  border: "none",
  marginBottom: "$4",
  borderRadius: "8px",
  cursor: "pointer",

  "&:hover": {
    backgroundColor: "$gray500",
  },

  h2: {
    paddingLeft: "$5",
    fontSize: "$lg",
    color: "$gray200",
  },
});
