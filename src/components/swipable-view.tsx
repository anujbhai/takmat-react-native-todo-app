import React, { ReactNode } from "react";
import { Dimensions } from "react-native";
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from "react-native-reanimated";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  PanGestureHandlerProps
} from "react-native-gesture-handler";
import { Box } from "native-base";

import { makeStyledComponent } from "../utis/styled";

const StyledView = makeStyledComponent(Animated.View)

interface Props extends Pick<PanGestureHandlerProps, "simultaneousHandlers"> {
  children: ReactNode,
  backView: ReactNode,
  onSwipeLeft?: () => void,
}

const {width: SCREEN_WIDTH} = Dimensions.get("window");
const SWIPE_THRESHOLD = SCREEN_WIDTH * 0.2;

const SwipableView = (props: Props) => {
  const {children, backView, onSwipeLeft, simultaneousHandlers} = props;

  const translateX = useSharedValue(0);

  const panGesture = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
    onActive: e => {
      translateX.value = Math.max(-128, Math.min(0, e.translationX))
    },
    onEnd: () => {
      const shouldBeDismissed = translateX.value < SWIPE_THRESHOLD;

      if (shouldBeDismissed) {
        translateX.value = withTiming(-SCREEN_WIDTH);

        onSwipeLeft && runOnJS(onSwipeLeft)();
      } else {
        translateX.value = withTiming(0);
      }
    }
  });

  const facadeStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translateX.value
      }
    ]
  }));

  return (
    <StyledView w="full">
      {backView && (
        <Box position="absolute" left={0} right={0} top={0} bottom={0}>
          {backView}
        </Box>
      )}
      <PanGestureHandler
        simultaneousHandlers={simultaneousHandlers}
        onGestureEvent={panGesture}
      >
        <StyledView style={facadeStyle}>
          {children}
        </StyledView>
      </PanGestureHandler>
    </StyledView>
  );
};

export default SwipableView;
 