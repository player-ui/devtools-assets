import React from 'react';
import {
  Console as ConsoleComp,
  ConsoleResultInspector,
} from '@devtools-ds/console';
import { Navigation } from '@devtools-ds/navigation';
import { DeleteIcon } from '@devtools-ds/icon';


export const ConsoleHeader = () => {
  return (
    <div style={{ margin: 10 }}>
      <p>
        The console allows you to evaluate any Player expression <br />
        Check out the{' '}
        <a
          href="https://player-ui.github.io/latest/content/data-expressions"
          target="_blank"
          rel="noreferrer"
        >
          docs
        </a>{' '}
        for the available expressions
      </p>
    </div>
  );
};

interface ConsoleProps {
  onClear: () => void;
  onExecute: (expression: string) => string;
}

export const Console = ({ onClear, onExecute }: ConsoleProps) => (
  <div>
    <ConsoleHeader />
    <Navigation>
      <Navigation.Controls>
        <Navigation.Right>
          <Navigation.Button
            aria-label="Clear"
            icon={<DeleteIcon inline />}
            onClick={onClear}
          />
        </Navigation.Right>
      </Navigation.Controls>
    </Navigation>
    <div>
      <ConsoleComp
        execute={onExecute}
        resultComponent={ConsoleResultInspector}
      />
    </div>
  </div>
);