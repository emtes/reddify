window.addEventListener("load", () => {
  console.log("Hello, world!");
  const params = new URLSearchParams(window.location.hash);
  const token = params.get("#access_token");
  console.log(token);
});
