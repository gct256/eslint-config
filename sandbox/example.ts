// console は 警告
console.info();
console.log();
console.table();
console.dir();
console.time();
console.debug();
console.warn();
console.error();
type TypeDecl = {
  foo: number;
  bar: string;
};
const FOO: TypeDecl = {
  foo: 0,
  bar: ""
};
function bar(baz: number) {
  baz = 42;
  console.debug(baz);
}
bar(42);
function baz(): void {
  console.debug("baz");
}
baz();
const qux = (quux: number): void => {
  console.debug(quux);
};
qux(42);
export function exportFoo(bar: number, _baz: number): void {
  console.debug(42);
}
export default function exportBaz(qux: number): void {
  console.debug(qux);
}
const quuux: number[] = [1, 2, 3];
for (const x of quuux) {
  console.debug(x);
}
