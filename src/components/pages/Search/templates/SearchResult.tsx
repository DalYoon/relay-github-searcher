import graphql from "babel-plugin-relay/macro";
import { usePaginationFragment } from "react-relay";
import ListItem from "./ListItem";

import type { SearchResultFragment$key } from "./__generated__/SearchResultFragment.graphql";

const Fragment = graphql`
  fragment SearchResultFragment on Query
  @argumentDefinitions(
    keyword: { type: "String!" }
    cursor: { type: "String", defaultValue: null }
    count: { type: "Int", defaultValue: 5 }
  )
  @refetchable(queryName: "SearchResultPaginationQuery") {
    search(after: $cursor, first: $count, query: $keyword, type: REPOSITORY)
      @connection(key: "SearchResultFragment_search") {
      edges {
        node {
          ... on Repository {
            id
            ...ListItemFragment
          }
        }
      }
    }
  }
`;

type Props = {
  query: SearchResultFragment$key;
};

export default function SearchResult({ query }: Props) {
  const { data, loadNext, hasNext } = usePaginationFragment(Fragment, query);
  const {
    search: { edges },
  } = data;

  const onClickLoadMore = () => {
    if (hasNext) loadNext(5);
  };

  return (
    <div>
      <ul>
        {edges?.map(
          (edge) =>
            !!edge?.node && <ListItem key={edge?.node?.id} query={edge?.node} />
        )}
      </ul>
      <button onClick={onClickLoadMore}>Load More</button>
    </div>
  );
}
