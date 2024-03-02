import {Transition} from "./Transition.js";
import {ATNState} from "../index.js";

export declare class ActionTransition extends Transition {
    constructor(target: ATNState, ruleIndex: any, actionIndex: any, isCtxDependent: any);
    serializationType: number;
    ruleIndex: any;
    actionIndex: any;
    isCtxDependent: any;
    matches(symbol: any, minVocabSymbol: any, maxVocabSymbol: any): boolean;
}
