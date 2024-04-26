import { a } from "../a/test";
const b = () => {
  const c = a();
  for (const [d, e] of c) {
    console.log(`${d} => ${e}`);
  }
}

b();