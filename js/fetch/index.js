const fetchData = async () => {
  let response = await fetch("./db.json")
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};
fetchData();

const data = {  name: "Mahir" };

const postData = async () => {
  let res = await fetch("http://localhost:5050/posts", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  console.log(res);
};

// postData()
