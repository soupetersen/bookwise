import { styled } from "@/stitches.config";

export const Container = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "1440px",
  height: "100vh",
  margin: "0 auto",
});

export const ImageContainer = styled("div", {
  position: "relative",
  display: "flex",
  width: "100%",
  height: "100%",
  justifyContent: "center",
  alignItems: "center",

  ".logo": {
    position: "absolute",
  },
});

export const LoginContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  justifyContent: "center",
  alignItems: "center",
});

export const LoginCard = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "372px",

  h1: {
    fontSize: "$2xl",
    paddingBottom: "$4",
  },

  p: {
    fontSize: "$md",
    paddingBottom: "$4",
    color: "$gray200",
  },
});
