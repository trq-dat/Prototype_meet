<template>
  <div :class="wrapperClass">
    <img :class="imgClass" :src="user.avatar" />
    <div :class="popupClass">
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
  computed: {
    wrapperClass() {
      let clsName = "user-wrapper";
      if (this.user.size == "small") {
        clsName += " size-small";
      }
      return clsName;
    },
    imgClass() {
      let clsName = "img-def";
      if (this.user.size == "small") {
        clsName += " size-small";
      }
      return clsName;
    },
    popupClass() {
      let clsName = "user-popup";
      if (this.user.size == "small") {
        clsName += " size-small";
      }
      return clsName;
    },
  },
};
</script>