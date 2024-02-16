load("@npm//typescript:index.bzl", "ts_project")

load("//:index.bzl", "javascript_pipeline")

ts_project(
    name = "dvtools-assets-plugin",
    srcs = glob(["src/**/*.ts"]),
    tsconfig = ":tsconfig.json",
    deps = [

    ]
)


javascript_pipeline(
    name = "@player-ui/reference-assets-plugin-react",
    dependencies = [
        "//plugins/asset-provider/react:@player-ui/asset-provider-plugin-react",
        "//plugins/beacon/react:@player-ui/beacon-plugin-react",
        "@npm//clsx",
        "@npm//@chakra-ui/react",
        "@npm//@chakra-ui/icons"
    ],
    peer_dependencies = [
        "@npm//@types/node",
        "//react/player:@player-ui/react",
    ],
    test_data = [
        "@npm//@testing-library/react",
        "//core/make-flow:@player-ui/make-flow",
    ],
    xlr_mode = "plugin"
)

filegroup(
    name = "stories",
    srcs = glob(["src/**/*.stories.tsx"])
)