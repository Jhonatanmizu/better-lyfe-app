import {
  setStorage,
  getStorageValue,
  removeStorage,
  clearStorage,
  getAllKeys,
  getAllValues,
} from '@shared/storage/mmkv';

describe('MMKV storage utils', () => {
  beforeEach(() => {
    clearStorage();
  });

  it('should set and get a string value', () => {
    setStorage('key1', 'value1');
    const result = getStorageValue<string>('key1');
    expect(result).toBe('value1');
  });

  it('should return null for non-existing key', () => {
    const result = getStorageValue('non-existent');
    expect(result).toBeNull();
  });

  it('should delete a key', () => {
    setStorage('key2', 'value2');
    removeStorage('key2');
    const result = getStorageValue('key2');
    expect(result).toBeNull();
  });

  it('should clear all keys', () => {
    setStorage('a', 1);
    setStorage('b', 2);
    clearStorage();
    expect(getAllKeys()).toEqual([]);
  });

  it('should return all keys', () => {
    setStorage('x', 10);
    setStorage('y', 20);
    const keys = getAllKeys();
    expect(keys).toEqual(expect.arrayContaining(['x', 'y']));
  });

  it('should return all values', () => {
    setStorage('x', 10);
    setStorage('y', 20);
    const values = getAllValues<number>();
    expect(values).toEqual(expect.arrayContaining([10, 20]));
  });

  it('should return null for non-existing key when getting all values', () => {
    setStorage('x', 10);
    setStorage('y', null);
    const values = getAllValues<number>();
    expect(values).toEqual([10]);
  });
});
