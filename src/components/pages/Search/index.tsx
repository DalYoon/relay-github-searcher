import styled from "@emotion/styled";
import { Suspense } from "react";
import useQueryParams from "../../../hooks/useQueryParams";
import Search from "./templates/Search";

export default function SearchPage() {
  const keyword = useQueryParams("keyword");
  return (
    <Container>
      <h1>Search</h1>
      {/* <Input initKeyword={keyword} /> */}
      {!!keyword && (
        <Suspense fallback={"Loading..."}>
          <Search keyword={keyword} />
        </Suspense>
      )}
    </Container>
  );
}

const Container = styled.div``;
