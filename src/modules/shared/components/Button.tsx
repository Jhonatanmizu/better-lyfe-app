import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  TextStyle,
  ActivityIndicator,
  Text as RNText,
} from 'react-native';
import { useHaptics } from '../hooks/useHaptics';
import {
  palette,
  moderateScale,
  scaleFontSize,
} from '@/infrastructure/theme';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  label: string;
  onPress: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  style?: ViewStyle;
  labelStyle?: TextStyle;
  accessibilityLabel?: string;
  testID?: string;
}

const VARIANT_STYLES: Record<ButtonVariant, { container: ViewStyle; label: TextStyle }> = {
  primary: {
    container: {
      backgroundColor: palette.mintGreen,
    },
    label: {
      color: palette.white,
    },
  },
  secondary: {
    container: {
      backgroundColor: palette.mintGreenLighter,
    },
    label: {
      color: palette.mintGreen,
    },
  },
  ghost: {
    container: {
      backgroundColor: 'transparent',
    },
    label: {
      color: palette.mintGreen,
    },
  },
};

const SIZE_STYLES: Record<ButtonSize, { container: ViewStyle; label: TextStyle }> = {
  sm: {
    container: {
      height: moderateScale(40),
      paddingHorizontal: moderateScale(16),
    },
    label: {
      fontSize: scaleFontSize(14),
    },
  },
  md: {
    container: {
      height: moderateScale(48),
      paddingHorizontal: moderateScale(24),
    },
    label: {
      fontSize: scaleFontSize(15),
    },
  },
  lg: {
    container: {
      height: moderateScale(52),
      paddingHorizontal: moderateScale(32),
    },
    label: {
      fontSize: scaleFontSize(17),
    },
  },
};

const Button = React.memo(({
  label,
  onPress,
  variant = 'primary',
  size = 'lg',
  loading = false,
  disabled = false,
  leftIcon,
  rightIcon,
  style,
  labelStyle,
  accessibilityLabel,
  testID,
}: ButtonProps) => {
  const { triggerLight } = useHaptics();

  const handlePress = () => {
    if (loading || disabled) return;
    triggerLight();
    onPress();
  };

  const containerStyles = [
    styles.container,
    VARIANT_STYLES[variant].container,
    SIZE_STYLES[size].container,
    disabled && styles.disabled,
    style,
  ];

  const textStyles = [
    styles.label,
    VARIANT_STYLES[variant].label,
    SIZE_STYLES[size].label,
    labelStyle,
  ];

  return (
    <TouchableOpacity
      style={containerStyles}
      onPress={handlePress}
      disabled={disabled || loading}
      activeOpacity={0.8}
      accessibilityLabel={accessibilityLabel || label}
      accessibilityRole="button"
      testID={testID}
    >
      {loading ? (
        <ActivityIndicator
          size="small"
          color={variant === 'primary' ? palette.white : palette.mintGreen}
        />
      ) : (
        <>
          {leftIcon}
          <RNText style={textStyles}>{label}</RNText>
          {rightIcon}
        </>
      )}
    </TouchableOpacity>
  );
});

Button.displayName = 'Button';

const styles = StyleSheet.create({
  container: {
    borderRadius: moderateScale(26),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: moderateScale(8),
  },
  label: {
    fontFamily: 'Inter',
    fontWeight: '600',
  },
  disabled: {
    opacity: 0.5,
  },
});

export { Button };
