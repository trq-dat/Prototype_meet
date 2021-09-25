<template>
  <div class="conversation-wapper">
    <perfect-scrollbar>
      <message-to :content="msgTo[0]" time="00:00" />
      <message-to :content="msgTo[1]" />
      <message-from :content="msgFrom[0]" />
      <message-to :content="msgTo[2]" />
      <message-from :content="msgFrom[1]" />
      <message-to :content="msgTo[3]" />
      <message-from :content="msgFrom[2]" />
    </perfect-scrollbar>
  </div>
</template>

<script>
import MessageTo from "../message/MessageTo";
import MessageFrom from "../message/MessageFrom";

export default {
  name: "Conversation",
  components: { MessageTo, MessageFrom },
  data() {
    return {
      msgTo: [
        "クリックします。選択したレイヤー以外のすべてのレイヤーを非表示にするには、目のアイコンをAltキーを押しながらクリックします。夕方の来客キャンセルしますか？前日にも連絡はありました。",
        "お世話になった方や友人・家族へ手紙やカードを書く時に、相手を気遣う言葉を入れたいけれど、なかなかいいフレーズが思い浮かばない・・・という経験はないですか？ ここでは、そういうシーンで重宝するちょっと気の利いたお役立ちフレーズを用途別にまとめました。お世話になった方や友人・家族へ手紙やカードを書く時に、相手を気遣う言葉を入れたいけれど、ここでは、そういうシーンで重宝するちょっと気の利いたお役立ちフレーズを用途別にまとめました。",
        "あった方が良さそうですね。〇〇さんと××さん誘っておきます！役立ちフレーズを用途別にまとめました。役立ち役立ち。",
        "あった方が良さそうですね。〇〇さんと××さん誘っておきます！",
      ],
      msgFrom: [
        "了解です。社内打ち合わせしますか？",
        "了解です。社内打ち合わせしますか？",
        "お願いします",
      ],
    };
  },
};
</script>
