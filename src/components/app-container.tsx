import React, {
  ReactNode
} from "react";
import {NavigationContainer} from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import theme from "../theme";

type Props = {
  children: ReactNode
};

function AppContainer(props: Props) {
  return (
    <NavigationContainer>
      <NativeBaseProvider theme={theme}>
        {props.children}
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

export default AppContainer;

