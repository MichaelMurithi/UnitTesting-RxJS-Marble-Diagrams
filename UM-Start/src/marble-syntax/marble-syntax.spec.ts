import { cold } from 'jasmine-marbles';
import { NEVER, EMPTY } from 'rxjs';

/**
 * EMPTY : observables with no items but terminates normally represented by (|)
 * NEVER : emits no items and does not terminate, represented by (-) or (----)

*/

describe('Marble Syntax', () => {
  describe('EMPTY', () => {
    it('emits no items but terminates normally', () => {
      const inputs = EMPTY;
      const results = cold('|');

      expect(inputs).toBeObservable(results);
    });
  });

  describe('NEVER', () => {
    it('emits no items and does not terminate', () => {
      const input = NEVER;
      const results = cold('-');

      expect(input).toBeObservable(results);
    });
  });
});
