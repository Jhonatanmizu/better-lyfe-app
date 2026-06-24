import React from 'react';
import { StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Inbox } from 'lucide-react-native';
import { Box } from './Box';
import { Text } from './Text';
import { Button } from './Button';
import { palette, moderateScale, scaleFontSize } from '@/infrastructure/theme';

interface EmptyStateProps {
  icon?: React.ReactNode;
  title?: string;
  message?: string;
  actionLabel?: string;
  onAction?: () => void;
}

const EmptyState = React.memo(({
  icon,
  title,
  message,
  actionLabel,
  onAction,
}: EmptyStateProps) => {
  const { t } = useTranslation();

  const displayTitle = title || t('shared.emptyState.title');
  const displayMessage = message || t('shared.emptyState.message');

  return (
    <Box style={styles.container}>
      <Box style={styles.iconContainer}>
        {icon || (
          <Inbox size={moderateScale(48)} color={palette.inactive} />
        )}
      </Box>

      <Text style={styles.title}>{displayTitle}</Text>

      {displayMessage && <Text style={styles.message}>{displayMessage}</Text>}

      {actionLabel && onAction && (
        <Box style={styles.actionContainer}>
          <Button
            label={actionLabel}
            onPress={onAction}
            variant="secondary"
            size="md"
          />
        </Box>
      )}
    </Box>
  );
});

EmptyState.displayName = 'EmptyState';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: moderateScale(40),
    paddingVertical: moderateScale(60),
  },
  iconContainer: {
    marginBottom: moderateScale(16),
  },
  title: {
    fontSize: scaleFontSize(18),
    fontWeight: '600',
    color: palette.textPrimary,
    textAlign: 'center',
    marginBottom: moderateScale(8),
  },
  message: {
    fontSize: scaleFontSize(14),
    color: palette.textSecondary,
    textAlign: 'center',
    lineHeight: moderateScale(20),
  },
  actionContainer: {
    marginTop: moderateScale(24),
  },
});

export { EmptyState };
