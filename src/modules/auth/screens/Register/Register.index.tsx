import React from 'react';
import {
  ScrollView,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  View,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { UserPlus } from 'lucide-react-native';
import { Box, Text, KeyboardAvoidingView } from '@shared/components';
import { palette } from '@/infrastructure/theme';
import useRegister from './useRegister';
import useStyles from './useStyles';

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
      <Box style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <Box style={styles.logoSection}>
            <View style={styles.logoCircle}>
              <UserPlus size={32} color={palette.white} style={styles.logoIcon} />
            </View>
            <Text variant="title">betterlyfe</Text>
          </Box>

          <Box style={styles.headerSection}>
            <Text variant="title" style={styles.welcomeTitle}>
              {t('screens.Register.title')}
            </Text>
            <Text variant="subtitle">{t('screens.Register.subtitle')}</Text>
          </Box>

          <Box style={styles.formSection}>
            <Box style={styles.inputGroup}>
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
                <Text variant="caption" style={styles.errorText}>
                  {errors.firstName.message}
                </Text>
              )}
            </Box>

            <Box style={styles.inputGroup}>
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
                <Text variant="caption" style={styles.errorText}>
                  {errors.lastName.message}
                </Text>
              )}
            </Box>

            <Box style={styles.inputGroup}>
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
                <Text variant="caption" style={styles.errorText}>
                  {errors.email.message}
                </Text>
              )}
            </Box>

            <Box style={styles.inputGroup}>
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
                <Text variant="caption" style={styles.errorText}>
                  {errors.password.message}
                </Text>
              )}
            </Box>

            <Box style={styles.inputGroup}>
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
                <Text variant="caption" style={styles.errorText}>
                  {errors.confirmPassword.message}
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

          <Box style={styles.buttonSection}>
            <TouchableOpacity
              style={[
                styles.signUpButton,
                isLoading && styles.signUpButtonDisabled,
              ]}
              onPress={handleSubmit(onSubmit)}
              disabled={isLoading}
              accessibilityLabel={t('screens.Register.signUpButton')}
              accessibilityRole="button"
            >
              {isLoading ? (
                <ActivityIndicator color={palette.white} size="small" />
              ) : (
                <Text variant="button">{t('screens.Register.signUpButton')}</Text>
              )}
            </TouchableOpacity>
          </Box>

          <Box style={styles.signInSection}>
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
