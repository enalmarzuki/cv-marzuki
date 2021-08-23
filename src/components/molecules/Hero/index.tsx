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

export default function Hero() {
  return (
    <Flex
      height={{ base: "max-content", md: "100vh" }}
      bgGradient="linear(to-tr, #00CAD4, #0179E2)"
      py={{ base: "20" }}
      alignItems="center"
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
              Saya seorang Frontend Developer dan memiliki pengalaman 1 tahun di
              bidang ini. Dalam 1 tahun ini saya terbiasa menggunakan Javascript
              / ReactJS / React Native dalam membangun sebuah aplikasi.
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
