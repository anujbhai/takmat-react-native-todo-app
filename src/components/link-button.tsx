import React, {
  useCallback
} from "react";
import * as Linking from "expo-linking";
import { Button, IButtonProps } from "native-base";

interface Props extends IButtonProps {
  href: string
}

const LinkButton = (props: Props) => {
  const {href} = props;

  const handlePress = useCallback(() => {
    Linking.openURL(href)
  }, [href]);

  return (
    <Button
      {...props}
      onPress={handlePress}
    ></Button>
  );
};

export default LinkButton;
