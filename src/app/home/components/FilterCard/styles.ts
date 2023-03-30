import { styled } from "@/stitches.config";

export const FilterCardContainer = styled("div", {
  display: "flex",
  width: "25.11rem",
  height: "11rem",
  backgroundColor: "$gray700",
  padding: "$4",
  borderRadius: 8,
  gap: "$4",
  cursor: "pointer",

  "&:hover": {
    filter: "brightness(1.4)",
    transform: "scale(1.05)",
  },

  img: {
    borderRadius: 4,
  },

  "> div": {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    // justifyContent: "space-between",

    h3: {
      fontSize: "$md",
      fontWeight: "$bold",
      lineHeight: "$short",
      color: "$gray100",
    },

    p: {
      fontSize: "$xs",
      fontWeight: "$regular",
      lineHeight: "$base",
      color: "$gray400",
    },
  },
});

export const StarsContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
  width: "100%",
  height: "100%",
  alignItems: "flex-end",
});
