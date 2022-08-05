import styled from "@emotion/styled";
import graphql from "babel-plugin-relay/macro";
import { useFragment } from "react-relay";
import StarButton from "./StarButton";

import type { ListItemFragment$key } from "./__generated__/ListItemFragment.graphql";

const Fragment = graphql`
  fragment ListItemFragment on Repository {
    name
    ...StarButtonFragment
  }
`;

type Props = { query: ListItemFragment$key };
export default function ListItem({ query }: Props) {
  const fragmentRefs = useFragment(Fragment, query);
  const { name } = fragmentRefs;

  return (
    <Li>
      <Title>{name}</Title>
      <StarButton query={fragmentRefs} />
    </Li>
  );
}

const Li = styled.li`
  width: 100%;
  padding: 8px;
`;

const Title = styled.h3`
  color: #58a6ff;
`;
