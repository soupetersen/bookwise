import { styled } from "@/stitches.config";

export const ExplorerContent = styled("div", {
  display: "flex",
  flexDirection: "column",
  position: "relative",
  // width: "100%",
  // height: "100%",
});

export const FilterContent = styled("div", {
  display: "flex",
  overflowX: "auto",
  overflowY: "hidden",
  width: "100%",
  minHeight: "3.5rem",

  "&::-webkit-scrollbar": {
    zIndex: 999999,
    position: "relative",
    background: "transparent",
    height: "5px",
  },

  "&::-webkit-scrollbar-thumb": {
    background: "$gray400",
    borderRadius: "20px",
  },

  "&::-webkit-scrollbar-corner": {
    display: "none",
  },
});

export const FilteredBooks = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  marginTop: "$8",
  gap: "$4",

  width: "100%",
  height: "100%",
  overflow: "auto",

  "&::-webkit-scrollbar": {
    background: "transparent",
    width: "0px",
  },
});
