import { ObjectInspector as ObjectorInspectorDS } from '@devtools-ds/object-inspector'
import { Asset, AssetWrapper } from '@player-ui/types';
import { ReactAsset } from '@player-ui/react';

import styles from './objectInspector.module.css'

export interface ObjectInspector<AnyAsset extends Asset = Asset> extends Asset<'ObjectInspector'>{
  /* Data that gets passed*/
  data: object

  /** A text asset to label the list */
  label?: AssetWrapper<AnyAsset>;

}

export const ObjectInspector = (props:ObjectInspector) => {
  const { id , data ,label} = props;

  return (
    <div id={id} className={styles['data-panel-wrapper']}>
      { label &&  <ReactAsset {...label} />}
      { data ? (
        <ObjectorInspectorDS
          data={data}
          includePrototypes={false}
          expandLevel={7}
        />
      ) : (
        <div>No data available</div>
      )}
    </div>
  );
}

export default ObjectInspector