import {Interval} from "./Interval.js";

export declare class IntervalSet {

    isNil: boolean;
    size: number;
    minElement: number;
    maxElement: number;
    intervals: Interval[];

    contains(i: number): boolean;
    complement(start: number, stop: number): IntervalSet;
    addSet(other: IntervalSet): IntervalSet;
    addRange(l: number, h: number): void;
    toString(literalNames?: (string | null)[], symbolicNames?: string[], elemsAreChar?: boolean): string;
}
