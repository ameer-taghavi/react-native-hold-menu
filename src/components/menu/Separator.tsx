import React, { memo } from 'react';
import { StyleSheet } from 'react-native';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { useInternal } from '../../hooks';

const Separator = () => {
  const { theme } = useInternal();

  const separatorStyles = useAnimatedStyle(() => {
    return {
      backgroundColor: theme.ViewStyle.value?.borderColor,
    };
  }, [theme]);

  return <Animated.View style={[styles.separator, { ...separatorStyles }]} />;
};

export default memo(Separator);

const styles = StyleSheet.create({
  separator: {
    width: '100%',
    height: 8,
  },
});
