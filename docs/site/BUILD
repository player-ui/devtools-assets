load("@npm//:defs.bzl", "npm_link_all_packages")
load("@aspect_rules_ts//ts:defs.bzl", "ts_config","ts_project")
load("//docs/site:defs.bzl", "next")
load("@npm//:next/package_json.bzl", next_bin = "bin")
load("//docs/site:defs.bzl", "next")
load("@aspect_rules_js//js:defs.bzl", "js_library")

npm_link_all_packages(name = "node_modules")

next_bin.next_binary(
    name = "next_js_binary",
    visibility = ["//visibility:public"],
)

deps = [
    "//:node_modules/@chakra-ui/icons",
    "//:node_modules/@chakra-ui/react",
    "//:node_modules/@mdx-js/loader",
    "//:node_modules/@mdx-js/react",
    "//:node_modules/@next/mdx",
    "//:node_modules/@types/mdx",
    "//:node_modules/next",
    "//:node_modules/react",
    "//:node_modules/react-dom",
    "//:node_modules/react-icons",
    "//:node_modules/react-syntax-highlighter",
    "//:node_modules/remark-gfm",
    "//:node_modules/typescript",
    "//:node_modules/@types/react",
    "//:node_modules/@types/node",
]

js_library(
    name = "build_deps",
    srcs = glob(["pages/**/*","public/**/*","components/**/*","config/**/*"]) + ["next.config.mjs","package.json","next-env.d.ts",".eslintrc.json"]
) 

next(
    name = "next",
    srcs = [":build_deps"],
    data = deps ,
    next_bin = "./node_modules/next/dist/bin/next",
    next_js_binary = ":next_js_binary",
)


