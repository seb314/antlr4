import {AbstractPredicateTransition} from "../atn/AbstractPredicateTransition.js";
import {Predicate} from "../atn/Predicate.js";
import {ATNState} from "../state/index.js";

export declare class PredicateTransition extends AbstractPredicateTransition {
    constructor(target: ATNState, ruleIndex: any, predIndex: any, isCtxDependent: any);
    serializationType: number;
    ruleIndex: any;
    predIndex: any;
    isCtxDependent: any;
    matches(symbol: any, minVocabSymbol: any, maxVocabSymbol: any): boolean;
    getPredicate(): Predicate;
}
