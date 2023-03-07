import React, {
  useCallback
} from "react";
import { useNavigation } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import {Feather} from "@expo/vector-icons";
import { HStack, IconButton } from "native-base";

const Navbar = () => {
  const navigation = useNavigation<DrawerNavigationProp<{}>>();
  const handlePressMenuBar = useCallback(() => {
    navigation.openDrawer();
  }, [navigation]);

  return (
    <HStack
      w="full" h={40}
      alignItems="center"
      alignContent="center"
      p={4}
    >
      <IconButton
        onPress={handlePressMenuBar}
        borderRadius={100}
        _icon={{
          as: Feather,
          name: "menu",
          size: 6,
          color: "white"
        }}
      />
    </HStack>
  );
};

export default Navbar;
