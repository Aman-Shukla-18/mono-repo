"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAPI = void 0;
const getAPI = (url, sCB, eCB) => fetch(url)
    .then((data) => {
    return data.json();
})
    .then((post) => {
    sCB(post);
})
    .catch(eCB);
exports.getAPI = getAPI;
