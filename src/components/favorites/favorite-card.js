import React from "react";
import styled from "styled-components/native";
import { Pressable, useWindowDimensions } from "react-native";
import { FavoriteIcon } from "../../utils/icons";
import { colors } from "../../constants";
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

const FavoritesCard = styled(Animated.View)`
  flex-direction: row;
  background-color: ${colors.darkblue};
  justify-content: space-between;
  align-items: center;
  align-self: center;
  border-radius: 14px;
  margin-bottom: 8px;
  height: 62px;
  width: 95%;
`;
// margin: 6px;

const FavText = styled.Text`
  color: ${colors.text};
  font-family: Nunito_400Regular;
  font-size: 18px;
  margin-left: 10px;
`;

const FavTextView = styled.View`
  flex: 1;
`;

export const FavoriteCard = ({ text = "Hello", onPress, t }) => {
  const window = useWindowDimensions();

  const translationX = useSharedValue(0);
  const ItemHEIGHT = useSharedValue(62);
  const marginB = useSharedValue(6);

  const aStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translationX.value,
      },
    ],
    height: ItemHEIGHT.value,
    marginBottom: marginB.value,
  }));

  const moveL = () => {
    translationX.value = withSpring(-window.width, null, (done) => {
      if (done) {
        runOnJS(onPress)();
      }
    });
    ItemHEIGHT.value = withTiming(0);
    marginB.value = 0;
  };

  return (
    <FavoritesCard style={aStyle}>
      <FavTextView>
        <Pressable onPress={t}>
          <FavText numberOfLines={1}>{text}</FavText>
        </Pressable>
      </FavTextView>
      <FavoriteIcon onPress={moveL} />
    </FavoritesCard>
  );
};
