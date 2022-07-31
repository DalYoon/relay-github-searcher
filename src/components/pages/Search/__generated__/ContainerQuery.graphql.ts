/**
 * @generated SignedSource<<8c5e98b0f337d2070777cea58c8b1073>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ContainerQuery$variables = {};
export type ContainerQuery$data = {
  readonly repository: {
    readonly name: string;
  } | null;
  readonly " $fragmentSpreads": FragmentRefs<"PresenterFramgnet">;
};
export type ContainerQuery = {
  response: ContainerQuery$data;
  variables: ContainerQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "name",
    "value": "relay"
  },
  {
    "kind": "Literal",
    "name": "owner",
    "value": "facebook"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ContainerQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Repository",
        "kind": "LinkedField",
        "name": "repository",
        "plural": false,
        "selections": [
          (v1/*: any*/)
        ],
        "storageKey": "repository(name:\"relay\",owner:\"facebook\")"
      },
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "PresenterFramgnet"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ContainerQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Repository",
        "kind": "LinkedField",
        "name": "repository",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": "repository(name:\"relay\",owner:\"facebook\")"
      }
    ]
  },
  "params": {
    "cacheID": "fb5028390f7a13a0f5f3781a1fca3fa5",
    "id": null,
    "metadata": {},
    "name": "ContainerQuery",
    "operationKind": "query",
    "text": "query ContainerQuery {\n  repository(owner: \"facebook\", name: \"relay\") {\n    name\n    id\n  }\n  ...PresenterFramgnet\n}\n\nfragment PresenterFramgnet on Query {\n  repository(owner: \"facebook\", name: \"relay\") {\n    name\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "5c2c0211fc388c29b2b6b9f4d3df6439";

export default node;
