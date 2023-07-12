import * as fncSituation from './fnc-situation.js';
import { write, append } from '../utils/file.js'
import assert from 'assert';

let logPath = 'test.log';

describe('Sum from two numbers', () => {
    it('1 + 2 to equal 3', function () {
        assert.equal(fncSituation.sum(1, 2), 3);
        write(logPath, '1 + 2 to equal 3')
    });

    it('5 + 5 to equal 10', function () {
        assert.equal(fncSituation.sum(5, 5), 10);
        append(logPath, '5 + 5 to equal 10')
    });
});

describe('The same text', () => {
    it('A to equal A', function () {
        assert.equal('A', 'A');
        append(logPath, 'A to equal A')
    });

    it('A not to equal a', function () {
        assert.notEqual('A', 'a');
        append(logPath, 'A not to equal a')
    });

    it('A not to equal B', function () {
        assert.notEqual('A', 'B');
        append(logPath, 'A not to equal B')
    });
});

