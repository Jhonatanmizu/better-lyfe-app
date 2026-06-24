import { StyleSheet } from 'react-native';
import { palette } from '@/infrastructure/theme';

const LOGO_SIZE = 64;
const ICON_SIZE = 32;

const useStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: palette.background,
    },
    scrollContent: {
      flexGrow: 1,
    },
    logoSection: {
      alignItems: 'center',
      paddingTop: 60,
      paddingBottom: 24,
      gap: 12,
    },
    logoCircle: {
      width: LOGO_SIZE,
      height: LOGO_SIZE,
      borderRadius: LOGO_SIZE / 2,
      backgroundColor: palette.mintGreen,
      justifyContent: 'center',
      alignItems: 'center',
    },
    logoIcon: {
      width: ICON_SIZE,
      height: ICON_SIZE,
    },
    headerSection: {
      paddingHorizontal: 40,
      gap: 4,
    },
    welcomeTitle: {
      fontSize: 24,
      lineHeight: 32,
    },
    formSection: {
      paddingHorizontal: 40,
      paddingTop: 32,
      gap: 24,
    },
    inputGroup: {
      gap: 8,
    },
    input: {
      backgroundColor: palette.white,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: palette.inactive,
      paddingHorizontal: 16,
      paddingVertical: 12,
    },
    inputError: {
      borderColor: palette.error,
    },
    errorText: {
      marginTop: 4,
    },
    forgotPasswordRow: {
      alignItems: 'flex-end',
      height: 20,
    },
    buttonSection: {
      paddingHorizontal: 40,
      paddingTop: 40,
    },
    signInButton: {
      borderRadius: 26,
      backgroundColor: palette.mintGreen,
      height: 52,
      justifyContent: 'center',
      alignItems: 'center',
    },
    signInButtonDisabled: {
      opacity: 0.7,
    },
    generalErrorContainer: {
      paddingHorizontal: 40,
      paddingTop: 8,
    },
    generalErrorText: {
      textAlign: 'center',
    },
    signUpSection: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: 40,
      paddingTop: 24,
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
  });
};

export default useStyles;
