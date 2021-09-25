<template>
  <div class="list-user">
    <perfect-scrollbar>
      <customer-chat :isActive=true />
      <customer-chat :isActive=true />
      <customer-chat :intoGroup=true />
      <customer-chat :isActive=true />
    </perfect-scrollbar>
  </div>
</template>

<script>
import CustomerChat from "./CustomerChat";
export default {
  name: "ListUser",
  components: { CustomerChat },
  data() {
    return {
      //
    };
  },
  methods: {},
};
</script>
