import React from 'react';
import {Text} from '@shared/components';
import {render, screen} from '@testing-library/react-native';
import {ThemeWrapper} from '@shared/test';

describe('<ThemeWrapper />', () => {
  it('should render the children correctly', () => {
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
