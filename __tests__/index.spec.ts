import { debounce } from '../src/index';

test('sanity check', () => {
  expect(!true).toBe(false);
});

test('it properly debounces function', () =>{
  const func = jest.fn();
  const debouncedFunction = debounce(func, 100, false);

  debouncedFunction();
  expect(func).not.toBeCalled();

  jest.runTimersToTime(50);
  expect(func).not.toBeCalled();

  jest.runTimersToTime(100);
  expect(func).toBeCalled();
  expect(func.mock.calls.length).toBe(1);
});

test('it properly debounces function with isImmediate set to true ', () =>{
  jest.useFakeTimers();

  const func = jest.fn();
  const debouncedFunction = debounce(func, 100, true);

  debouncedFunction();
  expect(func).toBeCalled();
  expect(func.mock.calls.length).toBe(1);

  jest.runTimersToTime(50);
  expect(func.mock.calls.length).toBe(1);

  jest.runTimersToTime(100);
  expect(func.mock.calls.length).toBe(1);
});