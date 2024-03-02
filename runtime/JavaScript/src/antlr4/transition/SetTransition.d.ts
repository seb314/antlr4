import {ATNState} from "../state/index.js";
import {IntervalSet} from "../misc/IntervalSet.js";
import {Transition} from "./Transition.js";

export declare class SetTransition extends Transition {
    constructor(target: ATNState, set: IntervalSet);
    serializationType: number;
    matches(symbol: any, minVocabSymbol: any, maxVocabSymbol: any): any;
    toString(): any;
}
