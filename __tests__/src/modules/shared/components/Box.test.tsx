import React from 'react';
import {Box} from '@shared/components';
import {render, screen} from '@testing-library/react-native';
import {ThemeWrapper} from '@shared/test';

describe('<Box />', () => {
  it('should render Box component', () => {
    render(
      <ThemeWrapper>
        <Box testID="box" />
      </ThemeWrapper>,
    );
    const box = screen.getByTestId('box');
    expect(box).toBeTruthy();
  });

  it('should accept children', () => {
    render(
      <Box testID="box">
        <Box testID="child" />
      </Box>,
    );
    const box = screen.getByTestId('box');
    const child = screen.getByTestId('child');
    expect(box).toContainElement(child);
  });
});
