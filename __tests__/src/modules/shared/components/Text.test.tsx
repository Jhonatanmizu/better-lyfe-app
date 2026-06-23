import React from 'react';
import {Text} from '@shared/components';
import {render, screen} from '@testing-library/react-native';
import {ThemeWrapper} from '@shared/test';

describe('<Text />', () => {
  it('should render Text component with the correct text inside', () => {
    const expectedText = 'Test Text';
    render(
      <ThemeWrapper>
        <Text>{expectedText}</Text>
      </ThemeWrapper>,
    );
    const expectedElement = screen.getByText(expectedText);
    expect(expectedElement).toBeTruthy();
  });
});
