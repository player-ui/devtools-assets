import fs from "fs";
import path from "path";

export default function (plop) {
  plop.setActionType("renameFiles", function (answers) {
    const { assetName } = answers;
    const basePath = path.resolve(process.cwd(), assetName);
    fs.renameSync(
      path.join(basePath, "BUILD.hbs"),
      path.join(basePath, "BUILD")
    );
    return `${assetName}/README and ${assetName}/BUILD have been renamed`;
  });

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
        destination: "./{{assetName}}",
        base: "./asset-template",
        templateFiles: "./asset-template/**/*",
        globOptions: { dot: true },
        stripExtension: true,
      },
      {
        type: "renameFiles",
      },
      ...Object.values(extendedActions)
    ],
  });
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
    path: "./docs/storybook/src/flows/{{assetName}}/basic.tsx",
    templateFile: "./docs/storybook/src/story-templates/flows/basic.tsx.hbs",
  },
  mdxDocsiteDoc: 
  {
    type: "add",
    path: "./docs/site/pages/assets/{{assetName}}.mdx",
    templateFile: "./asset-template/README.md.hbs",
  },
  linkingAssetToSBPreview: {
    type: 'append',
    path: './docs/storybook/.storybook/preview.ts',
    pattern: /\/\* gen:asset Inject asset import \*\//g,
    template: '  {{pascalCase assetName}},'
  },
  bazelIgnore: {
    type: 'append',
    path: './.bazelignore',
    pattern: /(.|\n)+(.*node_modules)/g,
    template: '{{assetName}}/node_modules,',
  },
  pnpmWorkspace: {
    type: 'append',
    path: './pnpm-workspace.yaml',
    pattern: /(.|\n)+(.[\w|"])/g,
    template: '  - "{{assetName}}"',
  },
}
