<template>
  <div class="wrapper-input">
    <input :class="classInput" />
    <span v-if="isSearch" class="icon-search" />
  </div>
</template>

<script>
export default {
  name: "InputText",
  props: ["type"],
  data() {
    return {
      //
    };
  },
  methods: {},
  computed: {
    isSearch() {
      if (this.type == "search") {
        return true;
      }
      return false;
    },
    classInput() {
      if (this.type == "search") {
        return "prefix-icon";
      }
      return "";
    },
  },
};
</script>
