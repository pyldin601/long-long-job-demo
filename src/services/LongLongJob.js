// @flow
import { longLongJob } from 'long-long-job';

const localStateService = {
  async hasState(id: string) {
    return localStorage.getItem(id) !== undefined;
  },
  async getState(id: string) {
    return JSON.parse(localStorage.getItem(id));
  },
  async setState(id: string, state: any) {
    localStorage.setItem(id, JSON.stringify(state));
  },
  async clean(id: string) {
    localStorage.removeItem(id);
  },
};

export default longLongJob(localStateService);
