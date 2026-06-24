import { StyleSheet } from 'react-native';
import { palette, normalize, moderateScale, scaleFontSize, verticalScale } from '@/infrastructure/theme';

const LOGO_SIZE = normalize(64);
const ICON_SIZE = normalize(32);

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
      paddingTop: moderateScale(60),
      paddingBottom: moderateScale(24),
      gap: moderateScale(12),
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
      paddingHorizontal: moderateScale(40),
      gap: moderateScale(4),
    },
    welcomeTitle: {
      fontSize: scaleFontSize(24),
      lineHeight: verticalScale(32),
    },
    formSection: {
      paddingHorizontal: moderateScale(40),
      paddingTop: moderateScale(32),
      gap: moderateScale(24),
    },
    inputGroup: {
      gap: moderateScale(8),
    },
    input: {
      backgroundColor: palette.white,
      borderRadius: moderateScale(8),
      borderWidth: 1,
      borderColor: palette.inactive,
      paddingHorizontal: moderateScale(16),
      paddingVertical: moderateScale(12),
    },
    inputError: {
      borderColor: palette.error,
    },
    errorText: {
      marginTop: moderateScale(4),
    },
    forgotPasswordRow: {
      alignItems: 'flex-end',
      height: moderateScale(20),
    },
    buttonSection: {
      paddingHorizontal: moderateScale(40),
      paddingTop: moderateScale(40),
    },
    signInButton: {
      borderRadius: moderateScale(26),
      backgroundColor: palette.mintGreen,
      height: moderateScale(52),
      justifyContent: 'center',
      alignItems: 'center',
    },
    signInButtonDisabled: {
      opacity: 0.7,
    },
    generalErrorContainer: {
      paddingHorizontal: moderateScale(40),
      paddingTop: moderateScale(8),
    },
    generalErrorText: {
      textAlign: 'center',
    },
    signUpSection: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: moderateScale(40),
      paddingTop: moderateScale(24),
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
  });
};

export default useStyles;
