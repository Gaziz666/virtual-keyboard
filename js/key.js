/* eslint-disable import/extensions */
import create from './utils/create.js';

export default class Key {
  constructor({ small, shift, code }) {
    this.small = small,
    this. shift = shift,
    this.code = code,
    this.isFnKey = Boolean(/Tab|Ctr|Shift|Alt|arr|Enter|Back|Del|Caps|Win/);

    if (shift && shift.match(/[^a-zA_Zа-яА-ЯёЁ0-9]/)) {
      this.sub = create('div', 'sub', this.shift);
    } else {
      this.sub = create('div', 'sub', '');
    };

    this.letter = create('div', 'letter', '');
  }
}

