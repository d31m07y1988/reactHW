import {operate} from "./operate";

export function answer(obj, buttonName) {
    if (buttonName === 'c') {
        error.innerHTML = '';
        return {
            first: null,
            next: null,
            operation: null,
        };
    }

    if (!!buttonName.match(/[0-9]+/)) {
        if (buttonName === '0' && obj.next === '0') {
            return {};
        }

        if (obj.operation && obj.first === null) {
            return {
                first: obj.next,
                next:buttonName
            }
        }
        if (obj.next) {
            return {
                next: obj.next + buttonName
            };
        }
        return {
            next: buttonName
        };
    }

    if (buttonName === '=') {
        if (obj.first && obj.next && obj.operation) {
            var res = operate(obj.first, obj.next, obj.operation);
            if(res === null) return {
                first: obj.first,
                next: obj.next,
                operation: obj.operation,
            }
            return {
                first: null,
                next: res,
                operation: null,
            };
        } else {
            return {};
        }
    }

    if (obj.operation) {
        if (obj.first && obj.next) {
            res = operate(obj.first, obj.next, obj.operation);
            if(res === null)  return {
                first: obj.first,
                next: obj.next,
                operation: obj.operation,
            }
            return {
                first: null,
                next: res,
                operation: buttonName,
            };
        }
        if(obj.next && obj.first === null) {
            return {
                first: obj.next,
                next: null,
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