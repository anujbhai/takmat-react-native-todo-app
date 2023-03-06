import React, { useEffect } from "react";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from "react-native-reanimated";
import {
  Box, themeTools, useTheme
} from "native-base";

import usePrevious from "../utis/use-previous";

const AnimatedBox = Animated.createAnimatedComponent(Box);

const AnimatedColorBox = ({bg, ...props}: any) => {
  const theme = useTheme();
  const hexBg = themeTools.getColor(theme, bg);
  const prevHexBg = usePrevious(hexBg);
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = 0;
  }, [hexBg]);

  const animatedStyles = useAnimatedStyle(() => {
    progress.value = withTiming(1, {duration: 200});

    return {
      backgroundColor: interpolateColor(
        progress.value,
        [0, 1],
        [prevHexBg || hexBg, hexBg]
      )
    };
  }, [hexBg]);

  return <AnimatedBox
    {...props}
    style={animatedStyles}
  />;
};

export default AnimatedColorBox;
