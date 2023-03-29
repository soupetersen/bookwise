import { styled } from "@/stitches.config";

export const BookCardRatingContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "38rem",
  height: "16.25rem",
  padding: "$5 $6",
  gap: "$6",
  borderRadius: 8,
  border: "2px solid transparent",

  backgroundColor: "$gray700",

  "&:hover": {
    border: "2px solid $purple100",
  },
});

export const BookRatingHeader = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",

  div: {
    display: "flex",
    alignItems: "center",

    img: {
      borderRadius: "50%",
      border: "2px solid $green100",
    },

    gap: "$3",

    "> div": {
      display: "flex",
      flexDirection: "column",
      alignItems: "baseline",
      gap: "$0",
    },
  },
});

export const RatingBookTitle = styled("h3", {
  fontSize: "$md",
  fontWeight: "$regular",
  lineHeight: "$base",
  color: "$gray100",
});

export const RatingBookSpan = styled("h3", {
  fontSize: "$sm",
  fontWeight: "$regular",
  lineHeight: "$short",
  color: "$gray400",

  variants: {
    color: {
      dark: {
        color: "$gray300",
      },
    },
  },
});

export const BookRatingContent = styled("div", {
  display: "flex",
  gap: "$6",

  div: {
    display: "flex",
    flexDirection: "column",
    gap: "$3",
  },
});

export const Content = styled("div", {});
