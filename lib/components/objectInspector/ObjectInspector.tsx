import React from 'react';

import { ObjectInspector } from '@devtools-ds/object-inspector'
import {
    parse,
    SupportedTypes,
    ASTNode,
    ResolvedASTNode,
  } from "@devtools-ds/object-parser";

interface ObjectInspectorProps
  extends Omit<ThemeableElement<"div">, "onSelect"> {
  /** JSON data to render in the tree. */
  data: SupportedTypes;
  /** Depth of the tree that is open at first render. */
  expandLevel: number;
  /** Whether to sort keys like the browsers do. */
  sortKeys: boolean;
  /** Whether to include object Prototypes */
  includePrototypes: boolean;
  /** Callback when a particular node in the tree is actively selected */
  onSelect?: (node?: ASTNode | ResolvedASTNode) => void;
}



export const ObjectInspectorComponent = (options:ObjectInspectorProps) => {
  const {data, expandLevel, sortKeys, includePrototypes} = options;

  return <div>
    <ObjectInspector 
     data={data}
     expandLevel={expandLevel ?? 1}
     sortKeys={sortKeys ?? true}
     includePrototypes={includePrototypes ?? true}
    />
  </div>
};