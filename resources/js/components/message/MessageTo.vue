<template>
  <div class="wrapper-msg wrapper-message-to">
    <icon src="/images/user.png" />
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
import Icon from "../common/Icon";

export default {
  name: "MessageTo",
  props: ['content', 'time'],
  components: { Icon },
  data() {
    return {
      //
    };
  },
  methods: {},
};
</script>
