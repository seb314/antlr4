import {ATNState} from "../state/index.js";
import {Transition} from "./Transition.js";

export declare class AtomTransition extends Transition {
    constructor(target: ATNState, label: any);
    label_: any;
    serializationType: number;
    makeLabel(): any;
    matches(symbol: any, minVocabSymbol: any, maxVocabSymbol: any): boolean;
    toString(): any;
}
