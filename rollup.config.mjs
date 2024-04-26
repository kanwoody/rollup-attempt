import typescript from "@rollup/plugin-typescript";
export default {
  input: ["a/test.ts", "b/test.ts"],
  output: {
    dir: "transpiled-code",
    // file: "clasp.js",
    format: "cjs",
  },
  plugins: [typescript()],
};
