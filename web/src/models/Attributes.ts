export class Attributes<T> {
  constructor(private data: T) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update: T): void {
    Object.assign(this.data, update);
  }
}

/* const attrs = new Attributes<UserProps>(
    { id: 5, name: "Desy", age: 23}
);

const name = attrs.get('name');
 */

