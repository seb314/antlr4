import {ATNState} from "../state/ATNState.js";

export declare class Transition {
    constructor(target: ATNState);
    target: ATNState;
    isEpsilon: boolean;
    label: any;

    // precice values of static fields taken from
    // https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/antlr4/transition/Transition.d.ts
    // (not checked against actual implementation ground truth)
    static readonly EPSILON: 1;
    static readonly RANGE: 2;
    static readonly RULE: 3;
    static readonly PREDICATE: 4;
    static readonly ATOM: 5;
    static readonly ACTION: 6;
    static readonly SET: 7;
    static readonly NOT_SET: 8;
    static readonly WILDCARD: 9;
    static readonly PRECEDENCE: 10;
    static readonly serializationNames: [
        "INVALID",
        "EPSILON",
        "RANGE",
        "RULE",
        "PREDICATE",
        "ATOM",
        "ACTION",
        "SET",
        "NOT_SET",
        "WILDCARD",
        "PRECEDENCE",
    ];
    static readonly serializationTypes: {
        EpsilonTransition: typeof Transition.EPSILON;
        RangeTransition: typeof Transition.RANGE;
        RuleTransition: typeof Transition.RULE;
        PredicateTransition: typeof Transition.PREDICATE;
        AtomTransition: typeof Transition.ATOM;
        ActionTransition: typeof Transition.ACTION;
        SetTransition: typeof Transition.SET;
        NotSetTransition: typeof Transition.NOT_SET;
        WildcardTransition: typeof Transition.WILDCARD;
        PrecedencePredicateTransition: typeof Transition.PRECEDENCE;
    };
}
