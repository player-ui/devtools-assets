load("@npm//:defs.bzl", "npm_link_all_packages")
load("@rules_player//javascript:defs.bzl", "js_pipeline")
load("//helpers:defs.bzl", "tsup_config", "vitest_config")

npm_link_all_packages(name = "node_modules")

tsup_config(name = "tsup_config")

vitest_config(name = "vitest_config")

js_pipeline(
    package_name = "@devtools-ui/plugin",
    peer_deps = [
        "//:node_modules/@player-ui/player",
        "//:node_modules/@player-ui/react",
    ],
    deps = [
        ":node_modules/@devtools-ui/action",
        ":node_modules/@devtools-ui/code-editor",
        ":node_modules/@devtools-ui/collection",
        ":node_modules/@devtools-ui/console",
        ":node_modules/@devtools-ui/copy-to-clipboard",
        ":node_modules/@devtools-ui/flame-graph",
        ":node_modules/@devtools-ui/input",
        ":node_modules/@devtools-ui/list",
        ":node_modules/@devtools-ui/navigation",
        ":node_modules/@devtools-ui/object-inspector",
        ":node_modules/@devtools-ui/radio-group",
        ":node_modules/@devtools-ui/stacked-view",
        ":node_modules/@devtools-ui/table",
        ":node_modules/@devtools-ui/text",
        ":node_modules/@devtools-ui/toggle",
        "//:node_modules/@chakra-ui/react",
        "//:node_modules/@player-ui/asset-provider-plugin-react",
        "//:node_modules/@player-ui/asset-transform-plugin",
        "//:node_modules/@types/react",
        "//:node_modules/react",
    ],
)
