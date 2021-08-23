import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Flex, Heading, Link } from "@chakra-ui/react";
import React from "react";

type ComponentProps = {
  title: string;
  withSeeAll?: boolean;
  route?: string;
};

export default function TitleSection({ title, withSeeAll }: ComponentProps) {
  return (
    <Flex
      justifyContent="space-between"
      alignItems={withSeeAll ? "center" : "flex-start"}
      flexDirection={{ base: "column", md: "row" }}
    >
      <Heading as="h5" fontSize="2xl">
        {title}
      </Heading>
      {withSeeAll && (
        <Link
          href="#"
          textColor="#0179E2"
          fontWeight="medium"
          mt={{ base: "4", md: "0" }}
        >
          Lihat Semua <ArrowForwardIcon ml="2" />
        </Link>
      )}
    </Flex>
  );
}
