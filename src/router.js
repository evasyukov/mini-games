import { createMemoryHistory, createRouter } from "vue-router"

import HomeView from "./components/HomeView.vue"
import GuessNumber from "./components/GuessNumber.vue"
import Gallows from "./components/Gallows.vue"

const routes = [
  { path: "/", component: HomeView },
  { path: "/guess-number", component: GuessNumber },
  { path: "/gallows", component: Gallows },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router
