const mockStore: Record<string, string> = {};

class MMKV {
  set(key: string, value: string) {
    mockStore[key] = value;
  }

  getString(key: string) {
    return mockStore[key];
  }

  remove(key: string) {
    delete mockStore[key];
  }

  clearAll() {
    Object.keys(mockStore).forEach(key => delete mockStore[key]);
  }

  getAllKeys() {
    return Object.keys(mockStore);
  }
}

export const createMMKV = () => new MMKV();
