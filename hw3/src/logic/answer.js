import isNumber from "./isNumber";
import {operate} from "./operate";

export function answer(obj, buttonName) {
    if (buttonName === 'c') {
        return {
            first: null,
            next: null,
            operation: null,
        };
    }

    if (isNumber(buttonName)) {
        if (buttonName === '0' && obj.next === '0') {
            return {};
        }

        if (obj.operation) {
            if (obj.next) {
                return { next: obj.next + buttonName };
            }
            return { next: buttonName };
        }
        if (obj.next && obj.next !== '0') {
            return {
                next: obj.next + buttonName,
                first: null,
            };
        }
        return {
            next: buttonName,
            first: null,
        };
    }

    if (buttonName === '=') {
        if (obj.next && obj.operation) {
            return {
                first: null,
                next: operate(obj.first, obj.next, obj.operation),
                operation: null,
            };
        } else {
            return {};
        }
    }

    if (obj.operation) {
        if (obj.first && obj.next) {
            return {
                first: null,
                next: operate(obj.first, obj.next, obj.operation),
                operation: buttonName,
            };
        }
    }

    if (!obj.next) {
        return { operation: buttonName };
    }

    return {
        first: obj.next,
        next: null,
        operation: buttonName,
    };
}