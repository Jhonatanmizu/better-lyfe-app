import React from 'react';
import { StyleSheet, ViewStyle, TouchableOpacity } from 'react-native';
import { Info, CheckCircle, AlertTriangle, XCircle, X } from 'lucide-react-native';
import { Box } from './Box';
import { Text } from './Text';
import {
  palette,
  moderateScale,
  scaleFontSize,
} from '@/infrastructure/theme';

type BannerType = 'info' | 'success' | 'warning' | 'error';

interface InfoBannerProps {
  type?: BannerType;
  title: string;
  message?: string;
  actionLabel?: string;
  onAction?: () => void;
  dismissible?: boolean;
  onDismiss?: () => void;
  style?: ViewStyle;
}

const BANNER_CONFIG: Record<
  BannerType,
  { backgroundColor: string; iconColor: string; IconComponent: typeof Info }
> = {
  info: {
    backgroundColor: palette.mintGreenLighter,
    iconColor: palette.mintGreen,
    IconComponent: Info,
  },
  success: {
    backgroundColor: palette.mintGreenLighter,
    iconColor: palette.mintGreen,
    IconComponent: CheckCircle,
  },
  warning: {
    backgroundColor: palette.amberLighter,
    iconColor: palette.amberLight,
    IconComponent: AlertTriangle,
  },
  error: {
    backgroundColor: palette.errorLight,
    iconColor: palette.error,
    IconComponent: XCircle,
  },
};

const InfoBanner = React.memo(({
  type = 'info',
  title,
  message,
  actionLabel,
  onAction,
  dismissible = false,
  onDismiss,
  style,
}: InfoBannerProps) => {
  const config = BANNER_CONFIG[type];
  const IconComponent = config.IconComponent;

  return (
    <Box
      style={[
        styles.container,
        { backgroundColor: config.backgroundColor },
        style,
      ]}
    >
      <IconComponent size={moderateScale(20)} color={config.iconColor} />

      <Box style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        {message && <Text style={styles.message}>{message}</Text>}

        {actionLabel && onAction && (
          <TouchableOpacity
            onPress={onAction}
            style={styles.actionButton}
            accessibilityLabel={actionLabel}
            accessibilityRole="button"
          >
            <Text style={[styles.actionLabel, { color: config.iconColor }]}>
              {actionLabel}
            </Text>
          </TouchableOpacity>
        )}
      </Box>

      {dismissible && onDismiss && (
        <TouchableOpacity
          onPress={onDismiss}
          style={styles.dismissButton}
          accessibilityLabel="Dismiss"
          accessibilityRole="button"
        >
          <X size={moderateScale(16)} color={palette.textMuted} />
        </TouchableOpacity>
      )}
    </Box>
  );
});

InfoBanner.displayName = 'InfoBanner';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: moderateScale(16),
    borderRadius: moderateScale(12),
    gap: moderateScale(12),
  },
  content: {
    flex: 1,
    gap: moderateScale(4),
  },
  title: {
    fontSize: scaleFontSize(14),
    fontWeight: '600',
    color: palette.textPrimary,
  },
  message: {
    fontSize: scaleFontSize(13),
    color: palette.textSecondary,
    lineHeight: moderateScale(20),
  },
  actionButton: {
    marginTop: moderateScale(4),
  },
  actionLabel: {
    fontSize: scaleFontSize(13),
    fontWeight: '600',
  },
  dismissButton: {
    padding: moderateScale(4),
  },
});

export { InfoBanner };
