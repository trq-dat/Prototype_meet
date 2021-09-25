<template>
  <div class="wrapper-msg wrapper-message-from">
    <div class="content">
      <div class="msg-tooltip">
        <div class="msg-arrow" />
        <span class="msg">{{content}}</span>
      </div>
      <span v-if="time" class="msg-time">{{time}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "MessageFrom",
  props: ['content', 'time'],
  components: {  },
  data() {
    return {
      //
    };
  },
  methods: {},
};
</script>
