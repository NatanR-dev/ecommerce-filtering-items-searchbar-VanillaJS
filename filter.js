fetch("https://fake-ecommerce-api.up.railway.app/api/items")
  .then((res) => res.json())
  .then((json) => {
    console.log(json);
  });
