import {ATNState} from "../state/ATNState.js";
import {Transition} from "../transition/Transition.js";

export declare class AbstractPredicateTransition extends Transition {
    constructor(target: ATNState);
}
