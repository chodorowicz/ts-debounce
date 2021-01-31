/**
 * A function that emits a side effect.
 */
export type Procedure = (...args: any[]) => any;

export type Options<TT> = {
  isImmediate?: boolean;
  maxWait?: number;
  callback?: (data: TT) => void
};

export interface DebouncedFunction<F extends Procedure> {
  (this: ThisParameterType<F>, ...args: Parameters<F>): void;
  cancel: () => void;
}

export function debounce<F extends Procedure>(
  func: F,
  waitMilliseconds = 50,
  options: Options<ReturnType<F>> = {}
): DebouncedFunction<F> {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;
  const isImmediate = options.isImmediate ?? false;
  const callback = options.callback ?? false;
  const maxWait = options.maxWait;
  let lastInvokeTime = Date.now();

  function nextInvokeTimeout() {
    if (maxWait !== undefined) {
      const timeSinceLastInvocation = Date.now() - lastInvokeTime;

      if (timeSinceLastInvocation + waitMilliseconds >= maxWait) {
        return maxWait - timeSinceLastInvocation;
      }
    }

    return waitMilliseconds;
  }

  const debouncedFunction = function (
    this: ThisParameterType<F>,
    ...args: Parameters<F>
  ) {
    const context = this;

    const invokeFunction = function () {
      timeoutId = undefined;
      lastInvokeTime = Date.now();
      if (!isImmediate) {
        if (callback) {
          callback(func.apply(context, args));
          return
        }
        func.apply(context, args);
      }
    };

    const shouldCallNow = isImmediate && timeoutId === undefined;

    if (timeoutId !== undefined) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(invokeFunction, nextInvokeTimeout());

    if (shouldCallNow) {
      if (callback) {
        callback(func.apply(context, args));
        return
      }
      func.apply(context, args);
    }
  };

  debouncedFunction.cancel = function () {
    if (timeoutId !== undefined) {
      clearTimeout(timeoutId);
    }
  };

  return debouncedFunction;
}
