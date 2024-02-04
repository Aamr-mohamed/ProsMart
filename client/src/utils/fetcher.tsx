export const Fetcher = (url, data, method) => {
  const isJson = !(data instanceof FormData);
  const headers = isJson ? { "Content-Type": "application/json" } : {};

  return fetch(process.env.REACT_APP_API_URL + url, {
    method: method,
    credentials: "include",
    headers: headers,
    body: isJson ? JSON.stringify(data) : data,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `HTTP error! status: ${response.status} ${response.statusText}`
        );
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Fetching or Parsing Failed:", error);
      throw error;
    });
};
