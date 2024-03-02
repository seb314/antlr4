import {ATNState} from "../state/index.js";
import {Transition} from "./Transition.js";

export declare class EpsilonTransition extends Transition {
    constructor(target: ATNState, outermostPrecedenceReturn: any);
    serializationType: number;
    outermostPrecedenceReturn: any;
    matches(symbol: any, minVocabSymbol: any, maxVocabSymbol: any): boolean;
}
