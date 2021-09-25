<template>
      <div class="user-info">
        <img class="avatar" :src="user.avatar" />
        <div class="info-content">
          <p>{{ user.name }}</p>
          <span>{{ user.address }}</span>
        </div>
  </div>
</template>

<script>
export default {
  name: "UserInfo",
  props: { user: Object },
  data() {
    return {
      //
    };
  },
  methods: {},
};
</script>
