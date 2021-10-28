<template>
  <div>{{ msg }}</div>
</template>
<script>
export default {
  data() {
    return { msg: 123 };
  },
  beforeCreate() {
    console.log(this.$axios.post);
  },
};
</script>
