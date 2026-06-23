import { StyleSheet } from 'react-native';
import { palette } from '@/infrastructure/theme';

const CIRCLE_OUTER_SIZE = 200;
const CIRCLE_MIDDLE_SIZE = 140;
const CIRCLE_INNER_SIZE = 80;
const ICON_SIZE = 40;
const DOT_SIZE = 8;
const BORDER_RADIUS_L = 26;

const useStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: palette.background,
    },
    skipContainer: {
      height: 44,
      paddingHorizontal: 20,
      justifyContent: 'center',
      alignItems: 'flex-end',
    },
    iconSection: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 40,
    },
    circleOuter: {
      width: CIRCLE_OUTER_SIZE,
      height: CIRCLE_OUTER_SIZE,
      borderRadius: CIRCLE_OUTER_SIZE / 2,
      backgroundColor: palette.violetLighter,
      justifyContent: 'center',
      alignItems: 'center',
    },
    circleMiddle: {
      width: CIRCLE_MIDDLE_SIZE,
      height: CIRCLE_MIDDLE_SIZE,
      borderRadius: CIRCLE_MIDDLE_SIZE / 2,
      backgroundColor: palette.violetLight,
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
      paddingHorizontal: 40,
      gap: 16,
    },
    title: {
      fontFamily: 'Inter',
      fontSize: 28,
      fontWeight: '700',
      color: palette.textPrimary,
      textAlign: 'center',
      lineHeight: 36,
    },
    description: {
      fontFamily: 'Inter',
      fontSize: 15,
      fontWeight: '400',
      color: palette.textSecondary,
      textAlign: 'center',
      lineHeight: 22.5,
      width: '100%',
    },
    paginationContainer: {
      height: 40,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 8,
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
      paddingHorizontal: 24,
      paddingBottom: 32,
    },
    button: {
      borderRadius: BORDER_RADIUS_L,
    },
    buttonLabel: {
      fontFamily: 'Inter',
      fontSize: 17,
      fontWeight: '600',
    },
    buttonContent: {
      height: 52,
    },
  });
};

export default useStyles;
