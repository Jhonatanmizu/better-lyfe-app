import {renderHook, act} from '@testing-library/react-hooks';
import {useMMKVStorage} from '@/modules/shared/hooks';
import * as storage from '@shared/storage/mmkv';

jest.mock('@shared/storage/mmkv');

describe('useMMKVStorage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should initialize with default value', () => {
    (storage.getStorageValue as jest.Mock).mockReturnValue(null);
    const {result} = renderHook(() => useMMKVStorage('theme', 'light'));

    expect(result.current.value).toBe('light');
  });

  it('should load value from storage on mount', () => {
    (storage.getStorageValue as jest.Mock).mockReturnValue('dark');

    const {result} = renderHook(() => useMMKVStorage('theme'));

    expect(result.current.value).toBe('dark');
  });

  it('should update value and persist to storage', () => {
    const mockSet = jest.spyOn(storage, 'setStorage');

    const {result} = renderHook(() => useMMKVStorage('mode'));
    act(() => {
      result.current.setValue('night');
    });

    expect(result.current.value).toBe('night');
    expect(mockSet).toHaveBeenCalledWith('mode', 'night');
  });

  it('should remove value from storage', () => {
    const mockRemove = jest.spyOn(storage, 'removeStorage');

    const {result} = renderHook(() => useMMKVStorage('key'));
    act(() => {
      result.current.remove();
    });

    expect(result.current.value).toBe(null);
    expect(mockRemove).toHaveBeenCalledWith('key');
  });
});
