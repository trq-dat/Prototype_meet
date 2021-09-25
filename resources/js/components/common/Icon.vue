<template>
  <div class="wrapper-icon" :style="itemStyles">
    <img v-bind:src="src"  />
  </div>
</template>

<script>
export default {
  name: "Icon",
  props: [ 'width', 'height', 'src' ],
  data() {
    return {
      //
    };
  },
  methods: {},
  computed: {
    itemStyles() {
      return {
        width: `${this.width + 'px' || '100%'}`,
        height: `${this.height + 'px'  || 'auto'}`,
        cursor: 'pointer',
        display: 'flex',
      };
    },
  },
};
</script>
