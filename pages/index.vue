<template>
  <div>
    <h2>Home</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
      voluptatibus ullam reiciendis quo pariatur molestiae quasi harum eos
      facere numquam?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
      voluptatibus ullam reiciendis quo pariatur molestiae quasi harum eos
      facere numquam?111
    </p>
    <div>Practice fetch API:</div>
    <div>Currency: USD/{{ data.GBP.code }}</div>
    <div>Value: {{ data.GBP.value }}</div>
  </div>
</template>

<script setup>
const { data } = await useFetch("/api/currency/GBP");
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}
p {
  margin: 20px 0;
}
</style>
