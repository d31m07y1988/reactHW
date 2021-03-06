module.exports = function cloneDR(o) {
    const gdcc = "__getDeepCircularCopy__";
    if (o !== Object(o)) {
        return o; // primitive value
    }

    var set = gdcc in o,
        cache = o[gdcc],
        result;
    if (set && typeof cache == "function") {
        return cache();
    }
    // else
    o[gdcc] = function() { return result; }; // overwrite
    if (o instanceof Array) {
        result = [];
        for (var i=0; i<o.length; i++) {
            result[i] = cloneDR(o[i]);
        }
    } else {
        result = {};
        for (var prop in o)
            if (prop != gdcc)
                result[prop] = cloneDR(o[prop]);
            else if (set)
                result[prop] = cloneDR(cache);
    }
    if (set) {
        o[gdcc] = cache; // reset
    } else {
        delete o[gdcc]; // unset again
    }
    return result;
}