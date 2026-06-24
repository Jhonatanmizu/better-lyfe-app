import React from 'react';
import { ActivityIndicator, ViewStyle, StyleProp } from 'react-native';
import { Box } from './Box';
import { palette } from '@/infrastructure/theme';

interface SpinnerProps {
  size?: 'small' | 'large';
  color?: string;
  fullscreen?: boolean;
  style?: StyleProp<ViewStyle>;
}

const Spinner = React.memo(({
  size = 'large',
  color = palette.mintGreen,
  fullscreen = true,
  style,
}: SpinnerProps) => {
  if (fullscreen) {
    return (
      <Box flex={1} justifyContent="center" alignItems="center" style={style}>
        <ActivityIndicator size={size} color={color} />
      </Box>
    );
  }

  return (
    <Box justifyContent="center" alignItems="center" style={style}>
      <ActivityIndicator size={size} color={color} />
    </Box>
  );
});

Spinner.displayName = 'Spinner';

export { Spinner };
