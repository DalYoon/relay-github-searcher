import styled from "@emotion/styled";
import { ChangeEvent, FormEvent, useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";

const Input = styled.input`
  width: 272px;
  height: 30px;
  border: 1px solid #30363d;
  font-size: 12px;
  background-color: #0d1117;
  color: #fff;
  padding: 0px 12px;
  border-radius: 8px;
  :focus {
    outline: none;
  }
`;

type Props = {
  initKeyword?: string | null;
};

export default function SearchInput({ initKeyword }: Props) {
  const navigate = useNavigate();

  const [keyword, setKeyword] = useState(initKeyword || "");

  const onChange = ({
    currentTarget: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setKeyword(value);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (keyword === "") return;
    navigate({
      pathname: "/search",
      search: `?${createSearchParams({ keyword })}`,
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <Input value={keyword} onChange={onChange} />
    </form>
  );
}
