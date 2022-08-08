import styled from "@emotion/styled";
import graphql from "babel-plugin-relay/macro";
import { useFragment, useMutation } from "react-relay";
import { useState } from "react";
import { compactNumber } from "utils/parsers";
import FilledStar from "components/atoms/FilledStar";
import EmptyStar from "components/atoms/EmptyStar";

import type { StarButtonFragment$key } from "./__generated__/StarButtonFragment.graphql";
import type { StarButtonAddMutation } from "./__generated__/StarButtonAddMutation.graphql";
import type { StarButtonRemoveMutation } from "./__generated__/StarButtonRemoveMutation.graphql";

const Fragment = graphql`
  fragment StarButtonFragment on Repository {
    id
    stargazerCount
    viewerHasStarred
  }
`;

const AddMutation = graphql`
  mutation StarButtonAddMutation($repositoryId: ID!) {
    addStar(input: { starrableId: $repositoryId }) {
      starrable {
        id
        stargazerCount
        viewerHasStarred
      }
    }
  }
`;

const RemoveMutation = graphql`
  mutation StarButtonRemoveMutation($repositoryId: ID!) {
    removeStar(input: { starrableId: $repositoryId }) {
      starrable {
        id
        stargazerCount
        viewerHasStarred
      }
    }
  }
`;

type Props = { query: StarButtonFragment$key };
export default function StarButton({ query }: Props) {
  const fragmentRefs = useFragment(Fragment, query);
  const { id, stargazerCount, viewerHasStarred } = fragmentRefs;

  const [isHovered, setIsHovered] = useState(false);

  const [addStar, isAddingStar] =
    useMutation<StarButtonAddMutation>(AddMutation);

  const [removeStar, isRemovingStar] =
    useMutation<StarButtonRemoveMutation>(RemoveMutation);

  const onClickButton = () => {
    if (isAddingStar || isRemovingStar) return;
    else
      viewerHasStarred
        ? removeStar({ variables: { repositoryId: id } })
        : addStar({ variables: { repositoryId: id } });
  };

  return (
    <Container
      onClick={onClickButton}
      isHovered={isHovered}
      onMouseEnter={() => !isHovered && setIsHovered(true)}
      onMouseLeave={() => isHovered && setIsHovered(false)}
    >
      {viewerHasStarred ? (
        <FilledStar
          style={{ fill: isHovered ? "#58a6ff" : "#8b9493", marginRight: 4 }}
        />
      ) : (
        <EmptyStar
          style={{ fill: isHovered ? "#58a6ff" : "#8b9493", marginRight: 4 }}
        />
      )}
      {compactNumber(stargazerCount)}
    </Container>
  );
}

const Container = styled.div<{ isHovered: boolean }>`
  color: ${({ isHovered }) => (isHovered ? "#58a6ff" : "#8b9493")};
  display: flex;
  align-items: center;
  height: 14px;
  cursor: pointer;
`;
