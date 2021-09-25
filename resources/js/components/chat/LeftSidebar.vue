<template>
  <div class="left-sidebar">
    <div class="top-content">
      <div class="user-action">
        <user-info :user="userInfo" />
        <div class="action">
          <li><icon src="/images/icon_mic.png" /></li>
          <li><icon src="/images/icon_screen.png" /></li>
          <li><icon src="/images/icon_add_user.png" /></li>
        </div>
      </div>
      <input-text type="search" />
    </div>
    <list-customer />
  </div>
</template>

<script>
import ListCustomer from "./ListCustomer";
import UserInfo from "../common/UserInfo";
import InputText from "../common/InputText";
import Icon from "../common/Icon";

export default {
  name: "LeftSidebar",
  components: { ListCustomer, UserInfo, InputText, Icon },
  data() {
    return {
      userInfo: {
        avatar: "http://hoangthinhelt.com.vn/public/img/product/no-img.png",
        name: "田中田太郎",
        address: "xxxxxx@xxx.com",
      },
    };
  },
};
</script>
