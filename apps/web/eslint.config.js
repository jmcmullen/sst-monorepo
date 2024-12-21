import baseConfig, { restrictEnvAccess } from "@sessions/eslint-config/base";
import nextjsConfig from "@sessions/eslint-config/nextjs";
import reactConfig from "@sessions/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [".next/**"],
  },
  ...baseConfig,
  ...reactConfig,
  ...nextjsConfig,
  ...restrictEnvAccess,
];
