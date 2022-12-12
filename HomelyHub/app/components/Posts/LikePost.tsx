import {Icon, Pressable} from 'native-base';
import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
  Extrapolate,
  interpolate,
} from 'react-native-reanimated';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
export type LikePostProps = {
  onPress?: () => void;
  likedPost?: boolean;
};

const LikePost = ({onPress, likedPost}: LikePostProps) => {
  const liked = useSharedValue(likedPost ? 1 : 0);

  useEffect(() => {
    liked.value = withSpring(likedPost ? 1 : 0);
  }, [likedPost, liked]);

  const outlineStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(liked.value, [0, 1], [1, 0], Extrapolate.CLAMP),
        },
      ],
    };
  });

  const fillStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: liked.value,
        },
      ],
      opacity: liked.value,
    };
  });
  return (
    <Pressable
      onPress={() => {
        onPress && onPress();
      }}>
      <Animated.View style={[StyleSheet.absoluteFillObject, outlineStyle]}>
        <Icon
          size={'xl'}
          as={MaterialCommunityIcons}
          name={'thumb-up-outline'}
          color={'black'}
        />
      </Animated.View>

      <Animated.View style={fillStyle}>
        <Icon
          size={'xl'}
          as={MaterialCommunityIcons}
          name={'thumb-up'}
          color={'primary.300'}
        />
      </Animated.View>
    </Pressable>
  );
};

export default LikePost;
