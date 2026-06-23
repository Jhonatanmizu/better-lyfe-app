/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: import explicitly to use the types shipped with jest.
import {describe, it} from '@jest/globals';

import {render} from '@testing-library/react-native';

describe('<App />', () => {
  it('renders correctly', () => {
    render(<App />);
  });
});
