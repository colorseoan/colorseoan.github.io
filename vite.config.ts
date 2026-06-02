import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const base =
  repositoryName && repositoryName !== "colorseoan.github.io"
    ? `/${repositoryName}/`
    : "/";

export default defineConfig({
  base,
  plugins: [
    TanStackRouterVite({ target: "react" }),
    react(),
    tailwindcss(),
    tsConfigPaths(),
  ],
});
