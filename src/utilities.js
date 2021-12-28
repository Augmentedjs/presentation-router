import { extend, result, isFunction, isRegExp, isString } from "next-core-utilities";

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
