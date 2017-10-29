export function debounce(
  func: Function, 
  waitMilliseconds = 50, 
  isImmediate = false,
): typeof func {
  let timeoutId: number | undefined;

  return function(this: any, ...args: any[]) {
    const context = this;

    const doLater = function() {
      timeoutId = undefined;
      if (!isImmediate) {
        func.apply(context, args);
      }
    }

    const shouldCallNow = isImmediate && timeoutId === undefined;

    if (timeoutId !== undefined) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(doLater, waitMilliseconds);

    if (shouldCallNow) {
      func.apply(context, args);
    }
  }
}