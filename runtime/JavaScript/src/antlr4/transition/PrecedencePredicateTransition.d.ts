import {AbstractPredicateTransition} from "../atn/AbstractPredicateTransition.js";
import {PrecedencePredicate} from "../atn/PrecedencePredicate.js";
import {ATNState} from "../state/index.js";

export declare class PrecedencePredicateTransition extends AbstractPredicateTransition {
    constructor(target: ATNState, precedence: any);
    serializationType: number;
    precedence: any;
    matches(symbol: any, minVocabSymbol: any, maxVocabSymbol: any): boolean;
    getPredicate(): PrecedencePredicate;
}
