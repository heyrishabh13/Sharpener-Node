function handleSubmit(e) {
  e.preventDefault();
  console.log("submit function called");
  const obj = {
    productName: e.target.productName.value,
  };

  axios.post("http://localhost:3000/api/product", obj).then((result) => {
    console.log(result.data.value);
  });
}
