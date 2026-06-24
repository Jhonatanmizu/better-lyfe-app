import React from 'react';
import {
  ScrollView,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  View,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { Lock, ArrowLeft } from 'lucide-react-native';
import { Box, Text, KeyboardAvoidingView } from '@shared/components';
import { palette } from '@/infrastructure/theme';
import useForgotPassword from './useForgotPassword';
import useStyles from './useStyles';

const ForgotPassword = (): React.JSX.Element => {
  const { t } = useTranslation();
  const styles = useStyles();
  const {
    form,
    onSubmit,
    isLoading,
    generalError,
    isSuccess,
    handleBackToSignIn,
  } = useForgotPassword();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = form;

  const emailValue = watch('email');

  return (
    <KeyboardAvoidingView>
      <Box style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <Box style={styles.logoSection}>
            <View style={styles.logoCircle}>
              <Lock
                size={36}
                color={palette.mintGreen}
                style={styles.logoIcon}
              />
            </View>
          </Box>

          <Box style={styles.headerSection}>
            <Text variant="title">{t('screens.ForgotPassword.title')}</Text>
            <Text variant="subtitle">
              {t('screens.ForgotPassword.subtitle')}
            </Text>
          </Box>

          <Box style={styles.formSection}>
            <Box style={styles.inputGroup}>
              <Text variant="label">
                {t('screens.ForgotPassword.emailLabel')}
              </Text>
              <TextInput
                style={[styles.input, errors.email && styles.inputError]}
                placeholder={t('screens.ForgotPassword.emailPlaceholder')}
                placeholderTextColor={palette.textMuted}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                editable={!isLoading}
                value={emailValue}
                onChangeText={(value: string) =>
                  setValue('email', value, { shouldValidate: true })
                }
                {...register('email')}
                accessibilityLabel={t('screens.ForgotPassword.emailLabel')}
                accessibilityRole="text"
              />
              {errors.email && (
                <Text variant="caption" style={styles.errorText}>
                  {errors.email.message}
                </Text>
              )}
            </Box>
          </Box>

          {generalError && (
            <Box style={styles.generalErrorContainer}>
              <Text variant="caption" style={styles.generalErrorText}>
                {generalError}
              </Text>
            </Box>
          )}

          {isSuccess && (
            <Box style={styles.successContainer}>
              <Text variant="caption" style={styles.successText}>
                {t('screens.ForgotPassword.successMessage')}
              </Text>
            </Box>
          )}

          <Box style={styles.buttonSection}>
            <TouchableOpacity
              style={[
                styles.sendButton,
                isLoading && styles.sendButtonDisabled,
              ]}
              onPress={handleSubmit(onSubmit)}
              disabled={isLoading}
              accessibilityLabel={t(
                'screens.ForgotPassword.sendResetLinkButton',
              )}
              accessibilityRole="button"
            >
              {isLoading ? (
                <ActivityIndicator color={palette.white} size="small" />
              ) : (
                <Text variant="button">
                  {t('screens.ForgotPassword.sendResetLinkButton')}
                </Text>
              )}
            </TouchableOpacity>
          </Box>

          <Box style={styles.backSection}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={handleBackToSignIn}
              accessibilityLabel={t('screens.ForgotPassword.backToSignIn')}
              accessibilityRole="button"
            >
              <ArrowLeft size={16} color={palette.textMuted} />
              <Text variant="subtitle" style={styles.backText}>
                {t('screens.ForgotPassword.backToSignIn')}
              </Text>
            </TouchableOpacity>
          </Box>
        </ScrollView>
      </Box>
    </KeyboardAvoidingView>
  );
};

export default ForgotPassword;
