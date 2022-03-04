import { hot, cold } from 'jasmine-marbles';
import { switchMap } from 'rxjs/operators';

describe('hot', () => {

  it('should test subscription on hot observable', () => {
    const input = hot('-a-^b---c-|');
    const subscription = '^------!';
    expect(input).toBeObservable(cold('-b---c-|'));
    expect(input).toHaveSubscriptions(subscription);
  });

  it('should test subscription on hot observables that never completes', () => {
    const provided = hot('-a-^(bc)--');
    const subscription = '^--';

    expect(provided).toBeObservable(cold('-(bc)--'));
    expect(provided).toHaveSubscriptions(subscription);
  });

  it('can convert names to uppercase', () => {
    const names = hot('--vladmir--putin--zelensky--joe--biden--');
    const inputs = convertToUpperCase(names);
    const subscription = '^--';

    expect(inputs).toBeObservable(cold('--VLADMIR--PUTIN--ZELENSKY--JOE--BIDEN--'));
    expect(names).toHaveSubscriptions(subscription);
  })
});

function convertToUpperCase($alphabets) {
  return $alphabets.pipe(switchMap((s: string) => s.toUpperCase()));
}

