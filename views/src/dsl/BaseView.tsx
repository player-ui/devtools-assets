import React from "react";
import { AssetPropsWithChildren, Asset } from "@player-tools/dsl";
import { BaseViewTemplateProps } from "../types";
import { ReactAsset } from "@player-ui/react";

const viewHeader = (props) => <ReactAsset {...props} />;
const viewFooter = (props) => <ReactAsset {...props} />;
const viewBody = (props) => <ReactAsset {...props} />;

export const BaseView = (
  props: AssetPropsWithChildren<BaseViewTemplateProps>
) => (
  <Asset type="text" {...props}>
    <property name="value">{props.children}</property>
  </Asset>
);
