import "@testing-library/jest-dom";

beforeAll(() => {
  globalThis.fetch = jest.fn();
  console.error = jest.fn();
  console.warn = jest.fn();
  console.log = jest.fn();
});

afterEach(() => {
  (fetch as jest.Mock).mockReset();
  jest.clearAllMocks();
  jest.resetModules();
  jest.restoreAllMocks();
});
