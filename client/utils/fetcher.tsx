export const fetcher = (url, data, method) =>
  fetch(window.location.origin + url, {
    method: method,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((r) => {
    return r.json();
  });
