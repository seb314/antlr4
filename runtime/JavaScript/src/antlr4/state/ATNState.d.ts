import {ATN} from "../atn/index.js";
import {Transition} from "../transition/Transition.js";

export declare class ATNState {
    atn: ATN;
    stateNumber: number;
    stateType: number | null;
    ruleIndex: number; // comment in js file:  // = 0; at runtime, we don't have Rule objects
    transitions: Transition[];
}
