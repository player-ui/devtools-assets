load("@aspect_rules_jest//jest:defs.bzl", "jest_test")
load("@aspect_rules_ts//ts:defs.bzl", "ts_project")
load("@rules_player//javascript:defs.bzl", "js_pipeline")

SRCS = [
    "_app.tsx",
    "index.tsx",
]

ts_project(
    name = "pages",
    srcs = SRCS,
    declaration = True,
    resolve_json_module = True,
    transpiler = "tsc",
    tsconfig = "//docs/site:tsconfig",
    visibility = ["//docs/site:__subpackages__"],
    deps = [
    "//docs/site/components"
    "//docs/site:node_modules/@types/react",
    "//docs/site:node_modules/@types/react-dom",
    "//docs/site:node_modules/next",
    "//:node_modules/@chakra-ui/react",
    ],
)

