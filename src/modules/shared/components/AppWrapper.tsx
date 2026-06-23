import React, { PropsWithChildren } from 'react';
import { ThemeProvider } from '@shopify/restyle';
import { StatusBar, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PaperProvider, MD3LightTheme, MD3Theme } from 'react-native-paper';
import theme, { palette } from '@/infrastructure/theme';
import { EnvironmentBanner } from './EnvironmentBanner';

interface Props extends PropsWithChildren {}

const paperTheme: MD3Theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: palette.mintGreen,
    onPrimary: palette.white,
    primaryContainer: palette.mintGreenLight,
    onPrimaryContainer: palette.textPrimary,
    secondary: palette.mintGreen,
    onSecondary: palette.white,
    background: palette.background,
    onBackground: palette.textPrimary,
    surface: palette.white,
    onSurface: palette.textPrimary,
    surfaceVariant: palette.mintGreenLighter,
    outline: palette.inactive,
  },
  roundness: 26,
};

const AppWrapper = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <PaperProvider theme={paperTheme}>
        <StatusBar barStyle="dark-content" animated translucent />
        <SafeAreaView style={styles.container} testID="test_safe_app_wrapper">
          <EnvironmentBanner />
          {children}
        </SafeAreaView>
      </PaperProvider>
    </ThemeProvider>
  );
};

export { AppWrapper };

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
