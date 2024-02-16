import React, {useState} from 'react';

import { ObjectInspector } from '@devtools-ds/object-inspector'
import {
    parse,
    SupportedTypes,
    ASTNode,
    ResolvedASTNode,
  } from "@devtools-ds/object-parser";

import Split from 'react-split';
import styles from './data.module.css';

interface DataDetailsPanelProps {
  details?: Runtime.PlayerDataBindingRPC['result'];
}

export const DataDetailsPanel = (props: DataDetailsPanelProps) => {
  const { details } = props;

  return (
    <div key={props.details?.binding} className={styles['data-details']}>
      <h3>Details</h3>
      {details ? (
        <div>
          <div className={styles['data-details-section']}>
            <div className={styles['data-details-pair']}>
              <h5>Binding:</h5>
              <span className={styles['data-details-string-value']}>
                {`"${details.binding}"`}
              </span>
            </div>
            <div className={styles['data-details-pair']}>
              <h5>Current Value:</h5>
              <ObjectInspector
                className={styles['data-details-obj-inspector']}
                includePrototypes={false}
                data={details.value?.currentValue}
              />
            </div>
            <div className={styles['data-details-pair']}>
              <h5>Formatted Value:</h5>
              <ObjectInspector
                className={styles['data-details-obj-inspector']}
                includePrototypes={false}
                data={details.value?.formattedValue}
              />
            </div>
            <div className={styles['data-details-pair']}>
              <h5>Model Value:</h5>
              <ObjectInspector
                className={styles['data-details-obj-inspector']}
                includePrototypes={false}
                data={details.value?.modelValue}
              />
            </div>
          </div>
          <div className={styles['data-details-section']}>
            <h4>Schema</h4>
            <div className={styles['data-details-pair']}>
              <h5>Type:</h5>
              <span className={styles['data-details-string-value']}>
                {`"${details.type?.type}"`}
              </span>
            </div>
            {details.type?.validation && (
              <div className={styles['data-details-pair']}>
                <h5>Validation:</h5>
                <ObjectInspector
                  className={styles['data-details-obj-inspector']}
                  includePrototypes={false}
                  data={details.type?.validation}
                />
              </div>
            )}
          </div>

          {details.validation && (
            <div className={styles['data-details-section']}>
              <h4>Validation</h4>
              <div className={styles['data-details-pair']}>
                <h5>Severity:</h5>
                <span className={styles['data-details-string-value']}>
                  {details.validation.severity}
                </span>
              </div>
              <div className={styles['data-details-pair']}>
                <h5>Message:</h5>
                <span className={styles['data-details-string-value']}>
                  {`"${details.validation.message}"`}
                </span>
              </div>
            </div>
          )}
        </div>
      ) : (
        <p>Select binding to view details</p>
      )}
    </div>
  );
};

interface DataProps {
  data: object;
  onSelect?: (astNode: ASTNode | ResolvedASTNode | undefined) => Promise<void>;
}

const getBindingFromSelectedNode = (
  node: ASTNode | ResolvedASTNode
): string => {
  const bindingSegments: Array<string | number> = [];
  let currentNode: ASTNode | ResolvedASTNode | undefined = node;

  while (currentNode.parent) {
    bindingSegments.push(currentNode.key);
    currentNode = currentNode.parent as ASTNode;
  }

  return bindingSegments.reverse().join('.');
};

export const Data = ({ data }: DataProps) => {

  const [binding,setBinding] = useState('')  
  const select = async (astNode: ASTNode | ResolvedASTNode | undefined) => {
    console.log('Select- ASTNode', astNode)
    const binding = astNode
      ? getBindingFromSelectedNode(astNode)
      : undefined;

    if (!binding) {
      return;
    }

    console.log('setting binding:', binding)
    //need to get player binding Data
    setBinding(binding)
    return binding
  }
  return (
  <Split
    direction="horizontal"
    className={styles['split']}
  >
    <div className={styles['data-panel-wrapper']}>
      {data ? (
        <ObjectInspector
          data={data}
          includePrototypes={false}
          expandLevel={7}
          onSelect = {select}
        />
      ) : (
        <div>No data available</div>
      )}
    </div>
    <div className={styles['data-panel-wrapper']}>
      <DataDetailsPanel details={binding} />
    </div>
  </Split>
)
};

