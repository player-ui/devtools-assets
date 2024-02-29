import type { ReactPlayer, ReactPlayerPlugin } from '@player-ui/react';
import { AssetProviderPlugin } from '@player-ui/asset-provider-plugin-react';
import { ObjectInspector } from './assets/objectInspector';
import { Console } from './assets/console';


export class DevToolsAssetsPlugin implements ReactPlayerPlugin {
    name = 'devtools-asssets-plugin'

      applyReact(reactPlayer: ReactPlayer) {
        new AssetProviderPlugin([['Console', Console],['objectInspector', ObjectInspector]]).applyReact(reactPlayer);
       
      }
}