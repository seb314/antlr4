import {ATNState} from "../state/index.js";
import { Transition } from "./Transition.js";

export declare class WildcardTransition extends Transition {
    constructor(target: ATNState);
    serializationType: number;
    matches(symbol: any, minVocabSymbol: any, maxVocabSymbol: any): boolean;
}
