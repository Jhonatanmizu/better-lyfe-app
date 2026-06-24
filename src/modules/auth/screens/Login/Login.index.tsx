import React from 'react';
import {
  ScrollView,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  View,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { Target } from 'lucide-react-native';
import { Box, Text, KeyboardAvoidingView } from '@shared/components';
import { palette } from '@/infrastructure/theme';
import useLogin from './useLogin';
import useStyles from './useStyles';

const Login = (): React.JSX.Element => {
  const { t } = useTranslation();
  const styles = useStyles();
  const { form, onSubmit, isLoading, generalError } = useLogin();

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
      <Box style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <Box style={styles.logoSection}>
            <View style={styles.logoCircle}>
              <Target size={32} color={palette.white} style={styles.logoIcon} />
            </View>
            <Text variant="title">betterlyfe</Text>
          </Box>

          <Box style={styles.headerSection}>
            <Text variant="title" style={styles.welcomeTitle}>
              {t('screens.Login.welcomeBack')}
            </Text>
            <Text variant="subtitle">{t('screens.Login.signInSubtitle')}</Text>
          </Box>

          <Box style={styles.formSection}>
            <Box style={styles.inputGroup}>
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
                <Text variant="caption" style={styles.errorText}>
                  {errors.email.message}
                </Text>
              )}
            </Box>

            <Box style={styles.inputGroup}>
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
                <Text variant="caption" style={styles.errorText}>
                  {errors.password.message}
                </Text>
              )}
            </Box>

            <Box style={styles.forgotPasswordRow}>
              <TouchableOpacity
                accessibilityLabel={t('screens.Login.forgotPassword')}
                accessibilityRole="button"
              >
                <Text variant="link">{t('screens.Login.forgotPassword')}</Text>
              </TouchableOpacity>
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
                styles.signInButton,
                isLoading && styles.signInButtonDisabled,
              ]}
              onPress={handleSubmit(onSubmit)}
              disabled={isLoading}
              accessibilityLabel={t('screens.Login.signInButton')}
              accessibilityRole="button"
            >
              {isLoading ? (
                <ActivityIndicator color={palette.white} size="small" />
              ) : (
                <Text variant="button">{t('screens.Login.signInButton')}</Text>
              )}
            </TouchableOpacity>
          </Box>

          <Box style={styles.signUpSection}>
            <Text variant="subtitle">{t('screens.Login.noAccount')} </Text>
            <TouchableOpacity
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
