<template>
  <div class="right-sidebar">
    <list-user />
    <div class="btn-add">
      <button class="btn-add-user">
        メンバーを追加
        <icon src="/images/icon_close.png" width="15" height="15" />
      </button>
    </div>
  </div>
</template>

<script>
import ListUser from "./ListUser";
import Icon from "../common/Icon";

export default {
  name: "RightSidebar",
  components: { ListUser, Icon },
  data() {
    return {
      //
    };
  },
};
</script>
