import React from 'react';


import { SimpleFlow } from './SimpleFlow';
import { useReactPlayer, ReactPlayerPlugin } from '@player-ui/react';
import { ReferenceAssetsPlugin } from '@player-ui/reference-assets-plugin-react';

import { DevToolsAssetsPlugin } from './plugin'
import './App.css'


const plugins: Array<ReactPlayerPlugin> = [new DevToolsAssetsPlugin(),new ReferenceAssetsPlugin()];

const Fallback = () => <div id="loader">Loading...</div>;

export const App = () => {
  // Create Player with our plugins
  const { reactPlayer } = useReactPlayer({ plugins });

  // Start the flow.

  React.useEffect(() => {
    reactPlayer.start(SimpleFlow);
  }, []);

  // Render Player
  return (
  <React.Suspense fallback={<Fallback />}>
    <reactPlayer.Component/>
  </React.Suspense>);
}

export default App;
