import React from 'react';
import { render } from 'react-json-reconciler'
import { ObjectInspector } from '../../../components/src/index';
import { test, expect } from "vitest";

const expectedBasicObjectInspector = {
    id: "root",
    type: "objectInsecptor",
    label: { asset: { id: "label", type: "text", value: "Label" } },    
  };
  
  const data = {
    "foo":"bar"
  }
  
  test("works with JSX", async () => {
    const element = (
      <ObjectInspector data={data}>
        <ObjectInspector.Label>
          <Text>Label</Text>
          </ObjectInspector.Label>
      </ObjectInspector>
    );
  
    expect((await render(element)).jsonValue).toStrictEqual(
        expectedBasicObjectInspector
    );
  
  });