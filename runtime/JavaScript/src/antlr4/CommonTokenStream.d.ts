import {Lexer} from "./Lexer.js";
import {BufferedTokenStream} from "./BufferedTokenStream.js";

export declare class CommonTokenStream extends BufferedTokenStream {
    // properties
    tokens: string[];
    // methods
    constructor(lexer: Lexer);
    constructor(lexer: Lexer, channel: number);
    fill(): void;
}
