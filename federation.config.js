const {
  withNativeFederation,
  shareAll,
  share,
} = require("@angular-architects/native-federation/config");

module.exports = withNativeFederation({
  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
    ...share({
      "aws-amplify": {
        singleton: true,
        strictVersion: true,
        requiredVersion: "auto",
        transient: true,
      },
    }),
  },

  externals: [
    "fs",
    "stream",
    "path",
    "os",
    "http",
    "https",
    "http2",
    "net",
    "tls",
    "dns",
    "child_process",
    "process",
    "worker_threads",
    "cluster",
    "timers",
    "perf_hooks",
    "crypto",
    "vm",
    "buffer",
    "string_decoder",
    "zlib",
    "querystring",
    "url",
    "module",
    "events",
    "async_hooks",
    "console",
    "readline",
    "repl",
    "inspector",
    "trace_events",
    "util",
    "diagnostics_channel",
    "v8",
    "node:internal/test",
    "node:internal/process",
    "node:internal/modules",
  ],

  skip: [
    "rxjs/ajax",
    "rxjs/fetch",
    "rxjs/testing",
    "rxjs/webSocket",
    // Add further packages you don't need at runtime
  ],

  // Please read our FAQ about sharing libs:
  // https://shorturl.at/jmzH0
});
