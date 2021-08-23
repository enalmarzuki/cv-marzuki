import { Link, useColorModeValue } from "@chakra-ui/react";
import React, { ReactNode } from "react";

export const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    fontWeight="medium"
    _hover={{
      textDecoration: "none",
      textColor: useColorModeValue("gray.500", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);
