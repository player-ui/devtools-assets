load("@npm//:defs.bzl", "npm_link_all_packages")
load("@rules_player//javascript:defs.bzl", "js_pipeline")
load("//helpers:defs.bzl", "tsup_config", "vitest_config")

npm_link_all_packages(name = "node_modules")

tsup_config(name = "tsup_config")

vitest_config(name = "vitest_config")

js_pipeline(
    package_name = "@devtools-ui/plugin",
    deps = [
        ":node_modules/@devtools-ui/action",
        ":node_modules/@devtools-ui/collection",
        ":node_modules/@devtools-ui/text",
        "//:node_modules/@chakra-ui/react",
        "//:node_modules/@player-ui/asset-provider-plugin-react",
        "//:node_modules/@player-ui/asset-transform-plugin",
        "//:node_modules/@player-ui/player",
        "//:node_modules/@player-ui/react",
        "//:node_modules/react",
    ],
)