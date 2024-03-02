import {ATNState} from "../state/index.js";
import {Transition} from "./Transition.js";

export declare class RangeTransition extends Transition {
    constructor(target: ATNState, start: any, stop: any);
    serializationType: number;
    start: any;
    stop: any;
    makeLabel(): any;
    matches(symbol: any, minVocabSymbol: any, maxVocabSymbol: any): boolean;
}
