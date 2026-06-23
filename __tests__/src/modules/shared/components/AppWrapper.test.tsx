import React from 'react';
import { describe, it, expect } from '@jest/globals';
import { render, screen } from '@testing-library/react-native';
import { AppWrapper } from '@/modules/shared/components';
import { Text } from 'react-native';

describe('<AppWrapper />', () => {
  it('should render the safe app wrapper correctly', () => {
    render(<AppWrapper />);
    const appWrapper = screen.getByTestId('test_safe_app_wrapper');
    expect(appWrapper).toBeTruthy();
  });

  it('should render children correctly', () => {
    render(
      <AppWrapper>
        <Text>Test Child</Text>
      </AppWrapper>,
    );
    const childElement = screen.getByText('Test Child');
    expect(childElement).toBeTruthy();
  });

  it('should have the correct styles', () => {
    render(<AppWrapper />);
    const appWrapper = screen.getByTestId('test_safe_app_wrapper');
    expect(appWrapper.props.style).toEqual({
      flex: 1,
    });
  });

  it('should have the correct testID', () => {
    render(<AppWrapper />);
    const appWrapper = screen.getByTestId('test_safe_app_wrapper');
    expect(appWrapper.props.testID).toBe('test_safe_app_wrapper');
  });

  it('should not have a manual marginTop', () => {
    render(<AppWrapper />);
    const appWrapper = screen.getByTestId('test_safe_app_wrapper');
    expect(appWrapper.props.style.marginTop).toBeUndefined();
  });
});
