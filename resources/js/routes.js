import Meeting from "./components/pages/Meeting.vue";
import Chat from "./components/pages/Chat.vue";
import Share from "./components/pages/Share.vue";

export const routes = [
    {
        name: "meet",
        path: "/meet",
        component: Meeting
    },
    {
        name: "chat",
        path: "/chat",
        component: Chat
    },
    {
        name: "share",
        path: "/share",
        component: Share
    }
];
