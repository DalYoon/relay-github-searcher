import graphql from "babel-plugin-relay/macro";
import { Suspense } from "react";
import { useLazyLoadQuery } from "react-relay";
import useQueryParams from "../../../hooks/useQueryParams";

import type { ContainerQuery } from "./__generated__/ContainerQuery.graphql";

import SearchInput from "../../templates/SearchInput";
import SearchResults from "./SearchResults";

type Props = {
  keyword: string;
};

const Query = graphql`
  query ContainerQuery($keyword: String!) {
    ...SearchResultsFragment @arguments(keyword: $keyword)
  }
`;

function Default() {
  return (
    <div>
      <h1>Search</h1>
      <SearchInput />
    </div>
  );
}

function Search({ keyword }: Props) {
  const query = useLazyLoadQuery<ContainerQuery>(Query, { keyword });
  return (
    <Suspense fallback={"Loading..."}>
      <SearchResults query={query} />
    </Suspense>
  );
}

export default function Container() {
  const keyword = useQueryParams("keyword");
  return keyword ? <Search keyword={keyword} /> : <Default />;
}
