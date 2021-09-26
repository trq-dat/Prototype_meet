<template>
  <div>
    <home />
    <div class="wrapper-center">
      <div class="share-screen-wrapper">
        <div class="layout">
          <div class="top-tool">
            <icon class="gray-icon" src="/images/icon_zoom_out.png" />
            <icon class="gray-icon" src="/images/icon_zoom_in.png" />
            <icon class="gray-icon" src="/images/icon_reload.png" />
            <icon class="gray-icon" src="/images/icon_close.png" />
          </div>
          <img class="img-share" src="/images/bg_share_screen.png" />
          <div class="bottom-tool">
            <div class="tool">
              <icon class="icon-colors" src="/images/img_colors.png" />
              <icon class="gray-icon" src="/images/icon_search_extra.png" />
              <icon class="gray-icon" src="/images/icon_needle.png" />
              <icon class="gray-icon" src="/images/icon_pen.png" />
              <icon class="gray-icon" src="/images/icon_pen_large.png" />
              <icon class="gray-icon" src="/images/icon_eraser.png" />
              <div class="group-icon">
                <icon
                  class="tool-icon p-0 mb-2"
                  src="/images/icon_plus_extra.png"
                />
                <icon class="tool-icon p-0" src="/images/icon_minus.png" />
              </div>
            </div>
            <div class="notice">
              ここにコメントが入りますここにコメントが入りますここにコメントが入りますここにコメントが入りますここにコメントが入りますここに
              コメントが入りますここにコメントが入りますここにコメントが入りますここにコメントが入りますここにコメントが入りますここに
            </div>
          </div>
        </div>
        <div class="sidebar">
          <div class="list-user-vertical">
            <div class="user" v-for="(user, index) in users" :key="index">
              <div class="item">
                <user-meeting :user="user" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
 
<script>
import Icon from "./common/Icon";
import Home from "./Home";
import UserMeeting from "./UserMeeting";

export default {
  name: "ShareScreen",
  components: {
    Icon,
    Home,
    UserMeeting,
  },
  props: {},
  data() {
    return {
      users: [
        {
          isFriend: true,
          name: "name1",
          avatar: "/images/user_1.png",
          size: 'small',
        },
        {
          isFriend: false,
          name: "name2",
          avatar: "/images/user_2.png",
          size: 'small',
        },
        {
          isFriend: false,
          name: "name3",
          avatar: "/images/user_3.png",
          size: 'small',
        },
        {
          isFriend: false,
          name: "name4",
          avatar: "/images/user_4.png",
          size: 'small',
        },
        {
          isFriend: false,
          name: "name5",
          avatar: "/images/user_5.png",
          size: 'small',
        },
      ],
    };
  },
  mounted() {},
};
</script>