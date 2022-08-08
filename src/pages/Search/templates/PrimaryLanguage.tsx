import styled from "@emotion/styled";
import graphql from "babel-plugin-relay/macro";
import { useFragment } from "react-relay";

import type { PrimaryLanguageFragment$key } from "./__generated__/PrimaryLanguageFragment.graphql";

const Fragment = graphql`
  fragment PrimaryLanguageFragment on Repository {
    primaryLanguage {
      color
      name
    }
  }
`;

const Container = styled.div`
  margin-left: 8px;
  display: flex;
  align-items: center;
`;

const Dot = styled.div<{ bgColor: string }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ bgColor }) => bgColor};
  margin-right: 4px;
`;

type Props = {
  query: PrimaryLanguageFragment$key;
};

const PrimaryLanguage = ({ query }: Props) => {
  const { primaryLanguage } = useFragment(Fragment, query);
  const color = primaryLanguage?.color;
  const name = primaryLanguage?.name;

  if (!name || !color) return null;
  else
    return (
      <Container>
        <Dot bgColor={color} />
        {name}
      </Container>
    );
};

export default PrimaryLanguage;
