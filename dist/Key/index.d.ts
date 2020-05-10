import { pipeableFunc } from '../utils';
interface keys {
    left: pipeableFunc;
    f: pipeableFunc;
    s: pipeableFunc;
    a: pipeableFunc;
    right: pipeableFunc;
}
export declare const key: {
    press: keys;
    hold: keys;
    release: keys;
    wait: (ms: number) => () => Promise<void>;
    waitUntil: (cb: () => Promise<void>) => () => Promise<void>;
    breakIf: (cb: () => Promise<boolean>) => () => Promise<boolean>;
    runWhile: (cb: () => Promise<boolean>, runCounter?: number) => () => Promise<void>;
};
export {};
