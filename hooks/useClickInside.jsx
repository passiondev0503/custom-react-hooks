import {
  useEffect,
  useRef,
} from "../../../../../Users/scejjapu/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react";

/**
 * @function useClickInside
 * @param {any} elementRef
 * @param {any} callback
 * @returns {any}
 * @description When you want to call a function when clicked inside the element Ex: Modal PopUp
 * Pass the callback with useCallBack in your function since it's functionality always remains the same for better performance.
 * @author Sarat Chandra Ejjapureddi
 */
export default function useClickInside(elementRef, callback) {
  useEffect(() => {
    const handleClickInside = (event) => {
      event.preventDefault();
      if (
        elementRef &&
        elementRef.current &&
        elementRef.current.contains(event.target)
      ) {
        // Call Callback only if event happens inside element or descendant elements
        callback();
      }
      return;
    };
    document.addEventListener("click", handleClickInside, true);
    return () => {
      document.removeEventListener("click", handleClickInside, true);
    };
  }, [elementRef, callback]);
}

/**
 * @function useClickInside
 * @param {any} elementRef
 * @param {any} callback
 * @returns {any}
 * @description When you want to call a function when clicked inside the element Ex: Modal PopUp
 * Use this function rather than above when you are sure you won't be changing the callback.
 * You then don't need to pass the callback with useCallback for performance.
 */
export function useClickInside2(elementRef, callback) {
  const callbackRef = useRef(callback);
  useEffect(() => {
    const handleClickInside = (event) => {
      event.preventDefault();
      if (
        elementRef &&
        elementRef.current &&
        elementRef.current.contains(event.target)
      ) {
        // Call Callback only if event happens inside element or descendant elements
        callbackRef.current();
      }
      return;
    };
    document.addEventListener("click", handleClickInside, true);
    return () => {
      document.removeEventListener("click", handleClickInside, true);
    };
  }, [elementRef, callback]);
}
