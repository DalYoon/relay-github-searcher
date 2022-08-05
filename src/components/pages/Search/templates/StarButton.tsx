import styled from "@emotion/styled";
import graphql from "babel-plugin-relay/macro";
import { useFragment, useMutation } from "react-relay";

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

  const [addStar, isAddingStar] =
    useMutation<StarButtonAddMutation>(AddMutation);

  const [removeStar, isRemovingStar] =
    useMutation<StarButtonRemoveMutation>(RemoveMutation);

  const isLoading = isAddingStar || isRemovingStar;

  const onClickButton = () => {
    viewerHasStarred
      ? removeStar({ variables: { repositoryId: id } })
      : addStar({ variables: { repositoryId: id } });
  };

  return (
    <Button disabled={isLoading} onClick={onClickButton}>
      {stargazerCount}⭐️
    </Button>
  );
}

const Button = styled.button`
  width: 40px;
  height: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
