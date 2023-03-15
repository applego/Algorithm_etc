"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nextId3 = exports.nextId2 = exports.nextId = void 0;
function nextId(ids) {
    for (var i = 0; i < ids.length; i++) {
        if (ids.indexOf(i) === -1)
            return i;
    }
    return ids.length;
}
exports.nextId = nextId;
//BP
function nextId2(ids) {
    var i = 0;
    while (ids.includes(i)) {
        i++;
    }
    return i;
}
exports.nextId2 = nextId2;
//BP2
function nextId3(ids) {
    var idsSet = new Set(ids);
    var i = 0;
    while (idsSet.has(i)) {
        i++;
    }
    return i;
}
exports.nextId3 = nextId3;
//# sourceMappingURL=8 kyu Smallest unused ID.js.map