import React, { FormEvent, useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";

type Props = {
  initKeyword?: string | null;
};

export default function SearchInput({ initKeyword }: Props) {
  const navigate = useNavigate();

  const [keyword, setKeyword] = useState(initKeyword || "");

  const onChange = ({
    currentTarget: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
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
      <input value={keyword} onChange={onChange} />
    </form>
  );
}
