export {};

declare global {
  interface Window {
    logState: Function;
    dispatch: Function;
  }
}
