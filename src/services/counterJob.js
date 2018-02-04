import LongLongJob from './LongLongJob';
import { repeat } from 'long-long-job';
import timeout from 'timeout-then';

export default new LongLongJob('counter', [
  value => timeout(500).then(() => repeat(value + 1)),
]);
