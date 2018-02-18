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
        if (obj.next && obj.next !== '0') {
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
            if(res === null) return {}
            return {
                first: null,
                next: res,
                operation: null,
            };
        } else {
            return {};
        }
    }

    if (buttonName === '±') {
        if (obj.next) {
            return { next: (-1 * parseFloat(obj.next)).toString() };
        }
        if (obj.first) {
            return { total: (-1 * parseFloat(obj.total)).toString() };
        }
        return {}
    }

    if (buttonName === '.') {
        if (obj.next && obj.next.indexOf('.') === -1) {
            return { next: obj.next + '.'}
        } else if(!obj.next) {
            return { next: '0.'}
        }
        return {}
    }

    if (obj.operation) {
        if (obj.first && obj.next) {
            res = operate(obj.first, obj.next, obj.operation);
            if(res === null)  return {}
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

    return {
        first: obj.next,
        next: null,
        operation: buttonName,
    };
}