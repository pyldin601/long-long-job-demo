import LongLongJob from './LongLongJob';
import { repeat, next } from 'long-long-job';
import timeout from 'timeout-then';

const job = new LongLongJob('fibonacci', [
  () => next({ fib: 1, prev: 0, n: 1 }),

  async ({ fib, prev, n }) => {
    job.emit('fib', fib, n);
    await timeout(1000);
    return repeat({ fib: fib + prev, prev: fib, n: n + 1 });
  },
]);

export default job;
