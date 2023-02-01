export default defineEventHandler(async (event) => {
  //   //handle query params

  //   const { name } = getQuery(event);

  //   //handle post data
  //   const { age } = await readBody(event);

  //   api call with private key
  const { data } = await $fetch(
    "https://api.currencyapi.com/v3/latest?apikey=SBHG0J9fXyZOv2IVdIcIQpKlz5BQEM8HgsdimNhb&currencies=EUR%2CUSD%2CCAD%2CHKD%2CGBP"
  );

  //   return { message: `hello, ${name}! You are ${age} years old.` };

  return data;
});
