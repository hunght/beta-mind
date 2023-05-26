import { SortedUniqSeconds } from './SortedUniqSeconds';
const seconds_batches = [
    [1, 2, 3, 4],
    [1, 2, 3, 4, 5, 6, 7],
    [30, 31, 32, 33],
    [1, 2, 3, 32, 33, 34, 35, 36, 37, 38, 39, 40],
];

const sorted_uniq_seconds = [1, 2, 3, 4, 5, 6, 7, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40];

describe('SortedUniqSeconds', () => {
    it('should resolve ', async () => {
        expect(SortedUniqSeconds(seconds_batches)).toEqual(sorted_uniq_seconds);
    });
});
