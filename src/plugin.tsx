import type { ReactPlayer, ReactPlayerPlugin } from '@player-ui/react';
import { AssetProviderPlugin } from '@player-ui/asset-provider-plugin-react';
import type { Player } from '@player-ui/player';
import { Data } from './components/data';
import { Console } from './components/console';


  
export class DevToolsAssetsPlugin implements ReactPlayerPlugin {
    name = 'devtools-asssets-plugin'

    appyReact(reactPlayer: ReactPlayer) {
        reactPlayer.registerPlugin(
            new AssetProviderPlugin([
                ['ConsoleView',Console],
                ['DataView', Data]
            ])
        )
    }

    apply(player:Player){
        player.registerPlugin(new DevToolsAssetsPlugin())
    }
}