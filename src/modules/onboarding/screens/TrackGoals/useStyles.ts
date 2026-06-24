import { StyleSheet } from 'react-native';
import { palette, moderateScale, scaleFontSize, verticalScale } from '@/infrastructure/theme';
import {
  CIRCLE_OUTER_SIZE,
  CIRCLE_MIDDLE_SIZE,
  CIRCLE_INNER_SIZE,
  ICON_SIZE,
  DOT_SIZE,
  BORDER_RADIUS_L,
} from '@/modules/onboarding/constants/responsive';

const useStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: palette.background,
    },
    skipContainer: {
      height: moderateScale(44),
      paddingHorizontal: moderateScale(20),
      justifyContent: 'center',
      alignItems: 'flex-end',
    },
    iconSection: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: moderateScale(40),
    },
    circleOuter: {
      width: CIRCLE_OUTER_SIZE,
      height: CIRCLE_OUTER_SIZE,
      borderRadius: CIRCLE_OUTER_SIZE / 2,
      backgroundColor: palette.mintGreenLighter,
      justifyContent: 'center',
      alignItems: 'center',
    },
    circleMiddle: {
      width: CIRCLE_MIDDLE_SIZE,
      height: CIRCLE_MIDDLE_SIZE,
      borderRadius: CIRCLE_MIDDLE_SIZE / 2,
      backgroundColor: palette.mintGreenLight,
      justifyContent: 'center',
      alignItems: 'center',
    },
    circleInner: {
      width: CIRCLE_INNER_SIZE,
      height: CIRCLE_INNER_SIZE,
      borderRadius: CIRCLE_INNER_SIZE / 2,
      backgroundColor: palette.mintGreen,
      justifyContent: 'center',
      alignItems: 'center',
    },
    icon: {
      width: ICON_SIZE,
      height: ICON_SIZE,
    },
    textSection: {
      alignItems: 'center',
      paddingHorizontal: moderateScale(40),
      gap: moderateScale(16),
    },
    title: {
      fontFamily: 'Inter',
      fontSize: scaleFontSize(28),
      fontWeight: '700',
      color: palette.textPrimary,
      textAlign: 'center',
      lineHeight: verticalScale(36),
    },
    description: {
      fontFamily: 'Inter',
      fontSize: scaleFontSize(15),
      fontWeight: '400',
      color: palette.textSecondary,
      textAlign: 'center',
      lineHeight: verticalScale(22.5),
      width: '100%',
    },
    paginationContainer: {
      height: moderateScale(40),
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: moderateScale(8),
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
    buttonContainer: {
      paddingHorizontal: moderateScale(24),
      paddingBottom: moderateScale(32),
    },
    button: {
      borderRadius: BORDER_RADIUS_L,
    },
    buttonLabel: {
      fontFamily: 'Inter',
      fontSize: scaleFontSize(17),
      fontWeight: '600',
    },
    buttonContent: {
      height: moderateScale(52),
    },
  });
};

export default useStyles;
