load("@npm//:defs.bzl", "npm_link_all_packages")
load("@aspect_rules_ts//ts:defs.bzl", "ts_config","ts_project")
load("//docs/site:defs.bzl", "next")
load("@npm//:next/package_json.bzl", next_bin = "bin")
load("@aspect_rules_js//js:defs.bzl", "js_library")
load("@aspect_bazel_lib//lib:copy_to_bin.bzl", "copy_to_bin")

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
    srcs = glob(["pages/**/*","public/**/*","components/**/*","config/**/*"])
) 

data = ["next.config.mjs","package.json","next-env.d.ts",".eslintrc.json"]

filegroup(
    name = "source_files",
    srcs = glob([
        "public/**/*",
        "pages/**/*",
        "components/**/*",
        "config/**/*"
    ])
)

filegroup(
    name = "data_files",
    srcs = data
)

copy_to_bin(
    name = "copy_source_files",
    srcs = ["source_files"],
)

next(
    name = "build",
    srcs = ["copy_source_files"] + deps,
    data = ["data_files"],
    next_bin = "./node_modules/next/dist/bin/next",
    next_js_binary = ":next_js_binary",
)

next(
    name = "next",
    srcs = [":build_deps"],
    data = deps ,
    next_bin = "./node_modules/next/dist/bin/next",
    next_js_binary = ":next_js_binary",
)


