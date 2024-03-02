import {CharStream} from "./CharStream.js";

export declare class Token {

    static EOF: number;
    static MIN_USER_TOKEN_TYPE: number;

    tokenIndex: number;
    line: number;
    column: number;
    channel: number;
    text: string;
    type: number;
    start : number;
    stop: number;

    clone(): Token;
    cloneWithType(type: number): Token;
    getInputStream(): CharStream;
}
