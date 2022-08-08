/**
 * @generated SignedSource<<95c400ac06841e59633cb4a9d693cc43>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PrimaryLanguageFragment$data = {
  readonly primaryLanguage: {
    readonly color: string | null;
    readonly name: string;
  } | null;
  readonly " $fragmentType": "PrimaryLanguageFragment";
};
export type PrimaryLanguageFragment$key = {
  readonly " $data"?: PrimaryLanguageFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"PrimaryLanguageFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PrimaryLanguageFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Language",
      "kind": "LinkedField",
      "name": "primaryLanguage",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "color",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Repository",
  "abstractKey": null
};

(node as any).hash = "be10cd545417baf15abcb88f28fb77a2";

export default node;
