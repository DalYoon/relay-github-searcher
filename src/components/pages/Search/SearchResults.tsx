import graphql from "babel-plugin-relay/macro";
import { usePaginationFragment } from "react-relay";
import useQueryParams from "../../../hooks/useQueryParams";

import SearchInput from "../../templates/SearchInput";
import type { SearchResultsFragment$key } from "./__generated__/SearchResultsFragment.graphql";

const Fragment = graphql`
  fragment SearchResultsFragment on Query
  @argumentDefinitions(
    keyword: { type: "String!" }
    cursor: { type: "String", defaultValue: null }
    count: { type: "Int", defaultValue: 5 }
  )
  @refetchable(queryName: "SearchResultsPaginationQuery") {
    search(after: $cursor, first: $count, query: $keyword, type: REPOSITORY)
      @connection(key: "SearchResultsFragment_search") {
      edges {
        node {
          ... on Repository {
            id
            name
          }
        }
      }
    }
  }
`;

type Props = {
  query: SearchResultsFragment$key;
};

export default function Presenter({ query }: Props) {
  const keyword = useQueryParams("keyword");
  const {
    data: {
      search: { edges },
    },
    loadNext,
    hasNext,
  } = usePaginationFragment(Fragment, query);

  const onClickLoadMore = () => {
    if (hasNext) {
      loadNext(5);
    }
  };

  return (
    <div>
      <h1>Search</h1>
      <SearchInput initKeyword={keyword} />
      <ul>
        {edges?.map((edge) => {
          return <li key={edge?.node?.id}>{edge?.node?.name}</li>;
        })}
      </ul>
      <button onClick={onClickLoadMore}>Load More</button>
    </div>
  );
}
