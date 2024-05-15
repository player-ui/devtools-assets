load("@npm//:defs.bzl", "npm_link_all_packages")
load("@aspect_rules_ts//ts:defs.bzl", "ts_config")
load("//docs/site:defs.bzl", "next")
load("@npm//:next/package_json.bzl", next_bin = "bin")
load("//docs/site:defs.bzl", "next")

npm_link_all_packages(name = "node_modules")

next_bin.next_binary(
    name = "next_js_binary",
    visibility = ["//visibility:public"],
)

ts_config(
    name = "tsconfig",
    src = "//docs/site:tsconfig.json",
    visibility = ["//visibility:public"],
)

build_deps = [
    "//:typings",
    "//:node_modules/ts-loader",
    "//:node_modules/ts-node",
    "//:node_modules/css-loader",
    "//:node_modules/style-loader",
    "//:node_modules/postcss-loader",
    "//:node_modules/babel-loader",
    "//:node_modules/@babel/preset-env",
    "//:node_modules/@babel/preset-react",
    "//:node_modules/@next/mdx",
]


deps = [
    ":node_modules/@player-ui/react",
    ":node_modules/@player-ui/reference-assets-plugin-react",
    ":node_modules/@player-ui/asset-provider-plugin-react",
    "//:node_modules/typescript",
    "//:node_modules/tslib",
    "//:node_modules/@types/react",
    "//:node_modules/@types/node",
    "//:node_modules/@next/mdx",
    # "//:node_modules/next",
    "//:node_modules/tailwindcss",
    "//:node_modules/tailwindcss-animate",
    "//:node_modules/postcss",
    "//:node_modules/autoprefixer",
    "//:node_modules/@docsearch/react",
    "//:node_modules/@docsearch/css",
    "//:node_modules/@radix-ui/react-label",
    "//:node_modules/@radix-ui/react-separator",
    "//:node_modules/@radix-ui/react-slot",
    "//:node_modules/class-variance-authority",
    "//:node_modules/clsx",
    "//:node_modules/@types/react-dom",
    "//:node_modules/react-router",
    "//:node_modules/react-router-dom",
    "//:node_modules/path-browserify",
    "//:node_modules/@types/path-browserify",
    "//:node_modules/lucide-react",
    "//:node_modules/tailwind-merge",
    "//:node_modules/lunr",
    "//:node_modules/@types/lunr",
    "//:node_modules/globby",
    "//:node_modules/react",
    "//:node_modules/react-dom",
    "//:node_modules/null-loader",
    "//:node_modules/@chakra-ui/react",
    "//:node_modules/@chakra-ui/skip-nav",
    "//:node_modules/@chakra-ui/icons",
    "//:node_modules/react-icons",
    "//:node_modules/@mdx-js/loader",
    "//:node_modules/@mdx-js/react",
    "//:node_modules/@types/mdx-js__react",
    "//:node_modules/react-syntax-highlighter",
    "//:node_modules/@types/react-syntax-highlighter",
    "//:node_modules/remark",
    "//:node_modules/remark-html",
    "//:node_modules/remark-smartypants",
    "//:node_modules/rehype-slug",
    "//:node_modules/rehype-autolink-headings",
    "//:node_modules/remove-markdown",
    "//:node_modules/github-slugger",
    "//:node_modules/@next/mdx",
    "//:node_modules/gray-matter",
    # "//:node_modules/nextjs-google-analytics",
]

# next_bin.next(
#     name = "next",
#     src = glob(["src/**/*"]),
#     deps = deps,
#     out_dirs = [""]
# )

next(
    name = "next",
    srcs = [
        "//docs/site/pages",
        # "//docs/site/public",
    ],
    data = [
        "next.config.mjs",
        ":node_modules/next",
        ":node_modules/react",
        ":node_modules/react-dom",
        ":node_modules/typescript",
        "//:node_modules/@next/mdx",
    ],
    next_bin = "./node_modules/next/dist/bin/next",
    next_js_binary = "//docs/site:next_js_binary",
)

