/**
 * @generated SignedSource<<85b3ca8cf226cfa21e829e3d95629eb5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PresenterFramgnet$data = {
  readonly repository: {
    readonly name: string;
  } | null;
  readonly " $fragmentType": "PresenterFramgnet";
};
export type PresenterFramgnet$key = {
  readonly " $data"?: PresenterFramgnet$data;
  readonly " $fragmentSpreads": FragmentRefs<"PresenterFramgnet">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PresenterFramgnet",
  "selections": [
    {
      "alias": null,
      "args": [
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
      "concreteType": "Repository",
      "kind": "LinkedField",
      "name": "repository",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        }
      ],
      "storageKey": "repository(name:\"relay\",owner:\"facebook\")"
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "d03b34c4b2daf90bc9f749b6be549166";

export default node;
