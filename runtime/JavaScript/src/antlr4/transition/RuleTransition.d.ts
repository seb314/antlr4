import {ATNState} from "../state/index.js";
import { Transition } from "./Transition.js";

export declare class RuleTransition extends Transition {
    constructor(ruleStart: ATNState, ruleIndex: any, precedence: any, followState: any);
    ruleIndex: any;
    precedence: any;
    followState: any;
    serializationType: number;
    matches(symbol: any, minVocabSymbol: any, maxVocabSymbol: any): boolean;
}
