import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";

const dotEnvKeys = ["SERVICE_ID", "TEMPLATE_ID", "PUBLIC_KEY"];

// https://vitejs.dev/config/
export default defineConfig((configEnv) => {
  const env = loadEnv(configEnv.mode, process.cwd(), "");
  const processEnv = {};
  dotEnvKeys.forEach((key) => (processEnv[key] = env[key]));

  return {
    define: {
      "process.env": processEnv,
    },
    plugins: [react()],
  };
});
