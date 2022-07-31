import graphql from "babel-plugin-relay/macro";
import { Suspense } from "react";
import { useLazyLoadQuery } from "react-relay";
import Presenter from "./Presenter";

import type { ContainerQuery } from "./__generated__/ContainerQuery.graphql";

const Query = graphql`
  query ContainerQuery {
    repository(owner: "facebook", name: "relay") {
      name
    }
    ...PresenterFramgnet
  }
`;

export default function Container() {
  const query = useLazyLoadQuery<ContainerQuery>(Query, {});
  return (
    <Suspense fallback={"Loading..."}>
      <Presenter query={query} />
    </Suspense>
  );
}
