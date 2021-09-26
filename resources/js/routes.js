import Home from "./components/Home.vue";
import LayoutMeeting from "./components/LayoutMeeting.vue";
import LayoutChat from "./components/chat/LayoutChat.vue";
import ShareScreen from "./components/ShareScreen.vue";

export const routes = [
    {
        name: "home",
        path: "/",
        component: Home
    },
    {
        name: "meet",
        path: "/meet",
        component: LayoutMeeting
    },
    {
        name: "chat",
        path: "/chat",
        component: LayoutChat
    },
    {
        name: "share",
        path: "/share",
        component: ShareScreen
    }
];
