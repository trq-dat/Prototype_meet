<template>
  <div>
    <home />
    <div class="container-meeting">
      <div class="header">
        <user-info :user="userInfo" />
        <div class="tool">
          <div class="tool-external">
            <ul>
              <li><icon src="/images/icon_on_cam.png" /></li>
              <li><icon src="/images/icon_on_mic.png" /></li>
              <li><icon src="/images/icon_circle.png" /></li>
              <li><icon src="/images/icon_connect.png" /></li>
              <li><icon src="/images/icon_share_screen.png" /></li>
              <li><icon src="/images/icon_text.png" /></li>
              <li><icon src="/images/icon_three_dot.png" /></li>
            </ul>
          </div>
          <div class="tool-zoom">
            <ul>
              <li><icon src="/images/icon_zoom_out.png" /></li>
              <li><icon src="/images/icon_zoom_in.png" /></li>
            </ul>
          </div>
          <div class="toggle">
            <icon src="/images/icon_close.png" />
          </div>
        </div>
      </div>
      <div class="container content">
        <div class="user" v-for="(user, index) in users" :key="index">
          <user-meeting :user="user" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Home from "./Home";
import UserMeeting from "./UserMeeting";
import UserInfo from "./common/UserInfo";
import Icon from "./common/Icon";

export default {
  name: "LayoutMeeting",
  components: {
    UserMeeting,
    UserInfo,
    Icon,
    Home,
  },
  data() {
    return {
      userInfo: {
        avatar: "http://hoangthinhelt.com.vn/public/img/product/no-img.png",
        name: "ゲスト名ゲスト名",
        address: "クライアント名が入りますクライアント名が入ります",
      },
      users: [
        {
          isFriend: true,
          name: "name1",
          avatar: "/images/user_1.png",
        },
        {
          isFriend: false,
          name: "name2",
          avatar: "/images/user_2.png",
        },
        {
          isFriend: false,
          name: "name3",
          avatar: "/images/user_3.png",
        },
        {
          isFriend: false,
          name: "name4",
          avatar: "/images/user_4.png",
        },
        {
          isFriend: false,
          name: "name5",
          avatar: "/images/user_5.png",
        },
      ],
    };
  },
  created() {
    console.log("created");
  },
  mounted() {
    console.log("mounted");
  },
  methods: {},
};
</script>
