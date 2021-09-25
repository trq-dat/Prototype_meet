<template>
  <div class="chat-content-wapper">
    <div class="top-content">
      <div class="group-action">
        <div class="group-info">
          <icon src="/images/users.png" /> xxOxOxOxOxOxx
        </div>
        <div class="action">
          <li><icon src="/images/icon_book.png" /></li>
          <li><icon src="/images/icon_screen.png" /></li>
        </div>
      </div>
      <input-text type="search" />
    </div>
    <conversation />
    <div class="bottom-action">
      <div class="input-msg">
        <input-text />
      </div>
      <div class="action">
        <icon src="/images/icon_letter.png" />
        <icon src="/images/icon_dots.png" />
        <icon src="/images/icon_smile.png" />
      </div>
    </div>
  </div>
</template>

<script>
import InputText from "../common/InputText";
import Icon from "../common/Icon";
import Conversation from "./Conversation";

export default {
  name: "ChatContent",
  components: { Conversation, Icon, InputText },
  data() {
    return {
      //
    };
  },
};
</script>
