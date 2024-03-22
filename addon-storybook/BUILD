load("@aspect_rules_js//js:defs.bzl", "js_library")
load("@aspect_rules_js//npm:defs.bzl", "npm_package")
load("@npm//:defs.bzl", "npm_link_all_packages")
load("@npm//:tsup/package_json.bzl", tsup_bin = "bin")

npm_link_all_packages(
    name = "node_modules",
)

dependencies = [
    "//:node_modules/@storybook/manager-api",
    "//:node_modules/@storybook/preview-api",
    "//:node_modules/@storybook/core-events",
    "//:node_modules/@storybook/components",
    "//:node_modules/@storybook/icons",
    "//:node_modules/react-redux",
    "//:node_modules/redux",
    "//:node_modules/react",
    "//:node_modules/@types/react",
    "//:node_modules/dequal",
    "//:node_modules/@monaco-editor/react",
    "//:node_modules/@chakra-ui/react",
    "//:node_modules/@storybook/types",
    "//:node_modules/esbuild-wasm",
    "//:node_modules/@player-tools/dsl",
    "//:node_modules/@player-ui/react",
    "//:node_modules/lz-string",
    "//:node_modules/@player-ui/beacon-plugin-react",
    "//:node_modules/@player-ui/make-flow",
    "//:node_modules/@player-ui/metrics-plugin-react",
    "//:node_modules/@storybook/channels",
    "//:node_modules/@reduxjs/toolkit",
    "//:node_modules/@types/redux-state-sync",
    "//:node_modules/redux-state-sync",
    "//:node_modules/@types/uuid",
    "//:node_modules/uuid",
    "//:node_modules/@storybook/manager",
    "//:node_modules/tsup",
    "//:node_modules/@storybook/preview",
]

tsup_bin.tsup_node(
    name = "addon-storybook-tsup",
    srcs = glob(["src/**"]) + [
        "package.json",
        "tsconfig.json",
        "tsup.config.ts",
    ] + dependencies,
    outs = [
        "dist/index.js",
        "dist/index.mjs",
    ],
    args = [
    ],
    chdir = package_name(),
)

js_library(
    name = "addon-storybook-library",
    srcs = glob(["src/**"]) + [
        "manager.mjs",
        "package.json",
        ":addon-storybook-tsup",
    ],
    deps = dependencies,
)

npm_package(
    name = "addon-storybook",
    srcs = [
        ":addon-storybook-library",
        ":addon-storybook-tsup",
    ],
    package = "@player-ui/storybook-addon-player",
    visibility = ["//visibility:public"],
)
