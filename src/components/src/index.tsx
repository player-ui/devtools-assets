import type {
  AssetPropsWithChildren,
  
} from '@player-tools/dsl';
import { createSlot, Asset, View } from '@player-tools/dsl';
import type { Asset as AssetType } from '@player-ui/player';
import type { ObjectInspector as ObjectInspectorAsset} from '../../assets/objectInspector';
import type {
    CollectionAsset, TextAsset
  } from '@player-ui/reference-assets-plugin';



  export const Text = (
    props: Omit<AssetPropsWithChildren<TextAsset>, 'value'> & {
      value?: string;
    }
  ) => {
    return (
      <Asset type="text" {...props}>
        <property name="value">{props.children}</property>
      </Asset>
    );
  };

export const Collection = (props: AssetPropsWithChildren<CollectionAsset>) => {
    return <Asset type="collection" {...props} />;
};

  
/** A collection generator */
export const CollectionComp = (props: AssetPropsWithChildren<AssetType>) => {
    return (
      <Collection>
        <Collection.Values>{props.children}</Collection.Values>
      </Collection>
    );
  };

  Collection.Values = createSlot({
    name: 'values',
    isArray: true,
    TextComp: Text,
    wrapInAsset: true,
  });

  export const ObjectInspector = (
    props: Omit<AssetPropsWithChildren<ObjectInspectorAsset>, 'value'> & {
      value?: string;
    }
  ) => {
    return (    
      <Asset type="data-inspector" {...props}>
        <property name="value">{props.children}</property>
      </Asset>
    );
  };


  /** A utility for quickly creating named slots using the text and collection factories */
const slotFactory = (name: string, isArray = false) =>
createSlot({
  name,
  TextComp: Text,
  CollectionComp,
  isArray,
  wrapInAsset: true,
});

export const LabelSlot = slotFactory('label');
export const ValueSlot = slotFactory('value');
export const TitleSlot = slotFactory('title');
export const SubtitleSlot = slotFactory('subtitle');
export const ActionsSlot = slotFactory('actions', true);
export const PrimaryInfoSlot = slotFactory('primaryInfo');

ObjectInspector.Label = LabelSlot

