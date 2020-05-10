export declare const sleep: (ms: number) => Promise<void>;
export declare type pipeableFunc = () => Promise<any>;
export declare const asyncPipe: (...funcs: pipeableFunc[]) => pipeableFunc;
