import { DownloadIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Typewriter from "typewriter-effect";
import { ILHero } from "../../../assets";
import { HeroProps } from "../../../pages/Home";

// type HeroCompProps = {
//   data: HeroProps;
// };

export default function Hero({ data }: { data: HeroProps }) {
  return (
    <Flex
      height={{ base: "max-content", md: "115vh" }}
      bgGradient="linear(to-tr, #00CAD4, #0179E2)"
      py={{ base: "20" }}
      alignItems="center"
      className="container-hero"
    >
      <Container maxW="container.xl">
        <Flex
          alignItems="center"
          justifyContent={{ base: "center", md: "space-between" }}
          px={{ base: "4", xl: "0" }}
        >
          <Box width="md" textColor="white">
            <Heading as="h3" size="lg" display="flex">
              Hi, Saya&nbsp;
              <Typewriter
                options={{
                  strings: ["Marzuki", "Seorang Frontend Dev."],
                  autoStart: true,
                  loop: true,
                }}
              />
            </Heading>
            <Text mt={7} lineHeight="7" mb={8}>
              {data.hero.title}
            </Text>
            <Button
              leftIcon={<DownloadIcon />}
              bgColor="#fff"
              textColor="#000"
              variant="solid"
              fontWeight="medium"
              boxShadow="md"
              py={6}
            >
              Unduh CV
            </Button>
          </Box>
          <Spacer display={{ base: "none", md: "block" }} />
          <Box display={{ base: "none", md: "block" }}>
            <Image src={ILHero} />
          </Box>
        </Flex>
      </Container>
    </Flex>
  );
}
