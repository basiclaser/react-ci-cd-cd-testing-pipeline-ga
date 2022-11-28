
import {add, minus} from './utils';

describe('add', () => {
    it('adds two numbers', () => {
        expect(add(1, 2)).toBe(3);
    })
})

describe('minus', () => {
    it('minus two numbers', () => {
        expect(minus(2, 1)).toBe(1);
    })
})