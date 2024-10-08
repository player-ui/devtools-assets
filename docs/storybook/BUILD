load("@aspect_rules_ts//ts:defs.bzl", "ts_config")
load("@npm//:defs.bzl", "npm_link_all_packages")
load("@npm//:storybook/package_json.bzl", storybook_bin = "bin")
load("@rules_player//javascript:defs.bzl", "create_package_json")

npm_link_all_packages(
    name = "node_modules",
)

deps = [
    "//:node_modules/dlv",
    "//:node_modules/vite",
    "//:node_modules/@player-tools/dsl",
    "//:node_modules/@vitejs/plugin-react",
    "//:node_modules/react-dom",
    "//:node_modules/@storybook/addon-docs",
    "//:node_modules/@storybook/blocks",
    "//:node_modules/@storybook/react",
    "//:node_modules/@storybook/react-vite",
    "//:node_modules/@player-ui/react",
    "//:node_modules/@player-ui/player",
    "//:node_modules/@player-ui/asset-transform-plugin",
    "//:node_modules/@player-ui/common-types-plugin",
    "//:node_modules/@player-ui/data-change-listener-plugin",
    "//:node_modules/@player-ui/computed-properties-plugin",
    "//:node_modules/@chakra-ui/storybook-addon",
    "//:node_modules/remark-gfm",
    "//:node_modules/@codemirror/state",
    "//:node_modules/@codemirror/lang-json",
    ":node_modules/@player-ui/storybook-addon-player",
    ":node_modules/@devtools-ui/plugin",
]

ts_config(
    name = "tsconfig",
    src = "tsconfig.json",
    deps = [
        "//:tsconfig",
    ],
)

create_package_json(
    name = "package",
    base_package_json = "package.json",
    custom_entrypoints = True,
    dependencies = deps,
    root_package_json = "//:package.json",
    substitutions = {
        "0.0.0-PLACEHOLDER": "{STABLE_VERSION}",
    },
)

files = glob([
    "src/**/*",
    ".storybook/**/*",
    "vite.config.*",
])

srcs = files + deps + [
    ":tsconfig",
    ":package",
]

storybook_bin.storybook(
    name = "storybook",
    srcs = srcs,
    args = [
        "build",
        "-o",
        "./storybook",
    ],
    chdir = package_name(),
    out_dirs = ["storybook"],
    silent_on_success = False,
    visibility = ["//visibility:public"],
)

storybook_bin.storybook_binary(
    name = "start",
    args = [
        "dev",
        "--no-open",
        "--port",
        "6006",
    ],
    chdir = "docs/storybook",
    data = srcs,
    tags = [
        # "ibazel_notify_changes",
    ],
    visibility = ["//visibility:public"],
)
