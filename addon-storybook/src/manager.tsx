import React from "react";
import { addons } from "@storybook/manager-api";
import { Addon_TypesEnum } from "@storybook/types";
import { ADDON_ID, EVENT_PANEL_ID, FLOW_PANEL_ID } from "./addons/constants";
import { EditorPanel } from "./addons/editor";
import { EventsPanel } from "./addons/events";
import { StateProvider } from "./redux";

export const register = () => {
  addons.register(ADDON_ID, () => {
    addons.add(EVENT_PANEL_ID, {
      type: Addon_TypesEnum.PANEL,
      title: "Events",
      match: ({ viewMode }) => viewMode === "story",
      render: ({ active }) => (
        <StateProvider>
          <EventsPanel active={Boolean(active)} />
        </StateProvider>
      ),
    });

    addons.add(FLOW_PANEL_ID, {
      type: Addon_TypesEnum.PANEL,
      title: "Flow Editor",
      match: ({ viewMode }) => viewMode === "story",
      render: ({ active }) => (
        <StateProvider>
          <EditorPanel active={Boolean(active)} />
        </StateProvider>
      ),
    });
  });
};
