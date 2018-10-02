export class It<T> {
  public static is<T>(element: T): It<T> {
    return new It(element);
  }

  constructor(readonly element: T) { }

  public get(): T {
    return this.element;
  }

  public map<U>(func: (T) => U): It<U> {
    return new It(func.call(undefined, this.element));
  }
}
