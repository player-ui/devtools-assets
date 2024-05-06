import fs from "fs";
import path from "path";

export default function (plop) {
  plop.setActionType("renameFiles", function (answers) {
    const { assetName } = answers;
    const basePath = path.resolve(process.cwd(), toKebabCase(assetName));
    fs.renameSync(
      path.join(basePath, "BUILD.hbs"),
      path.join(basePath, "BUILD")
    );
    return `${assetName}/README and ${assetName}/BUILD have been renamed`;
  });

  plop.setActionType("renameStorybookFiles", function (answers) {
    const { assetName } = answers;

    const pascalCaseName = assetName.replace(/(^\w|-\w|\s+\w)/g, (text) => {
      return text.replace(/(-|\s)/, "").toUpperCase();
    });

    const sbTemplatesBasePath = path.resolve(
      process.cwd(),
      "./docs/storybook/src/assets/"
    );

    fs.renameSync(
      path.join(sbTemplatesBasePath, "template.mdx"),
      path.join(sbTemplatesBasePath, `${pascalCaseName}.mdx`)
    );

    fs.renameSync(
      path.join(sbTemplatesBasePath, "template.stories.tsx"),
      path.join(sbTemplatesBasePath, `${pascalCaseName}.stories.tsx`)
    );

    return `${sbTemplatesBasePath}/template.stories.tsx.hbs and ${sbTemplatesBasePath}/template.stories.tsx.hbs have been renamed`;
  });

  plop.setHelper("kebabCase", toKebabCase);

  plop.setHelper("spacedPascal", toSpacedPascal)

  plop.setGenerator("asset", {
    description: "Create a new asset",
    prompts: [
      {
        type: "input",
        name: "assetName",
        message: "Asset name:",
      },
    ],
    actions: [
      {
        type: "addMany",
        destination: "./{{kebabCase assetName}}",
        base: "./asset-template",
        templateFiles: "./asset-template/**/*",
        globOptions: { dot: true },
        stripExtension: true,
      },
      {
        type: "renameFiles",
      },
      ...Object.values(extendedActions),
    ],
  });

  function toKebabCase(text) {
    return text
      .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2") // getting all lowercase letters that are near to uppercase letters
      .replace(/[\s_]+/g, "-") // replacing all spaces and low dashes
      .replace(/^-/, "") // remove leading - if any
      .toLowerCase(); // Converting all to lowercase
  }

  function toSpacedPascal(text) {
    return text
      .replace(/(?<=[a-z])([A-Z])/g, " $1") // adds space before inner capitalized lettes in pascal-cased words
  }
}

const extendedActions = {
  storyBookAssetTemplates: {
    type: "addMany",
    destination: "./docs/storybook/src/assets",
    base: "./docs/storybook/src/story-templates",
    templateFiles: "./docs/storybook/src/story-templates/*.hbs",
    stripExtension: true,
  },
  storyBookAssetFlowTemplate: {
    type: "add",
    path: "./docs/storybook/src/flows/{{kebabCase assetName}}/basic.tsx",
    templateFile: "./docs/storybook/src/story-templates/flows/basic.tsx.hbs",
  },
  renameStorybookFiles: {
    type: "renameStorybookFiles",
  },
  mdxDocsiteDoc: {
    type: "add",
    path: "./docs/site/pages/assets/{{kebabCase assetName}}.mdx",
    templateFile: "./asset-template/README.md.hbs",
  },
  mdxDocsiteNavigation: {
    type: "append",
    path: "./docs/site/config/navigation.ts",
    pattern: /(?=\s+])/,
    template: `            {
              title: '{{spacedPascal (pascalCase assetName)}}',
              path: '/assets/{{kebabCase assetName}}',
            },`,
  },
  linkingAssetToSBPreviewImport: {
    type: "append",
    path: "./docs/storybook/.storybook/preview.ts",
    pattern: /(?=\s})/,
    template: "  {{pascalCase assetName}},",
  },
  linkingAssetToSBPreviewComponent: {
    type: "append",
    path: "./docs/storybook/.storybook/preview.ts",
    pattern: /(?=\s};)/,
    template: "  {{pascalCase assetName}},",
  },
  bazelIgnore: {
    type: "append",
    path: "./.bazelignore",
    pattern: /(.|\n)+(.*node_modules)/,
    template: "{{kebabCase assetName}}/node_modules",
  },
  pnpmWorkspace: {
    type: "append",
    path: "./pnpm-workspace.yaml",
    pattern: /(.|\n)+(.[\w|"])/,
    template: '  - "{{kebabCase assetName}}"',
  },
  pluginReadme: {
    type: "append",
    path: "./plugin/README.md",
    pattern: /(.|\n)+(-\s.*)/,
    template: "- {{kebabCase assetName}}",
  },
  pluginPackageJson: {
    type: "modify",
    path: "./plugin/package.json",
    pattern: /"$/m,
    template: '",\n    "@devtools-ui/{{kebabCase assetName}}": "workspace:*"',
  },
  pluginBazelBuild: {
    type: "append",
    path: "./plugin/BUILD",
    pattern: /(.|\n)+(.@dev.*)/,
    template: '        ":node_modules/@devtools-ui/{{kebabCase assetName}}",',
  },
  pluginSrcIndexImportAsset: {
    type: "append",
    path: "./plugin/src/index.ts",
    pattern: /(.|\n)+(import.*from "@.*)/,
    template:
      'import { {{pascalCase assetName}}Asset, {{pascalCase assetName}} } from "@devtools-ui/{{kebabCase assetName}}";',
  },
  pluginSrcIndexExportAsset: {
    type: "append",
    path: "./plugin/src/index.ts",
    pattern: /(export\s{(.|\s)*)+(,)/,
    template: "  {{pascalCase assetName}},",
  },
  pluginSrcIndexExportAssetType: {
    type: "append",
    path: "./plugin/src/index.ts",
    pattern: /(export\stype\s{)+(.|\n)*(?=\n};\n\s)/,
    template: "  {{pascalCase assetName}}Asset,",
  },
  pluginSrcAssetRegistryAssetImport: {
    type: "append",
    path: "./plugin/src/plugins/AssetsRegistryPlugin.tsx",
    pattern: /(.|\n)+@dev.+/,
    template:
      'import { {{pascalCase assetName}}Asset, {{pascalCase assetName}}Component } from "@devtools-ui/{{kebabCase assetName}}";',
  },
  pluginSrcAssetRegistryAssetInterfaceExport: {
    type: "modify",
    path: "./plugin/src/plugins/AssetsRegistryPlugin.tsx",
    pattern: /(?=\s+])/,
    template: ",\n        {{pascalCase assetName}}Asset",
  },
  pluginSrcAssetRegistryAssetProvider: {
    type: "modify",
    path: "./plugin/src/plugins/AssetsRegistryPlugin.tsx",
    pattern: /(?=\s+]\))/,
    template:
      '\n        ["{{kebabCase assetName}}", {{pascalCase assetName}}Component],',
  },
  pluginSrcTransformFunctionImport: {
    type: "append",
    path: "./plugin/src/plugins/TransformPlugin.ts",
    pattern: /(.|\n)+@dev.+/,
    template:
      'import { {{camelCase assetName}}Transform } from "@devtools-ui/{{kebabCase assetName}}";',
  },
  pluginSrcTransformFunctionRegistry: {
    type: "modify",
    path: "./plugin/src/plugins/TransformPlugin.ts",
    pattern: /(?=\s+])/,
    template:
      '\n        [{ type: "{{kebabCase assetName}}" }, {{camelCase assetName}}Transform],',
  },
};
