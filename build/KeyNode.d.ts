export declare const ROOT_KEYS: unique symbol;
declare const CHILDREN: unique symbol;
declare const DEPTH: unique symbol;
declare const PARENTS: unique symbol;
export default abstract class KeyNode<Tself extends KeyNode = any> extends String {
    readonly IS_ROOT_KEY: boolean;
    readonly PARENT: Tself;
    protected readonly [ROOT_KEYS]?: Map<string, Tself>;
    private readonly [CHILDREN];
    private [DEPTH];
    private [PARENTS];
    constructor(key: string, parent: Tself | Map<string, Tself>);
    readonly isTerminalKey: boolean;
    readonly parent: Tself;
    readonly [Symbol.toStringTag]: string;
    readonly numChildren: number;
    readonly depth: number;
    hasChild(childKey: string): boolean;
    getChild(childKey: string): Tself;
    hasSibling(siblingKey: string): boolean;
    getSibling(siblingKey: string): Tself;
    children(): IterableIterator<Tself>;
    parents(): IterableIterator<Tself>;
    siblings(): IterableIterator<Tself>;
}
export {};
