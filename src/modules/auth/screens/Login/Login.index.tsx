import React from 'react';
import {
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { Target } from 'lucide-react-native';
import { Box, Text, KeyboardAvoidingView, Button } from '@shared/components';
import { palette, normalize, moderateScale } from '@/infrastructure/theme';
import useLogin from './useLogin';
import useStyles from './useStyles';

const LOGO_SIZE = normalize(64);

const Login = (): React.JSX.Element => {
  const { t } = useTranslation();
  const styles = useStyles();
  const { form, onSubmit, isLoading, generalError, handleForgotPassword, handleSignUp } = useLogin();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = form;

  const emailValue = watch('email');
  const passwordValue = watch('password');

  return (
    <KeyboardAvoidingView>
      <Box flex={1} backgroundColor="mainBackground">
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* Logo Section */}
          <Box
            alignItems="center"
            paddingBottom="l"
            style={{ paddingTop: moderateScale(60), gap: moderateScale(12) }}
          >
            <Box
              width={LOGO_SIZE}
              height={LOGO_SIZE}
              borderRadius="full"
              backgroundColor="primary"
              justifyContent="center"
              alignItems="center"
            >
              <Target size={32} color={palette.white} style={styles.logoIcon} />
            </Box>
            <Text variant="title">betterlyfe</Text>
          </Box>

          {/* Header Section */}
          <Box paddingHorizontal="xxl" gap="xs">
            <Text variant="title">
              {t('screens.Login.welcomeBack')}
            </Text>
            <Text variant="subtitle">{t('screens.Login.signInSubtitle')}</Text>
          </Box>

          {/* Form Section */}
          <Box paddingHorizontal="xxl" paddingTop="xl" gap="l">
            <Box gap="s">
              <Text variant="label">{t('screens.Login.emailLabel')}</Text>
              <TextInput
                style={[styles.input, errors.email && styles.inputError]}
                placeholder={t('screens.Login.emailPlaceholder')}
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
                accessibilityLabel={t('screens.Login.emailLabel')}
                accessibilityRole="text"
              />
              {errors.email && (
                <Text variant="caption" marginTop="xs">
                  {errors.email.message}
                </Text>
              )}
            </Box>

            <Box gap="s">
              <Text variant="label">{t('screens.Login.passwordLabel')}</Text>
              <TextInput
                style={[styles.input, errors.password && styles.inputError]}
                placeholder={t('screens.Login.passwordPlaceholder')}
                placeholderTextColor={palette.textMuted}
                secureTextEntry
                autoCapitalize="none"
                editable={!isLoading}
                value={passwordValue}
                onChangeText={(value: string) =>
                  setValue('password', value, { shouldValidate: true })
                }
                {...register('password')}
                accessibilityLabel={t('screens.Login.passwordLabel')}
                accessibilityRole="text"
              />
              {errors.password && (
                <Text variant="caption" marginTop="xs">
                  {errors.password.message}
                </Text>
              )}
            </Box>

            {/* Forgot Password */}
            <Box alignItems="flex-end" height={moderateScale(20)}>
              <TouchableOpacity
                onPress={handleForgotPassword}
                accessibilityLabel={t('screens.Login.forgotPassword')}
                accessibilityRole="button"
              >
                <Text variant="link">{t('screens.Login.forgotPassword')}</Text>
              </TouchableOpacity>
            </Box>
          </Box>

          {/* General Error */}
          {generalError && (
            <Box paddingHorizontal="xxl" paddingTop="s">
              <Text variant="caption" textAlign="center">
                {generalError}
              </Text>
            </Box>
          )}

          {/* Submit Button */}
          <Box paddingHorizontal="xxl" paddingTop="xxl">
            <Button
              label={t('screens.Login.signInButton')}
              onPress={handleSubmit(onSubmit)}
              loading={isLoading}
              disabled={isLoading}
              accessibilityLabel={t('screens.Login.signInButton')}
            />
          </Box>

          {/* Sign Up Link */}
          <Box
            justifyContent="center"
            alignItems="center"
            paddingBottom="xxl"
            paddingTop="l"
            flexDirection="row"
            flexWrap="wrap"
          >
            <Text variant="subtitle">{t('screens.Login.noAccount')} </Text>
            <TouchableOpacity
              onPress={handleSignUp}
              accessibilityLabel={t('screens.Login.signUp')}
              accessibilityRole="button"
            >
              <Text variant="link">{t('screens.Login.signUp')}</Text>
            </TouchableOpacity>
          </Box>
        </ScrollView>
      </Box>
    </KeyboardAvoidingView>
  );
};

export default Login;
