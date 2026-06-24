import React from 'react';
import { ViewStyle, StyleProp } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { Box } from './Box';
import { palette, moderateScale } from '@/infrastructure/theme';

interface SkeletonProps {
  width?: number | string;
  height?: number;
  borderRadius?: number;
  style?: StyleProp<ViewStyle>;
}

const Skeleton = React.memo(({
  width = '100%',
  height = moderateScale(20),
  borderRadius = moderateScale(8),
  style,
}: SkeletonProps) => {
  return (
    <SkeletonPlaceholder
      borderRadius={borderRadius}
      backgroundColor={palette.inactive}
      highlightColor={palette.mintGreenLighter}
      speed={800}
    >
      <Box
        style={[
          {
            width: width as ViewStyle['width'],
            height,
            borderRadius,
          },
          style,
        ]}
      />
    </SkeletonPlaceholder>
  );
});

Skeleton.displayName = 'Skeleton';

interface SkeletonTextProps {
  lines?: number;
  lineHeight?: number;
  lastLineWidth?: number | string;
  style?: StyleProp<ViewStyle>;
}

const SkeletonText = React.memo(({
  lines = 3,
  lineHeight = moderateScale(16),
  lastLineWidth = '60%',
  style,
}: SkeletonTextProps) => {
  return (
    <SkeletonPlaceholder
      borderRadius={lineHeight / 2}
      backgroundColor={palette.inactive}
      highlightColor={palette.mintGreenLighter}
      speed={800}
    >
      <Box style={style}>
        {Array.from({ length: lines }, (_, index) => (
          <Box
            key={index}
            style={{
              width: index === lines - 1 ? (lastLineWidth as ViewStyle['width']) : '100%',
              height: lineHeight,
              marginBottom: moderateScale(8),
              borderRadius: lineHeight / 2,
            }}
          />
        ))}
      </Box>
    </SkeletonPlaceholder>
  );
});

SkeletonText.displayName = 'SkeletonText';

interface SkeletonCardProps {
  height?: number;
  style?: StyleProp<ViewStyle>;
}

const SkeletonCard = React.memo(({
  height = moderateScale(120),
  style,
}: SkeletonCardProps) => {
  return (
    <SkeletonPlaceholder
      borderRadius={moderateScale(16)}
      backgroundColor={palette.inactive}
      highlightColor={palette.mintGreenLighter}
      speed={800}
    >
      <Box
        style={[
          {
            width: '100%',
            height,
            borderRadius: moderateScale(16),
          },
          style,
        ]}
      />
    </SkeletonPlaceholder>
  );
});

SkeletonCard.displayName = 'SkeletonCard';

export { Skeleton, SkeletonText, SkeletonCard };
