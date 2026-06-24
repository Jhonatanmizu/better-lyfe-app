import { StyleSheet } from 'react-native';
import { palette, moderateScale } from '@/infrastructure/theme';
import {
  DOT_SIZE,
} from '@/modules/onboarding/constants/responsive';

const useStyles = () => {
  return StyleSheet.create({
    skipContainer: {
      height: moderateScale(44),
      paddingHorizontal: moderateScale(20),
      justifyContent: 'center',
      alignItems: 'flex-end',
    },
    dot: {
      width: DOT_SIZE,
      height: DOT_SIZE,
      borderRadius: DOT_SIZE / 2,
    },
    dotActive: {
      backgroundColor: palette.mintGreen,
    },
    dotInactive: {
      backgroundColor: palette.inactive,
    },
  });
};

export default useStyles;
