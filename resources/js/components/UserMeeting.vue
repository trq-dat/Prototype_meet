<template>
  <div class="user-wrapper">
    <img :src="user.avatar" />
    <div class="user-popup">
      <icon v-if="user.isFriend" src="/images/icon_circle_image.png" />
      <icon v-else src="/images/icon_card.png" />
    </div>
  </div>
</template>
 
<script>
import Icon from "./common/Icon";

export default {
  name: "User",
  components: {
    Icon,
  },
  props: { user: Object },
  data() {
    return {
      //
    };
  },
  mounted() {
    // console.log(this.$props);
  },
};
</script>