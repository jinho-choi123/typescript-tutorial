import {expect} from 'chai';
import currentTimestamp from '../src/utils/currentTimestamp';

describe('currentTimestamp test', () => {
    it('timestamp should match current timestamp', () => {
        expect(currentTimestamp()).to.equal(Date.now());
    })
})