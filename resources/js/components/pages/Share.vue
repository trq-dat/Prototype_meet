<template>
  <div class="share-screen-wrapper">
    <div class="layout">
      <div class="top-tool">
        <img class="gray-icon" src="/images/icon_zoom_out.png" />
        <img class="gray-icon" src="/images/icon_zoom_in.png" />
        <img class="gray-icon" src="/images/icon_reload.png" />
        <img class="gray-icon" src="/images/icon_close.png" />
      </div>
      <img class="img-share" src="/images/bg_share_screen.png" />
      <div class="bottom-tool">
        <div class="tool">
          <img class="icon-colors" src="/images/img_colors.png" />
          <img class="gray-icon" src="/images/icon_search_extra.png" />
          <img class="gray-icon" src="/images/icon_needle.png" />
          <img class="gray-icon" src="/images/icon_pen.png" />
          <img class="gray-icon" src="/images/icon_pen_large.png" />
          <img class="gray-icon" src="/images/icon_eraser.png" />
          <div class="group-icon">
            <icon
              class="tool-icon p-0 mb-2"
              src="/images/icon_plus_extra.png"
            />
            <img class="tool-icon p-0" src="/images/icon_minus.png" />
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
  </div>
</template>

<script>
export default {
  name: "Share",
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
