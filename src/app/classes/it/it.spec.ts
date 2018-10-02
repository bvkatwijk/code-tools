import { It } from './it';

describe('It', () => {
  describe('is', () => {
    it('creates object', () => {
      expect(It.is('something').get()).toBe('something');
    });
  })

  describe('.map', () => {
    it('applies function to inner element', () => {
      expect(It.is('this').map(it => 'that').get()).toBe('that');
    });
  });
});
