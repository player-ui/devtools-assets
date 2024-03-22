import { ActionAsset, Action } from "@devtools-ui/action";
import { CollectionAsset, Collection } from "@devtools-ui/collection";
import { InputAsset, Input } from "@devtools-ui/input";
import { ListAsset, List } from "@devtools-ui/list";
import { NavigationAsset, Navigation } from "@devtools-ui/navigation";
import {
  ObjectInspectorAsset,
  ObjectInspector,
} from "@devtools-ui/object-inspector";
import { TextAsset, Text } from "@devtools-ui/text";
import { ConsoleAsset, Console } from "@devtools-ui/console";
import { AssetsRegistryPlugin } from "./plugins";

export default AssetsRegistryPlugin;

export type {
  ActionAsset,
  CollectionAsset,
  InputAsset,
  ListAsset,
  NavigationAsset,
  ObjectInspectorAsset,
  TextAsset,
  ConsoleAsset
};

export { Action, Collection, Input, List, Navigation, ObjectInspector, Text, Console };
