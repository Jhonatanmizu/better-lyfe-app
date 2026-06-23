import {ExampleService} from '@/services';

describe('ExampleService', () => {
  it('should return example data', () => {
    const data = ExampleService.getData();
    expect(data).toBe('example data');
  });
});
