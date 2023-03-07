import React from "react";
import {
  ScrollView,
  Box,
  Text,
  VStack,
  Image,
  useColorModeValue,
  Icon,
} from "native-base";
import {Feather} from "@expo/vector-icons";

import AnimatedColorBox from "../components/animated-colorbox";
import Navbar from "../components/navbar";
import Masthead from "../components/masthead";
import LinkButton from "../components/link-button";

const AboutScreen = () => {
  return (
    <AnimatedColorBox
      flex={1}
      bg={useColorModeValue("warmGray.50", "warmGray.900")}
      w="full"
    >
      <Masthead
        title="About this app"
        image={require("../assets/pexels-anni-roenkae-2318025.jpg")}
      >
        <Navbar />
      </Masthead>

      <ScrollView
        borderTopLeftRadius="20px"
        borderTopRightRadius="20px"
        bg={useColorModeValue("warmGray.50", "primary.900")}
        mt="-20px"
        pt="30px"
        p={4}
      >
        <VStack flex={1} space={4}>
          <Box alignItems="center">
            <Image
              source={require("../assets/img_masthead.png")}
              borderRadius="full"
              resizeMode="cover"
              h={120}
              w={120}
              alt="user image"
            />
          </Box>

          <Text
            fontSize="md"
            w="full"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi porro accusantium quod facilis pariatur corporis animi repellat, facere nulla voluptatibus sed eaque molestiae libero fugiat a, ad neque at magnam!
          </Text>

          <LinkButton
            colorScheme="gray"
            size="lg"
            borderRadius="full"
            href="https://github.com/anujbhai"
            leftIcon={
              <Icon as={Feather} name="github" size="sm" opacity={0.5} />
            }
          >
            View GitHub Repo
          </LinkButton>
          <LinkButton
            colorScheme={useColorModeValue("blue", "darkBlue")}
            size="lg"
            borderRadius="full"
            href="https://twitter.com/iamanuj_me"
            leftIcon={
              <Icon as={Feather} name="twitter" size="sm" opacity={0.5} />
            }
          >
            Follow
          </LinkButton>
        </VStack>
      </ScrollView>
    </AnimatedColorBox>
  );
};

export default AboutScreen;
