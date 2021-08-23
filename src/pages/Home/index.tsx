import { DownloadIcon, EmailIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import {
  ICBootstrap,
  ICCss,
  ICFacebook,
  ICGitHub,
  ICHtml,
  ICJavascript,
  ICLinkedIn,
  ICReact,
  ICRedux,
  ICTailwind,
  IMGProjek1,
  IMGProjek2,
} from "../../assets";
import { Hero, Navbar, TitleSection } from "../../components";

export default function Home() {
  return (
    <>
      <Box position="absolute" width="100%">
        <Navbar />
      </Box>
      <Hero />

      <Container maxW="container.xl">
        {/* Projek */}
        <Box my={28}>
          <TitleSection withSeeAll title="Yang Telah Di Kerjakan" />
          <Stack mt={9} spacing={9}>
            <Box>
              <Image src={IMGProjek1} />
            </Box>
            <Box>
              <Image src={IMGProjek2} />
            </Box>
          </Stack>
        </Box>
        {/* Projek */}

        {/* Kerja sama */}
        <Box
          my={28}
          bgGradient="linear(to-tr, #00CAD4, #0179E2)"
          py={14}
          px={10}
          borderRadius="2xl"
          textColor="#fff"
        >
          <Flex
            flexDirection={{ base: "column", lg: "row" }}
            justifyContent="space-between"
            alignItems="center"
          >
            <Heading fontWeight="medium" fontSize={["2xl", "3xl"]}>
              Tertarik bekerja sama dengan saya ?
            </Heading>
            <HStack spacing={4} mt={[5]}>
              <Button
                leftIcon={<DownloadIcon />}
                colorScheme="whiteAlpha"
                variant="outline"
                fontWeight="medium"
                boxShadow="md"
                textColor="#FFF"
                py={6}
              >
                Unduh CV
              </Button>
              <Button
                leftIcon={<EmailIcon />}
                bgColor="#fff"
                textColor="#000"
                variant="solid"
                fontWeight="medium"
                boxShadow="md"
                py={6}
              >
                Kirim Email
              </Button>
            </HStack>
          </Flex>
        </Box>
        {/* Kerja sama */}

        {/* Kemampuan */}
        <Box mb={28}>
          <TitleSection title="Kemampuan" />
          <Flex justifyContent="space-between" mt={8}>
            <Flex
              direction="column"
              alignItems="center"
              justifyContent="center"
              flexWrap="wrap"
            >
              <Image
                src={ICReact}
                width="78px"
                height="75px"
                padding="4px"
                mb={2.5}
              />
              <Text textAlign="center">ReactJS</Text>
            </Flex>

            <Flex
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <Image
                src={ICReact}
                width="78px"
                height="75px"
                padding="4px"
                mb={2.5}
              />
              <Text textAlign="center">React Native</Text>
            </Flex>

            <Flex
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <Image
                src={ICRedux}
                width="78px"
                height="75px"
                padding="12px"
                mb={2.5}
              />
              <Text textAlign="center">Redux</Text>
            </Flex>

            <Flex
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <Image
                src={ICTailwind}
                width="78px"
                height="75px"
                py="16px"
                px="4px"
                mb={2.5}
              />
              <Text textAlign="center">React Native</Text>
            </Flex>
          </Flex>

          <Flex justifyContent="space-between" mt={14}>
            <Flex
              direction="column"
              alignItems="center"
              justifyContent="center"
              flexWrap="wrap"
            >
              <Image
                src={ICBootstrap}
                width="78px"
                height="75px"
                padding="12px"
                mb={2.5}
              />
              <Text textAlign="center">Bootstrap</Text>
            </Flex>

            <Flex
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <Image
                src={ICJavascript}
                width="78px"
                height="75px"
                padding="12px"
                mb={2.5}
              />
              <Text textAlign="center">Javascript</Text>
            </Flex>

            <Flex
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <Image
                src={ICCss}
                width="78px"
                height="75px"
                padding="12px"
                mb={2.5}
              />
              <Text textAlign="center">CSS</Text>
            </Flex>

            <Flex
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <Image
                src={ICHtml}
                width="78px"
                height="75px"
                padding="12px"
                mb={2.5}
              />
              <Text textAlign="center">HTML</Text>
            </Flex>
          </Flex>
        </Box>
        {/* Kemampuan */}
      </Container>
      <Box bgGradient="linear(to-tr, #00CAD4, #0179E2)" pt={24} pb="8">
        <Container maxW="container.xl">
          <Flex justifyContent="center" direction="column" alignItems="center">
            <HStack mb={12}>
              <Link href="https://www.facebook.com/marzuki.r/" isExternal>
                <Image src={ICFacebook} w="68px" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/enal-marzuki-6a12a91a3/"
                isExternal
              >
                <Image src={ICLinkedIn} w="68px" />
              </Link>
              <Link href="https://github.com/enalmarzuki" isExternal>
                <Image src={ICGitHub} w="68px" />
              </Link>
            </HStack>
            <Text textColor="white" mb={4}>
              Made With ❤ by Marzuki
            </Text>
            <Text textColor="white">
              © Copyright 2021 | Design By Marzuki . R{" "}
            </Text>
          </Flex>
        </Container>
      </Box>
    </>
  );
}
