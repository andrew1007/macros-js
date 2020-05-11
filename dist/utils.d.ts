export declare const sleep: (ms: number) => Promise<void>;
export declare type pipeableFunc = () => Promise<any>;
/**
 * functional piping func
 * if you want to prematurely break out, use a func that returns false
 */
export declare const asyncPipe: (...funcs: pipeableFunc[]) => pipeableFunc;
