import { cold } from 'jasmine-marbles';
import { from, EMPTY } from 'rxjs';

describe('COLD', () => {
  it('can search for a name', () => {
    const input = search('e');
    const expected = cold('(e|)');
    expect(input).toBeObservable(expected);
  });

  it('can return empty when no value found', () => {
    const input = search('B');
    const expected = cold('|');

    expect(input).toBeObservable(expected);
  });

  it('can return all vowels from alphabet list', () => {
    const input = search('', 'v');
    const expected = cold('(aeiou|)');

    expect(input).toBeObservable(expected);
  });
});

const letters = ['a', 'e', 'i', 'o', 'u', 'b', 'c', 'd'];


function search(key, refference = 'l') {
  if (refference === 'v') {
    const vowels = letters.filter(letter => ['a', 'e', 'i', 'o', 'u'].indexOf(letter) > -1 ? true : false);
    return from(vowels);
  }
  return letters.indexOf(key) > -1 ? from(`${key}`) : EMPTY;
}
