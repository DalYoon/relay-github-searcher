/**
 * @generated SignedSource<<240374cf72a4e171e0c3d2738557e006>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type StarButtonFragment$data = {
  readonly id: string;
  readonly stargazerCount: number;
  readonly viewerHasStarred: boolean;
  readonly " $fragmentType": "StarButtonFragment";
};
export type StarButtonFragment$key = {
  readonly " $data"?: StarButtonFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"StarButtonFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "StarButtonFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "stargazerCount",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "viewerHasStarred",
      "storageKey": null
    }
  ],
  "type": "Repository",
  "abstractKey": null
};

(node as any).hash = "3e3991b245794d760138b9a924650475";

export default node;
