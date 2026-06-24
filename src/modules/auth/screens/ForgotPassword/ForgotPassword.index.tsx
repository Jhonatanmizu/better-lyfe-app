import React from 'react';
import {
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { Lock, ArrowLeft } from 'lucide-react-native';
import { Box, Text, KeyboardAvoidingView, Button } from '@shared/components';
import { palette, normalize, moderateScale } from '@/infrastructure/theme';
import useForgotPassword from './useForgotPassword';
import useStyles from './useStyles';

const LOGO_SIZE = normalize(80);

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
      <Box flex={1} backgroundColor="mainBackground">
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <Box
            alignItems="center"
            paddingBottom="xl"
            style={{ paddingTop: moderateScale(60) }}
          >
            <Box
              width={LOGO_SIZE}
              height={LOGO_SIZE}
              borderRadius="full"
              backgroundColor="primaryLighter"
              justifyContent="center"
              alignItems="center"
            >
              <Lock
                size={36}
                color={palette.mintGreen}
                style={styles.logoIcon}
              />
            </Box>
          </Box>

          <Box paddingHorizontal="xxl" gap="s">
            <Text variant="title">{t('screens.ForgotPassword.title')}</Text>
            <Text variant="subtitle">
              {t('screens.ForgotPassword.subtitle')}
            </Text>
          </Box>

          <Box paddingHorizontal="xxl" paddingTop="xxl" gap="l">
            <Box gap="s">
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
                <Text variant="caption" marginTop="xs">
                  {errors.email.message}
                </Text>
              )}
            </Box>
          </Box>

          {generalError && (
            <Box paddingHorizontal="xxl" paddingTop="s">
              <Text variant="caption" textAlign="center">
                {generalError}
              </Text>
            </Box>
          )}

          {isSuccess && (
            <Box paddingHorizontal="xxl" paddingTop="s">
              <Text variant="caption" textAlign="center" color="primary">
                {t('screens.ForgotPassword.successMessage')}
              </Text>
            </Box>
          )}

          <Box paddingHorizontal="xxl" paddingTop="xxl">
            <Button
              label={t('screens.ForgotPassword.sendResetLinkButton')}
              onPress={handleSubmit(onSubmit)}
              loading={isLoading}
              disabled={isLoading}
              accessibilityLabel={t(
                'screens.ForgotPassword.sendResetLinkButton',
              )}
            />
          </Box>

          <Box
            flex={1}
            justifyContent="flex-end"
            alignItems="center"
            paddingBottom="xxl"
            paddingTop="l"
          >
            <TouchableOpacity
              style={styles.backButton}
              onPress={handleBackToSignIn}
              accessibilityLabel={t('screens.ForgotPassword.backToSignIn')}
              accessibilityRole="button"
            >
              <ArrowLeft size={16} color={palette.textMuted} />
              <Text variant="subtitle" color="textMuted">
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
