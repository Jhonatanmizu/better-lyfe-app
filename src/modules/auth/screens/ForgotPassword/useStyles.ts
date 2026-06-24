import { StyleSheet } from 'react-native';
import { palette } from '@/infrastructure/theme';

const LOGO_SIZE = 80;
const ICON_SIZE = 36;

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
      paddingBottom: 32,
    },
    logoCircle: {
      width: LOGO_SIZE,
      height: LOGO_SIZE,
      borderRadius: LOGO_SIZE / 2,
      backgroundColor: palette.mintGreenLighter,
      justifyContent: 'center',
      alignItems: 'center',
    },
    logoIcon: {
      width: ICON_SIZE,
      height: ICON_SIZE,
    },
    headerSection: {
      paddingHorizontal: 40,
      gap: 8,
    },
    formSection: {
      paddingHorizontal: 40,
      paddingTop: 40,
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
    buttonSection: {
      paddingHorizontal: 40,
      paddingTop: 32,
    },
    sendButton: {
      borderRadius: 26,
      backgroundColor: palette.mintGreen,
      height: 52,
      justifyContent: 'center',
      alignItems: 'center',
    },
    sendButtonDisabled: {
      opacity: 0.7,
    },
    generalErrorContainer: {
      paddingHorizontal: 40,
      paddingTop: 8,
    },
    generalErrorText: {
      textAlign: 'center',
    },
    successContainer: {
      paddingHorizontal: 40,
      paddingTop: 8,
    },
    successText: {
      textAlign: 'center',
      color: palette.mintGreen,
    },
    backSection: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      paddingBottom: 40,
      paddingTop: 24,
    },
    backButton: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 4,
    },
    backText: {
      color: palette.textMuted,
    },
  });
};

export default useStyles;
