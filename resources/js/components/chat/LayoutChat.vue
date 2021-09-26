<template>
  <div>
    <home />
    <div class="wrapper-chat col">
      <div class="row">
        <div class="col-3 px-0"><left-sidebar /></div>
        <div class="col-6 px-0"><chat-content /></div>
        <div class="col-3 px-0"><right-sidebar /></div>
      </div>
    </div>
  </div>
</template>

<script>
import ChatContent from "./ChatContent";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import Home from "../Home";

export default {
  name: "LayoutChat",
  components: {
    LeftSidebar,
    RightSidebar,
    ChatContent,
    Home,
  },
  data() {
    return {
      //
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
