import { styled } from "@/stitches.config";

export const RatingContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  backgroundColor: "$gray700",
  minHeight: "11rem",
  height: "auto",

  padding: "$6",
});

export const RatingHeader = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  maxHeight: "2.75rem",

  img: {
    borderRadius: "50%",
    border: "2px solid $green100",
  },

  ".rating-author": {
    display: "flex",
    gap: "$4",

    "> div": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",

      h2: {
        fontSize: "$xs",
        lineHeight: "$short",
        fontWeight: "$bold",
        margin: "0",
      },

      p: {
        color: "$gray400",
        fontSize: "$sm",
        lineHeight: "$regular",
        paddingTop: "$1",
      },
    },
  },

  ".rating-stars": {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    gap: "$3",
    width: "100%",
  },
});

export const ReviewText = styled("p", {
  fontSize: "$sm",
  lineHeight: "$regular",
  fontWeight: "$regular",
  color: "$gray300",
});
