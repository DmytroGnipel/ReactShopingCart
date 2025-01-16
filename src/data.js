async function getResponse() {
  const resp = await fetch("https://fakestoreapi.in/api/products?limit=12");
  const json = await resp.json();
  return json.products;
}

async function getData() {
  const resp = await getResponse();
  return resp.map((item) => {
    return {
      id: item.id,
      title: item.title,
      price: item.price,
      image: item.image,
      amount: 0,
    };
  });
}

export { getData };
