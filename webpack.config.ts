import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import path from "path";
import { BuildEnv, BuildMode, BuildPaths } from "./config/build/types/config";

export default (env: BuildEnv) => {
    const mode: BuildMode = env.mode || "development";
    const isDev = mode === "development";

    const PORT = env.port || 3000;

    const paths: BuildPaths = {
        entry: path.resolve(__dirname, "src", "index.tsx"),
        build: path.resolve(__dirname, "build"),
        html: path.resolve(__dirname, "public", "index.html")
    };

    const config = buildWebpackConfig({ mode, paths, isDev, port: PORT });

    return config;
};
