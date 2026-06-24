import React from 'react';
import {
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { UserPlus } from 'lucide-react-native';
import { Box, Text, KeyboardAvoidingView, Button } from '@shared/components';
import { palette, normalize, moderateScale } from '@/infrastructure/theme';
import useRegister from './useRegister';
import useStyles from './useStyles';

const LOGO_SIZE = normalize(64);

const Register = (): React.JSX.Element => {
  const { t } = useTranslation();
  const styles = useStyles();
  const {
    form,
    onSubmit,
    isLoading,
    generalError,
    handleBackToSignIn,
  } = useRegister();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = form;

  const firstNameValue = watch('firstName');
  const lastNameValue = watch('lastName');
  const emailValue = watch('email');
  const passwordValue = watch('password');
  const confirmPasswordValue = watch('confirmPassword');

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
              <UserPlus size={32} color={palette.white} style={styles.logoIcon} />
            </Box>
            <Text variant="title">betterlyfe</Text>
          </Box>

          {/* Header Section */}
          <Box paddingHorizontal="xxl" gap="xs">
            <Text variant="title">
              {t('screens.Register.title')}
            </Text>
            <Text variant="subtitle">{t('screens.Register.subtitle')}</Text>
          </Box>

          {/* Form Section */}
          <Box paddingHorizontal="xxl" paddingTop="xl" gap="l">
            <Box gap="s">
              <Text variant="label">{t('screens.Register.firstNameLabel')}</Text>
              <TextInput
                style={[styles.input, errors.firstName && styles.inputError]}
                placeholder={t('screens.Register.firstNamePlaceholder')}
                placeholderTextColor={palette.textMuted}
                autoCapitalize="words"
                autoCorrect={false}
                editable={!isLoading}
                value={firstNameValue}
                onChangeText={(value: string) =>
                  setValue('firstName', value, { shouldValidate: true })
                }
                {...register('firstName')}
                accessibilityLabel={t('screens.Register.firstNameLabel')}
                accessibilityRole="text"
              />
              {errors.firstName && (
                <Text variant="caption" marginTop="xs">
                  {errors.firstName.message}
                </Text>
              )}
            </Box>

            <Box gap="s">
              <Text variant="label">{t('screens.Register.lastNameLabel')}</Text>
              <TextInput
                style={[styles.input, errors.lastName && styles.inputError]}
                placeholder={t('screens.Register.lastNamePlaceholder')}
                placeholderTextColor={palette.textMuted}
                autoCapitalize="words"
                autoCorrect={false}
                editable={!isLoading}
                value={lastNameValue}
                onChangeText={(value: string) =>
                  setValue('lastName', value, { shouldValidate: true })
                }
                {...register('lastName')}
                accessibilityLabel={t('screens.Register.lastNameLabel')}
                accessibilityRole="text"
              />
              {errors.lastName && (
                <Text variant="caption" marginTop="xs">
                  {errors.lastName.message}
                </Text>
              )}
            </Box>

            <Box gap="s">
              <Text variant="label">{t('screens.Register.emailLabel')}</Text>
              <TextInput
                style={[styles.input, errors.email && styles.inputError]}
                placeholder={t('screens.Register.emailPlaceholder')}
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
                accessibilityLabel={t('screens.Register.emailLabel')}
                accessibilityRole="text"
              />
              {errors.email && (
                <Text variant="caption" marginTop="xs">
                  {errors.email.message}
                </Text>
              )}
            </Box>

            <Box gap="s">
              <Text variant="label">{t('screens.Register.passwordLabel')}</Text>
              <TextInput
                style={[styles.input, errors.password && styles.inputError]}
                placeholder={t('screens.Register.passwordPlaceholder')}
                placeholderTextColor={palette.textMuted}
                secureTextEntry
                autoCapitalize="none"
                editable={!isLoading}
                value={passwordValue}
                onChangeText={(value: string) =>
                  setValue('password', value, { shouldValidate: true })
                }
                {...register('password')}
                accessibilityLabel={t('screens.Register.passwordLabel')}
                accessibilityRole="text"
              />
              {errors.password && (
                <Text variant="caption" marginTop="xs">
                  {errors.password.message}
                </Text>
              )}
            </Box>

            <Box gap="s">
              <Text variant="label">{t('screens.Register.confirmPasswordLabel')}</Text>
              <TextInput
                style={[styles.input, errors.confirmPassword && styles.inputError]}
                placeholder={t('screens.Register.confirmPasswordPlaceholder')}
                placeholderTextColor={palette.textMuted}
                secureTextEntry
                autoCapitalize="none"
                editable={!isLoading}
                value={confirmPasswordValue}
                onChangeText={(value: string) =>
                  setValue('confirmPassword', value, { shouldValidate: true })
                }
                {...register('confirmPassword')}
                accessibilityLabel={t('screens.Register.confirmPasswordLabel')}
                accessibilityRole="text"
              />
              {errors.confirmPassword && (
                <Text variant="caption" marginTop="xs">
                  {errors.confirmPassword.message}
                </Text>
              )}
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
              label={t('screens.Register.signUpButton')}
              onPress={handleSubmit(onSubmit)}
              loading={isLoading}
              disabled={isLoading}
              accessibilityLabel={t('screens.Register.signUpButton')}
            />
          </Box>

          {/* Sign In Link */}
          <Box
            justifyContent="center"
            alignItems="center"
            paddingBottom="xxl"
            paddingTop="l"
            flexDirection="row"
            flexWrap="wrap"
          >
            <Text variant="subtitle">{t('screens.Register.alreadyHaveAccount')} </Text>
            <TouchableOpacity
              onPress={handleBackToSignIn}
              accessibilityLabel={t('screens.Register.signIn')}
              accessibilityRole="button"
            >
              <Text variant="link">{t('screens.Register.signIn')}</Text>
            </TouchableOpacity>
          </Box>
        </ScrollView>
      </Box>
    </KeyboardAvoidingView>
  );
};

export default Register;
