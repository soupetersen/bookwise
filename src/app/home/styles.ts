import { styled } from "@/stitches.config";

export const HomeLayoutContainer = styled("div", {
  display: "flex",
  width: "100%",
  height: "100vh",
  padding: "$4",
});

export const PageContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "91rem",
  height: "100%",

  padding: "0 6rem",
  overflow: "hidden",
  margin: "0 auto",
});

export const PageHeader = styled("div", {
  display: "flex",
  width: "100%",
  minHeight: "9rem",
  padding: "4rem 0",
  justifyContent: "space-between",

  "& > div": {
    display: "flex",
    gap: "$3",
    minHeight: "3rem",
    alignItems: "center",
  },

  svg: {
    fill: "$green100",
  },

  h1: {
    fontSize: "$2xl",
    fontWeight: "$bold",
    lineHeight: "$short",
  },
});

export const TitleBox = styled("div", {
  display: "flex",
  gap: "$2",

  svg: {
    fill: "$green100",
  },

  p: {
    fontSize: "$lg",
    color: "$gray100",
    marginTop: "$1",
    fontWeight: "$bold",
    lineHeight: "$short",
  },
});

export const HomeContent = styled("div", {
  display: "flex",
  // width: "100%",
  // height: "100%",

  gap: "4rem",
});

export const BooksContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "38rem",
  height: "74%",

  gap: "$2",
});

export const Books = styled("div", {
  display: "flex",
  flexDirection: "column",
  height: "100%",

  gap: "$10",
  overflow: "auto",

  "&::-webkit-scrollbar": {
    width: "0",
  },

  variants: {
    isMostPopular: {
      true: {
        gap: "$6",
      },
    },
  },
});

export const FilterText = styled("h1", {
  fontSize: "$sm",
  fontWeight: "$regular",
  lineHeight: "$base",
  color: "$gray300",
});

export const MostPopularContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",

  width: "20.25rem",
  height: "40rem",
});
