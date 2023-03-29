import { styled } from "@/stitches.config";

export const PopularCardContainer = styled("div", {
  display: "flex",
  width: "20.25rem",
  height: "8.125rem",
  backgroundColor: "$gray700",
  padding: "$4",
  borderRadius: 8,
  gap: "$4",

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
