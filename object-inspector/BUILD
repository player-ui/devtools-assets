load("@npm//:defs.bzl", "npm_link_all_packages")
load("@rules_player//javascript:defs.bzl", "js_pipeline")
load("//helpers:defs.bzl", "tsup_config", "vitest_config")

npm_link_all_packages(name = "node_modules")

tsup_config(name = "tsup_config")

vitest_config(name = "vitest_config")

js_pipeline(
    package_name = "@devtools-ui/object-inspector",
    test_deps = [
        ":node_modules",
        "//:vitest_config",
    ],
    deps = [
        "//:node_modules/@types/react",
        "//:node_modules/react",
        "//:node_modules/@devtools-ds/object-inspector",
        "//:node_modules/@player-tools/dsl",
        "//:node_modules/@chakra-ui/react",
        "//:node_modules/@emotion/react",
        "//:node_modules/@emotion/styled",
        "//:node_modules/framer-motion",
        "//:node_modules/@devtools-ui/text",
        "//:node_modules/@player-ui/react",
        "//:node_modules/@player-ui/types",
    ],
)
