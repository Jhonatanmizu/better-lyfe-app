import {useBearStore} from '@/store';

describe('useBearStore', () => {
  beforeEach(() => {
    useBearStore.setState({bears: 0});
  });

  it('should initialize with 0 bears', () => {
    const bears = useBearStore.getState().bears;
    expect(bears).toBe(0);
  });

  it('should increase the number of bears', () => {
    useBearStore.getState().increase(3);
    expect(useBearStore.getState().bears).toBe(3);

    useBearStore.getState().increase(2);
    expect(useBearStore.getState().bears).toBe(5);
  });
});
