import graphql from "babel-plugin-relay/macro";
import { useFragment } from "react-relay";

import { PresenterFramgnet$key } from "./__generated__/PresenterFramgnet.graphql";

const Fragment = graphql`
  fragment PresenterFramgnet on Query {
    repository(owner: "facebook", name: "relay") {
      name
    }
  }
`;

type Props = {
  query: PresenterFramgnet$key;
};

export default function Presenter({ query }: Props) {
  const { repository } = useFragment(Fragment, query);
  console.log(repository);
  return (
    <div>
      <h1>Search</h1>
    </div>
  );
}
