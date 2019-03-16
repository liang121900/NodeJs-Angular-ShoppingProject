import { CcurrencyPipe } from './ccurrency.pipe';

describe('CcurrencyPipe', () => {
  it('create an instance', () => {
    const pipe = new CcurrencyPipe();
    expect(pipe).toBeTruthy();
  });
});
