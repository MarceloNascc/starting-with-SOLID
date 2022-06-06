export default interface EventHandler {
  addEventListnerToClass(className: string, event: string, fn: Function): void;
}
