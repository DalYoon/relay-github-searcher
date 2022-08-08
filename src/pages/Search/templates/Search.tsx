import graphql from "babel-plugin-relay/macro";
import { useLazyLoadQuery } from "react-relay";
import SearchResult from "./SearchResult";

import type { SearchQuery } from "./__generated__/SearchQuery.graphql";

const Query = graphql`
  query SearchQuery($keyword: String!) {
    ...SearchResultFragment @arguments(keyword: $keyword)
  }
`;

type Props = { keyword: string };
export default function Search({ keyword }: Props) {
  const fragmentRefs = useLazyLoadQuery<SearchQuery>(Query, { keyword });
  return <SearchResult query={fragmentRefs} />;
}
