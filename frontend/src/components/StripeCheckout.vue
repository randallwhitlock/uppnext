<template>
  <div>
    <button @click="checkout">Checkout</button>
  </div>
</template>

<script>
export default {
  methods: {
    checkout() {
      this.$checkout.open({
        name: "Add Payment Details Below:",
        currency: "USD",
        amount: 9.99,
        token: token => {
          console.log(token);
          console.log("This went through correctly**********************");
        }
      });
    }
  }
};
</script>

