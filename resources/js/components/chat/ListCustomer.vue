<template>
  <div class="list-customer">
    <perfect-scrollbar>
      <customer-chat />
      <customer-chat />
      <customer-chat />
      <customer-chat />
      <customer-chat />
      <customer-chat />
      <customer-chat />
      <customer-chat />
      <customer-chat />
      <customer-chat />
      <customer-chat />
      <customer-chat />
    </perfect-scrollbar>
  </div>
</template>

<script>
import CustomerChat from "./CustomerChat";
export default {
  name: "ListCustomer",
  components: { CustomerChat },
  data() {
    return {
      //
    };
  },
  methods: {},
};
</script>
