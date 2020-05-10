import { pipeableFunc } from '../utils';
interface keys {
    left: pipeableFunc;
}
export declare const key: {
    press: keys;
    hold: keys;
    release: keys;
    wait: (ms: number) => () => Promise<void>;
    waitUntil: (cb: () => Promise<void>) => () => Promise<void>;
};
export {};
