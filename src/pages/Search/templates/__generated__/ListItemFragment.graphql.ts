/**
 * @generated SignedSource<<10b95293700ed5e42cf66bc482d93968>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ListItemFragment$data = {
  readonly description: string | null;
  readonly nameWithOwner: string;
  readonly url: any;
  readonly " $fragmentSpreads": FragmentRefs<"PrimaryLanguageFragment" | "StarButtonFragment">;
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
      "name": "nameWithOwner",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "description",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "url",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "StarButtonFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "PrimaryLanguageFragment"
    }
  ],
  "type": "Repository",
  "abstractKey": null
};

(node as any).hash = "38bc28f9ef79d3f804eaacbfcab06657";

export default node;
