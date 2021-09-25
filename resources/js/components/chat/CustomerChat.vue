<template>
  <div class="customer-wrapper">
    <div class="customer-info">
      <icon src="/images/user.png" />
      <div class="customer-name">
        <p class="mb-1">xx</p>
        <span>xxxxxx@xxx.com</span>
      </div>
    </div>
    <div class="customer-action">
      <icon class="p-2" :src="pathIconMic" />
      <icon class="p-2" :src="pathIconScreen" />
    </div>
  </div>
</template>

<script>
import Icon from "../common/Icon";
export default {
  name: "CustomerChat",
  components: {
    Icon,
  },
  props: ["isActive", "intoGroup"],
  data() {
    return {
      //
    };
  },
  created() {
    console.log("created");
  },
  mounted() {
    console.log("mounted");
  },
  methods: {},
  computed: {
    pathIconMic() {
      if (this.isActive) {
        return "/images/icon_mic_active.png";
      }
      return "/images/icon_mic.png";
    },
    pathIconScreen() {
      if (this.isActive) {
        return "/images/icon_screen_active.png";
      }
      if (this.intoGroup && !this.isActive) {
        return "/images/icon_camera.png";
      }
      return "/images/icon_screen.png";
    },
  },
};
</script>
