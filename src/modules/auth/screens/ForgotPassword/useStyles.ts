import { StyleSheet } from 'react-native';
import {
  palette,
  normalize,
  moderateScale,
} from '@/infrastructure/theme';

const ICON_SIZE = normalize(36);

const useStyles = () => {
  return StyleSheet.create({
    scrollContent: {
      flexGrow: 1,
      paddingBottom: moderateScale(40),
    },
    logoIcon: {
      width: ICON_SIZE,
      height: ICON_SIZE,
    },
    input: {
      backgroundColor: palette.white,
      borderRadius: moderateScale(8),
      borderWidth: 1,
      borderColor: palette.inactive,
      paddingHorizontal: moderateScale(16),
      paddingVertical: moderateScale(12),
      color: palette.textPrimary,
    },
    inputError: {
      borderColor: palette.error,
    },
    backButton: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: moderateScale(4),
    },
  });
};

export default useStyles;
