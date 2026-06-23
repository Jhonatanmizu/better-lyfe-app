import {useState, useEffect, useCallback} from 'react';
import {setStorage, getStorageValue, removeStorage} from '@shared/storage/mmkv';

export const useMMKVStorage = <T = any>(key: string, defaultValue?: T) => {
  const [value, setValue] = useState<T | null>(
    () => getStorageValue<T>(key) ?? defaultValue ?? null,
  );

  const updateValue = useCallback(
    (newValue: T) => {
      setStorage(key, newValue);
      setValue(newValue);
    },
    [key],
  );

  const deleteValue = useCallback(() => {
    removeStorage(key);
    setValue(null);
  }, [key]);

  useEffect(() => {
    const stored = getStorageValue<T>(key);
    if (stored !== null) {
      setValue(stored);
    }
  }, [key]);

  return {
    value,
    setValue: updateValue,
    remove: deleteValue,
  };
};
