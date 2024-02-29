load("//:index.bzl", "javascript_pipeline")

javascript_pipeline(
    name = "@player-ui/devtools-assets",
    dependencies = [
      "//src/components/src:@player-ui/devtools-assets"
    ],

    peer_dependencies = [
        "@npm//react",
        "@npm//@types/react",
        "@npm//@player-tools/dsl"
    ]
)