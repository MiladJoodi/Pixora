import { FlatCompat } from "@eslint/eslintrc";
import { globalIgnores } from "eslint/config";
import { fileURLToPath } from "url";

const compat = new FlatCompat({
  baseDirectory: fileURLToPath(new URL(".", import.meta.url)),
});

export default [
  ...compat.extends("eslint-config-next/core-web-vitals", "eslint-config-next/typescript"),
  // Override default ignores.
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
];
