import extend from "../node_modules/next-core-utilities/src/extend.js";
import result from "../node_modules/next-core-utilities/src/result.js";
import isFunction from "../node_modules/next-core-utilities/src/isFunction.js";
import isRegExp from "../node_modules/next-core-utilities/src/isRegExp.js";
import isString from "../node_modules/next-core-utilities/src/isString.js";

/* brought over from presentation DOM */
const selector = (query) => {
  if (query) {
    return isString(query) ? document.querySelector(query) : query;
  }
  return null;
};

const addClass = (el, cls) => {
  const myEl = selector(el);
  if (myEl) {
    myEl.classList.add(cls);
    //console.debug(`addClass ${cls} to ${el}`);
  }
  return myEl;
};

const removeClass = (el, cls) => {
  const myEl = selector(el);
  if (myEl) {
    myEl.classList.remove(cls);
    //console.debug(`removeClass ${cls} to ${el}`);
  }
  return myEl;
};

export { addClass, removeClass, result, isFunction, extend, isRegExp };
