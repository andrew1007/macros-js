export declare const press: any;
export declare const wait: (ms: number) => () => Promise<void>;
export declare const run: (...funcs: (() => Promise<any>)[]) => () => Promise<void>;
