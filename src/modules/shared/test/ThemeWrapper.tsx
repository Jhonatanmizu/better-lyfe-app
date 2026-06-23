import React, {ReactElement, ReactNode} from 'react';
import {ThemeProvider} from '@shopify/restyle';
import {render, RenderOptions} from '@testing-library/react-native';
import theme from '@/infrastructure/theme';

interface ThemeWrapperProps {
  children: ReactNode;
}

/**
 * A wrapper component that provides the Restyle ThemeProvider for tests
 */
export const ThemeWrapper = ({children}: ThemeWrapperProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

/**
 * Custom render function that wraps the component with ThemeProvider
 * Use this helper when testing components that use Restyle's theme
 */
export const renderWithTheme = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => {
  return render(ui, {
    wrapper: ThemeWrapper,
    ...options,
  });
};

/**
 * Re-export everything from testing-library
 */
export * from '@testing-library/react-native';
export {theme};
