import React, {
  ReactNode
} from "react";
import {ImageSourcePropType} from "react-native";
import { VStack, Image, Box, Heading } from "native-base";

interface Props {
  title: string,
  image: ImageSourcePropType,
  children: ReactNode
}

const Masthead = (props: Props) => {
  const {title, image, children} = props;

  return (
    <VStack h="300px" pb={5}>
      <Image
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        w="full"
        h="300px"
        resizeMode="cover"
        source={image}
        alt="masthead image"
      />
      {children}
      <Box flex={1} />
      <Heading
        color="white"
        p={6}
        size="xl"
      >
        {title}
      </Heading>
    </VStack>
  );
};

export default Masthead;
