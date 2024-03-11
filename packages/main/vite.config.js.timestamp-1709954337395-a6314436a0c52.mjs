// .electron-vendors.cache.json
var node = "20";

// packages/main/vite.config.js
import { join } from "node:path";
var __vite_injected_original_dirname = "C:\\Users\\bzrr\\dev\\sr-app\\packages\\main";
var PACKAGE_ROOT = __vite_injected_original_dirname;
var PROJECT_ROOT = join(PACKAGE_ROOT, "../..");
var config = {
  mode: process.env.MODE,
  root: PACKAGE_ROOT,
  envDir: PROJECT_ROOT,
  resolve: {
    alias: {
      "/@/": join(PACKAGE_ROOT, "src") + "/"
    }
  },
  build: {
    ssr: true,
    sourcemap: "inline",
    target: `node${node}`,
    outDir: "dist",
    assetsDir: ".",
    minify: process.env.MODE !== "development",
    lib: {
      entry: "src/index.ts",
      formats: ["es"]
    },
    rollupOptions: {
      output: {
        entryFileNames: "[name].js"
      }
    },
    emptyOutDir: true,
    reportCompressedSize: false
  }
};
var vite_config_default = config;
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLmVsZWN0cm9uLXZlbmRvcnMuY2FjaGUuanNvbiIsICJwYWNrYWdlcy9tYWluL3ZpdGUuY29uZmlnLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XCJjaHJvbWVcIjpcIjEyMlwiLFwibm9kZVwiOlwiMjBcIn0iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGJ6cnJcXFxcZGV2XFxcXHNyLWFwcFxcXFxwYWNrYWdlc1xcXFxtYWluXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxienJyXFxcXGRldlxcXFxzci1hcHBcXFxccGFja2FnZXNcXFxcbWFpblxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvYnpyci9kZXYvc3ItYXBwL3BhY2thZ2VzL21haW4vdml0ZS5jb25maWcuanNcIjtpbXBvcnQge25vZGV9IGZyb20gJy4uLy4uLy5lbGVjdHJvbi12ZW5kb3JzLmNhY2hlLmpzb24nO1xuaW1wb3J0IHtqb2lufSBmcm9tICdub2RlOnBhdGgnO1xuXG5jb25zdCBQQUNLQUdFX1JPT1QgPSBfX2Rpcm5hbWU7XG5jb25zdCBQUk9KRUNUX1JPT1QgPSBqb2luKFBBQ0tBR0VfUk9PVCwgJy4uLy4uJyk7XG5cbi8qKlxuICogQHR5cGUge2ltcG9ydCgndml0ZScpLlVzZXJDb25maWd9XG4gKiBAc2VlIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG4gKi9cbmNvbnN0IGNvbmZpZyA9IHtcbiAgbW9kZTogcHJvY2Vzcy5lbnYuTU9ERSxcbiAgcm9vdDogUEFDS0FHRV9ST09ULFxuICBlbnZEaXI6IFBST0pFQ1RfUk9PVCxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnL0AvJzogam9pbihQQUNLQUdFX1JPT1QsICdzcmMnKSArICcvJyxcbiAgICB9LFxuICB9LFxuICBidWlsZDoge1xuICAgIHNzcjogdHJ1ZSxcbiAgICBzb3VyY2VtYXA6ICdpbmxpbmUnLFxuICAgIHRhcmdldDogYG5vZGUke25vZGV9YCxcbiAgICBvdXREaXI6ICdkaXN0JyxcbiAgICBhc3NldHNEaXI6ICcuJyxcbiAgICBtaW5pZnk6IHByb2Nlc3MuZW52Lk1PREUgIT09ICdkZXZlbG9wbWVudCcsXG4gICAgbGliOiB7XG4gICAgICBlbnRyeTogJ3NyYy9pbmRleC50cycsXG4gICAgICBmb3JtYXRzOiBbJ2VzJ10sXG4gICAgfSxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgZW50cnlGaWxlTmFtZXM6ICdbbmFtZV0uanMnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGVtcHR5T3V0RGlyOiB0cnVlLFxuICAgIHJlcG9ydENvbXByZXNzZWRTaXplOiBmYWxzZSxcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbmZpZztcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBZ0IsV0FBTzs7O0FDQ3ZCLFNBQVEsWUFBVztBQURuQixJQUFNLG1DQUFtQztBQUd6QyxJQUFNLGVBQWU7QUFDckIsSUFBTSxlQUFlLEtBQUssY0FBYyxPQUFPO0FBTS9DLElBQU0sU0FBUztBQUFBLEVBQ2IsTUFBTSxRQUFRLElBQUk7QUFBQSxFQUNsQixNQUFNO0FBQUEsRUFDTixRQUFRO0FBQUEsRUFDUixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxPQUFPLEtBQUssY0FBYyxLQUFLLElBQUk7QUFBQSxJQUNyQztBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLEtBQUs7QUFBQSxJQUNMLFdBQVc7QUFBQSxJQUNYLFFBQVEsT0FBTyxJQUFJO0FBQUEsSUFDbkIsUUFBUTtBQUFBLElBQ1IsV0FBVztBQUFBLElBQ1gsUUFBUSxRQUFRLElBQUksU0FBUztBQUFBLElBQzdCLEtBQUs7QUFBQSxNQUNILE9BQU87QUFBQSxNQUNQLFNBQVMsQ0FBQyxJQUFJO0FBQUEsSUFDaEI7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNiLFFBQVE7QUFBQSxRQUNOLGdCQUFnQjtBQUFBLE1BQ2xCO0FBQUEsSUFDRjtBQUFBLElBQ0EsYUFBYTtBQUFBLElBQ2Isc0JBQXNCO0FBQUEsRUFDeEI7QUFDRjtBQUVBLElBQU8sc0JBQVE7IiwKICAibmFtZXMiOiBbXQp9Cg==
