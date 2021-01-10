import { debounce } from "../src/index";

const FIXED_SYSTEM_TIME = "2020-01-12T00:00:00Z";

describe("debounce", () => {
  beforeEach(() => {
    jest.useFakeTimers("modern");
    jest.setSystemTime(Date.parse(FIXED_SYSTEM_TIME));
  });
  test("it properly debounces function", () => {
    const func = jest.fn();
    const debouncedFunction = debounce(func, 100);

    debouncedFunction();
    expect(func).not.toBeCalled();

    jest.advanceTimersByTime(50);
    expect(func).not.toBeCalled();

    jest.advanceTimersByTime(100);
    expect(func).toBeCalled();
    expect(func.mock.calls.length).toBe(1);
  });

  test("it properly debounces function with isImmediate set to true ", () => {
    const func = jest.fn();
    const debouncedFunction = debounce(func, 100, { isImmediate: true });

    debouncedFunction();
    expect(func).toBeCalled();
    expect(func.mock.calls.length).toBe(1);

    jest.advanceTimersByTime(50);
    expect(func.mock.calls.length).toBe(1);

    jest.advanceTimersByTime(100);
    expect(func.mock.calls.length).toBe(1);

    // it should be possible to call it second time after timeout passes
    debouncedFunction();
    expect(func.mock.calls.length).toBe(2);
  });

  test("it cancels debounced function ", () => {
    const func = jest.fn();
    const debouncedFunction = debounce(func, 100);

    debouncedFunction();
    expect(func).not.toBeCalled();

    jest.advanceTimersByTime(50);
    expect(func).not.toBeCalled();

    debouncedFunction.cancel();

    jest.advanceTimersByTime(100);
    expect(func).not.toBeCalled();
  });

  describe("maxWait", () => {
    test("it calls func with maxWait >= wait correctly", () => {
      const func = jest.fn();
      const debouncedFunction = debounce(func, 100, { maxWait: 150 });
      debouncedFunction();

      jest.advanceTimersByTime(50);
      expect(func).not.toBeCalled();
      debouncedFunction();

      // function should be called because of maxWait
      jest.advanceTimersByTime(100);
      expect(func).toBeCalled();
    });

    test("it calls func with maxWait < wait correctly", () => {
      const func = jest.fn();
      const debouncedFunction = debounce(func, 100, { maxWait: 50 });
      debouncedFunction();

      // function should be called because of maxWait
      jest.advanceTimersByTime(50);
      expect(func).toBeCalled();

      jest.advanceTimersByTime(50);
      expect(func.mock.calls.length).toBe(1);

      debouncedFunction();
      jest.advanceTimersByTime(100);
      expect(func.mock.calls.length).toBe(2);
    });

    test("it calls in the next tick with maxWait === 0", () => {
      const func = jest.fn();
      const debouncedFunction = debounce(func, 100, { maxWait: 0 });
      debouncedFunction();

      jest.advanceTimersByTime(1);
      expect(func).toBeCalled();
    });
  });
});
