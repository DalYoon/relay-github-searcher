/**
 * @generated SignedSource<<bfe1ec271d21a6fad2f2b351c7adfca1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ListItemFragment$data = {
  readonly name: string;
  readonly " $fragmentSpreads": FragmentRefs<"StarButtonFragment">;
  readonly " $fragmentType": "ListItemFragment";
};
export type ListItemFragment$key = {
  readonly " $data"?: ListItemFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ListItemFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ListItemFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "StarButtonFragment"
    }
  ],
  "type": "Repository",
  "abstractKey": null
};

(node as any).hash = "fd1ed86f6b8f070a1b37bbb7e63c1149";

export default node;
