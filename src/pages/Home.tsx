import styled from "@emotion/styled";

export default function Home() {
  return (
    <Page>
      <Main>
        <h1>Repository Searcher with Relay JS</h1>
      </Main>
    </Page>
  );
}

const Page = styled.div`
  color: #fff;
`;

const Main = styled.div`
  width: 100%;
  padding: 16px 32px;
`;
