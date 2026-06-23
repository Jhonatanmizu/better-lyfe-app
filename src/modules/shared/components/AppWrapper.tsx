import React, { PropsWithChildren } from 'react';
import { ThemeProvider } from '@shopify/restyle';
import { StatusBar, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import theme from '@/infrastructure/theme';
import { EnvironmentBanner } from './EnvironmentBanner';

const STATUS_BAR_HEIGHT: number = StatusBar.currentHeight
  ? StatusBar.currentHeight
  : 0;

interface Props extends PropsWithChildren {}

const AppWrapper = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="dark-content" animated translucent />
      <SafeAreaView style={styles.container} testID="test_safe_app_wrapper">
        <EnvironmentBanner />
        {children}
      </SafeAreaView>
    </ThemeProvider>
  );
};

export { AppWrapper };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: STATUS_BAR_HEIGHT,
  },
});
