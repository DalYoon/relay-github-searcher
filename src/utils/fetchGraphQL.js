export default async function fetchGraphQL(text, variables) {
  const REACT_APP_GITHUB_AUTH_TOKEN = process.env.REACT_APP_GITHUB_AUTH_TOKEN;
  const REACT_APP_GITHUB_API_ENDPOINT = process.env.REACT_APP_GITHUB_API_ENDPOINT || "https://api.github.com/graphql";

  const response = await fetch(REACT_APP_GITHUB_API_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `bearer ${REACT_APP_GITHUB_AUTH_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: text,
      variables,
    }),
  });

  return await response.json();
}
