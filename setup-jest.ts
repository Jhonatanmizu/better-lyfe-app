import '@testing-library/react-native';
import {createMMKV} from 'react-native-mmkv';

// Reset MMKV storage between tests
beforeEach(() => {
  const mmkv = createMMKV();
  mmkv.clearAll();
});
