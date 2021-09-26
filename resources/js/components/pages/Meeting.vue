<template>
  <div class="container-meeting">
    <div class="header">
      <div class="user-info">
        <img
          class="avatar"
          src="http://hoangthinhelt.com.vn/public/img/product/no-img.png"
        />
        <div class="info-content">
          <p>ゲスト名ゲスト名</p>
          <span>クライアント名が入りますクライアント名が入ります</span>
        </div>
      </div>
      <div class="tool">
        <div class="tool-external">
          <ul>
            <li><img src="/images/icon_on_cam.png" /></li>
            <li><img src="/images/icon_on_mic.png" /></li>
            <li><img src="/images/icon_circle.png" /></li>
            <li><img src="/images/icon_connect.png" /></li>
            <li><img src="/images/icon_share_screen.png" /></li>
            <li><img src="/images/icon_text.png" /></li>
            <li><img src="/images/icon_three_dot.png" /></li>
          </ul>
        </div>
        <div class="tool-zoom">
          <ul>
            <li><img src="/images/icon_zoom_out.png" /></li>
            <li><img src="/images/icon_zoom_in.png" /></li>
          </ul>
        </div>
        <div class="toggle">
          <img src="/images/icon_close.png" />
        </div>
      </div>
    </div>
    <div class="container content">
      <div class="user-item">
        <div class="user-wrapper">
          <img class="user-img" src="/images/user_1.png" />
          <div class="user-popup">
            <img src="/images/icon_card.png" />
          </div>
        </div>
      </div>
      <div class="user-item">
        <div class="user-wrapper">
          <img class="user-img" src="/images/user_2.png" />
          <div class="user-popup">
            <img src="/images/icon_card.png" />
          </div>
        </div>
      </div>
      <div class="user-item">
        <div class="user-wrapper">
          <img class="user-img" src="/images/user_3.png" />
          <div class="user-popup">
            <img src="/images/icon_card.png" />
          </div>
        </div>
      </div>
      <div class="user-item">
        <div class="user-wrapper">
          <img class="user-img" src="/images/user_4.png" />
          <div class="user-popup">
            <img src="/images/icon_card.png" />
          </div>
        </div>
      </div>
      <div class="user-item">
        <div class="user-wrapper">
          <img class="user-img" src="/images/user_5.png" />
          <div class="user-popup">
            <img src="/images/icon_card.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Meeting",
  components: {},
  data() {
    return {};
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
