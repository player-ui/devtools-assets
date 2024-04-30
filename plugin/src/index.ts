import { ActionAsset, Action } from "@devtools-ui/action";
import { CollectionAsset, Collection } from "@devtools-ui/collection";
import { StackedViewView, StackedView } from "@devtools-ui/stacked-view";
import { InputAsset, Input } from "@devtools-ui/input";
import { ListAsset, List } from "@devtools-ui/list";
import { NavigationAsset, Navigation } from "@devtools-ui/navigation";
import {
  ObjectInspectorAsset,
  ObjectInspector,
} from "@devtools-ui/object-inspector";
import { TextAsset, Text } from "@devtools-ui/text";
import { ConsoleAsset, Console } from "@devtools-ui/console";
import { TableAsset, Table } from "@devtools-ui/table";
import {
  CopyToClipboardAsset,
  CopyToClipboard,
} from "@devtools-ui/copy-to-clipboard";
import { CodeEditorAsset, CodeEditor } from "@devtools-ui/code-editor";
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
  ConsoleAsset,
  StackedViewView,
  TableAsset,
  CopyToClipboardAsset,
  CodeEditorAsset,
};

export {
  Action,
  Collection,
  Console,
  Input,
  List,
  Navigation,
  ObjectInspector,
  Text,
  StackedView,
  Table,
  CopyToClipboard,
  CodeEditor,
};
