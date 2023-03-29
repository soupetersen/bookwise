import { styled } from "@/stitches.config";
import Link from "next/link";

export const NavLink = styled(Link, {
  display: "flex",
  alignItems: "center",
  gap: "$3",
  width: "$10",
  height: "3rem",
  padding: "$2",
  textDecoration: "none",
  color: "$gray400",
  lineHeight: 0,
  border: "4px solid transparent",

  "&:visited": {
    color: "$gray400",
  },

  "&.active": {
    color: "$gray100",

    border: "4px solid transparent",
    borderImage: "$gradientVertical",
    borderImageSlice: 1,
    borderRight: "none",
    borderTop: "none",
    borderBottom: "none",
  },

  fontSize: "$md",
});
