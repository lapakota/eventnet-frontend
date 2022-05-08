async function logout(token: string) {
  return fetch("http://localhost:5203/api/auth/logout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      Accept: "application/json",
      Authorization: token,
    },
  })
    .then((x) => x.json())
    .catch((err) => console.error(err));
}

export { logout };
