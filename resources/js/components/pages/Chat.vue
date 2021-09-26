<template>
  <div class="container-chat col">
    <div class="row">
      <!-- Left sidebar -->
      <div class="col-3 px-0">
        <div class="left-sidebar">
          <div class="top-content">
            <div class="user-action">
              <div class="user-info">
                <img
                  class="avatar"
                  src="http://hoangthinhelt.com.vn/public/img/product/no-img.png"
                />
                <div class="info-content">
                  <p>田中田太郎</p>
                  <span>xxxxxx@xxx.com</span>
                </div>
              </div>
              <div class="action">
                <li><img src="/images/icon_mic.png" /></li>
                <li><img src="/images/icon_screen.png" /></li>
                <li><img src="/images/icon_add_user.png" /></li>
              </div>
            </div>
            <div class="wrapper-input">
              <input type="text" class="prefix-icon" />
              <span class="icon-search" />
            </div>
          </div>
          <div class="list-customer">
            <perfect-scrollbar>
              <div
                v-for="(user, index) in new Array(20).fill(0).map((_, i) => i)"
                :key="index"
              >
                <div class="customer-wrapper">
                  <div class="customer-info">
                    <img src="/images/user.png" />
                    <div class="customer-name">
                      <p class="mb-1">〇〇×××</p>
                      <span>xxxxxx@xxx.com</span>
                    </div>
                  </div>
                  <div class="customer-action">
                    <img class="p-2" src="/images/icon_mic.png" />
                    <img class="p-2" src="/images/icon_screen.png" />
                  </div>
                </div>
              </div>
            </perfect-scrollbar>
          </div>
          <!-- <list-customer /> -->
        </div>
      </div>
      <!-- <chat-content /> -->
      <div class="col-6 px-0">
        <div class="chat-content-wrapper">
          <div class="top-content">
            <div class="group-action">
              <div class="group-info">
                <img src="/images/users.png" /> xxOxOxOxOxOxx
              </div>
              <div class="action">
                <li><img src="/images/icon_book.png" /></li>
                <li><img src="/images/icon_screen.png" /></li>
              </div>
            </div>
            <div class="wrapper-input">
              <input type="text" class="prefix-icon" />
              <span class="icon-search" />
            </div>
          </div>
          <div class="conversation-wapper">
            <perfect-scrollbar>
              <div class="wrapper-msg wrapper-message-to">
                <img class="wrapper-icon" src="/images/user.png" />
                <div class="content">
                  <div class="msg-tooltip">
                    <div class="msg-arrow" />
                    <span class="msg"
                      >クリックします。選択したレイヤー以外のすべてのレイヤーを非表示にするには、目のアイコンをAltキーを押しながらクリックします。夕方の来客キャンセルしますか？前日にも連絡はありました。</span
                    >
                  </div>
                  <span class="msg-time">00:00</span>
                </div>
              </div>
              <div class="wrapper-msg wrapper-message-to">
                <img class="wrapper-icon" src="/images/user.png" />
                <div class="content">
                  <div class="msg-tooltip">
                    <div class="msg-arrow" />
                    <span class="msg"
                      >お世話になった方や友人・家族へ手紙やカードを書く時に、相手を気遣う言葉を入れたいけれど、なかなかいいフレーズが思い浮かばない・・・という経験はないですか？
                      ここでは、そういうシーンで重宝するちょっと気の利いたお役立ちフレーズを用途別にまとめました。お世話になった方や友人・家族へ手紙やカードを書く時に、相手を気遣う言葉を入れたいけれど、ここでは、そういうシーンで重宝するちょっと気の利いたお役立ちフレーズを用途別にまとめました。</span
                    >
                  </div>
                </div>
              </div>
              <div class="wrapper-msg wrapper-message-from">
                <div class="content">
                  <div class="msg-tooltip">
                    <div class="msg-arrow" />
                    <span class="msg">了解です。社内打ち合わせしますか？</span>
                  </div>
                </div>
              </div>
              <div class="wrapper-msg wrapper-message-to">
                <img class="wrapper-icon" src="/images/user.png" />
                <div class="content">
                  <div class="msg-tooltip">
                    <div class="msg-arrow" />
                    <span class="msg"
                      >あった方が良さそうですね。〇〇さんと××さん誘っておきます！役立ちフレーズを用途別にまとめました。役立ち役立ち。</span
                    >
                  </div>
                </div>
              </div>
              <div class="wrapper-msg wrapper-message-from">
                <div class="content">
                  <div class="msg-tooltip">
                    <div class="msg-arrow" />
                    <span class="msg">了解です。社内打ち合わせしますか？</span>
                  </div>
                </div>
              </div>
              <div class="wrapper-msg wrapper-message-to">
                <img class="wrapper-icon" src="/images/user.png" />
                <div class="content">
                  <div class="msg-tooltip">
                    <div class="msg-arrow" />
                    <span class="msg"
                      >あった方が良さそうですね。〇〇さんと××さん誘っておきます！</span
                    >
                  </div>
                </div>
              </div>
              <div class="wrapper-msg wrapper-message-from">
                <div class="content">
                  <div class="msg-tooltip">
                    <div class="msg-arrow" />
                    <span class="msg">お願いします</span>
                  </div>
                </div>
              </div>
            </perfect-scrollbar>
          </div>
          <div class="bottom-action">
            <div class="input-msg">
              <div class="wrapper-input">
                <input type="text" />
              </div>
            </div>
            <div class="action">
              <img src="/images/icon_letter.png" />
              <img src="/images/icon_dots.png" />
              <img src="/images/icon_smile.png" />
            </div>
          </div>
        </div>
      </div>
      <!-- <right-sidebar /> -->
      <div class="col-3 px-0">
        <div class="right-sidebar">
          <div class="list-user">
            <div class="customer-wrapper">
              <div class="customer-info">
                <img src="/images/user.png" />
                <div class="customer-name">
                  <p class="mb-1">〇〇×××</p>
                  <span>xxxxxx@xxx.com</span>
                </div>
              </div>
              <div class="customer-action">
                <img class="p-2" src="/images/icon_mic_active.png" />
                <img class="p-2" src="/images/icon_screen_active.png" />
              </div>
            </div>
            <div class="customer-wrapper">
              <div class="customer-info">
                <img src="/images/user.png" />
                <div class="customer-name">
                  <p class="mb-1">×××〇〇</p>
                  <span>xxxxxx@xxx.com</span>
                </div>
              </div>
              <div class="customer-action">
                <img class="p-2" src="/images/icon_mic_active.png" />
                <img class="p-2" src="/images/icon_screen_active.png" />
              </div>
            </div>
            <div class="customer-wrapper">
              <div class="customer-info">
                <img src="/images/user.png" />
                <div class="customer-name">
                  <p class="mb-1">×〇×〇×</p>
                  <span>xxxxxx@xxx.com</span>
                </div>
              </div>
              <div class="customer-action">
                <img class="p-2" src="/images/icon_mic.png" />
                <img class="p-2" src="/images/icon_camera.png" />
              </div>
            </div>
            <div class="customer-wrapper">
              <div class="customer-info">
                <img src="/images/user.png" />
                <div class="customer-name">
                  <p class="mb-1">××××××〇〇×〇×</p>
                  <span>xxxxxx@xxx.com</span>
                </div>
              </div>
              <div class="customer-action">
                <img class="p-2" src="/images/icon_mic_active.png" />
                <img class="p-2" src="/images/icon_screen_active.png" />
              </div>
            </div>
          </div>
          <div class="btn-add">
            <button class="btn-add-user">
              メンバーを追加
              <img src="/images/icon_close.png" style="margin-left: 10px" width="15" height="15" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Chat",
  components: {},
  data() {
    return {
      //
    };
  },
};
</script>
