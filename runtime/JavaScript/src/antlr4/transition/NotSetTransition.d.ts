import {ATNState} from "../state/index.js";
import { SetTransition } from "./SetTransition.js";

export declare class NotSetTransition extends SetTransition {
    constructor(target: ATNState, set: any);
    matches(symbol: any, minVocabSymbol: any, maxVocabSymbol: any): boolean;
    toString(): string;
}
