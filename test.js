import test from 'ava';
import fn from './';

test('Must return an array of animals', t => {
    t.is(Array.isArray(fn), true);
});
