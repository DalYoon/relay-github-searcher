import styled from "@emotion/styled";
import Icon from "components/atoms/Icon";
import SearchInput from "components/atoms/SearchInput";
import useQueryParams from "hooks/useQueryParams";

const NavBar = styled.nav`
  width: 100%;
  padding: 16px 32px;
  display: flex;
  align-items: center;
  background-color: #161b22;
  color: #fff;
`;

const GithubIcon = styled(Icon)`
  width: 32px;
  height: 32px;
  margin-right: 16px;
`;

export default function Header() {
  const keyword = useQueryParams("keyword");
  return (
    <NavBar>
      <GithubIcon type={"github"} />
      <SearchInput key={keyword} initKeyword={keyword} />
    </NavBar>
  );
}
