import LongLongJob from './LongLongJob';
import { repeat } from 'long-long-job';
import timeout from 'timeout-then';

export default new LongLongJob('counter', [
  async value => {
    await timeout(500);
    return repeat(value + 1);
  },
]);
