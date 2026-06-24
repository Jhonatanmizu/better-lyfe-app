import React from 'react';
import { StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { AlertTriangle } from 'lucide-react-native';
import { Box } from './Box';
import { Text } from './Text';
import { Button } from './Button';
import { palette, moderateScale, scaleFontSize } from '@/infrastructure/theme';

interface ErrorStateProps {
  title?: string;
  message?: string;
  retryLabel?: string;
  onRetry?: () => void;
}

const ErrorState = React.memo(({
  title,
  message,
  retryLabel,
  onRetry,
}: ErrorStateProps) => {
  const { t } = useTranslation();

  const displayTitle = title || t('shared.errorState.title');
  const displayMessage = message || t('shared.errorState.message');
  const displayRetryLabel = retryLabel || t('shared.errorState.retryLabel');

  return (
    <Box style={styles.container}>
      <Box style={styles.iconContainer}>
        <AlertTriangle size={moderateScale(48)} color={palette.error} />
      </Box>

      <Text style={styles.title}>{displayTitle}</Text>

      <Text style={styles.message}>{displayMessage}</Text>

      {onRetry && (
        <Box style={styles.actionContainer}>
          <Button
            label={displayRetryLabel}
            onPress={onRetry}
            variant="secondary"
            size="md"
          />
        </Box>
      )}
    </Box>
  );
});

ErrorState.displayName = 'ErrorState';

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

export { ErrorState };
