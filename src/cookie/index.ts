import makeFetchCookie from "fetch-cookie";

(async () => {
  const fetchCookie = makeFetchCookie(fetch);

  const response = await fetchCookie("https://google.com").then((res) =>
    res.text()
  );

  console.log(response);
})();
