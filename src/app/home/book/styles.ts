import { styled } from "@/stitches.config";
import * as Dialog from "@radix-ui/react-dialog";

export const BookContainer = styled(Dialog.Content, {
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  width: "41.25rem",
  background: "$gray800",
  padding: "3rem",
  paddingTop: "5rem",
  boxShadow: "-4px 0px 30px rgba(0, 0, 0, 0.8)",
  display: "flex",
  flexDirection: "column",

  h2: {
    fontWeight: 700,
    fontSize: "$lg",
    color: "$gray100",
    marginBottom: "2rem",
  },

  "> section": {
    display: "flex",
    flexDirection: "column",
    gap: "3rem",
    flex: 1,
    overflowY: "auto",
  },
});

export const DialogOverlay = styled(Dialog.Overlay, {
  position: "fixed",
  // backgroundColor: "red",
  backdropFilter: "blur(1px)",
  inset: 0,
  animation: "overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
});

export const DialogClose = styled(Dialog.Close, {
  background: "none",
  border: "none",
  color: "$gray500",
  position: "absolute",
  top: "1.75rem",
  right: "1.75rem",

  svg: {
    cursor: "pointer",
    fill: "$gray400",
  },
});

export const BookInfos = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "25.875rem",
  backgroundColor: "$gray700",
  padding: "$4",
  borderRadius: 8,
  gap: "$10",
  cursor: "pointer",
});

export const BookHeader = styled("div", {
  display: "flex",
  width: "100%",
  height: "100%",
  gap: "$6",

  ".book-infos": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
    height: "100%",
  },

  ".header-rate": {
    display: "flex",
    flexDirection: "column",
    width: "100%",

    justifyContent: "center",

    p: {
      marginLeft: "$1",
      fontSize: "$sm",
      fontWeight: "$regular",
      color: "$gray400",
    },
  },

  img: {
    borderRadius: 4,
  },

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
});

export const InfoContainer = styled("div", {
  display: "flex",
  width: "100%",
  height: "100%",
  padding: "$5",

  svg: {
    fill: "$green100",
  },

  ".book-descriptions": {
    display: "flex",
    width: "100%",
    height: "100%",
    gap: "$4",
  },

  ".infos": {
    display: "flex",
    flexDirection: "column",

    "> div": {
      display: "flex",
      gap: "$2",
    },
  },

  h3: {
    fontSize: "$sm",
    fontWeight: "$regular",
    lineHeight: "$base",
    color: "$gray400",
  },

  h2: {
    fontSize: "$sm",
    fontWeight: "$bold",
    lineHeight: "$short",
    color: "$gray200",
  },
});

export const RatingSection = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$2",
  width: "100%",
  height: "100%",

  ".rating-section-header": {
    display: "flex",
    justifyContent: "space-between",
    height: "2rem",

    h3: {
      fontSize: "$sm",
      fontWeight: "$regular",
      color: "$gray400",
    },

    h2: {
      fontSize: "$md",
      fontWeight: "$bold",
      color: "$purple100",
    },
  },
});
