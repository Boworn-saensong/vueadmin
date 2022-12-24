import Vue from "vue";
import VueRouter from "vue-router";
import page1 from "../views/page1.vue";
import page2 from "../views/page2.vue";
import YearOne from "../views/year1.vue";
import YearTwo from "../views/year2.vue";
import YearTree from "../views/year3.vue";
import YearFour from "../views/year4.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: page1,
  },
  {
    path: "/page2",
    name: "PageTwo",
    component: page2,
  },
  {
    path: "/year1",
    name: "YearOne",
    component: YearOne,
  },
  {
    path: "/year2",
    name: "YearTwo",
    component: YearTwo,
  },
  {
    path: "/year3",
    name: "YearTree",
    component: YearTree,
  },
  {
    path: "/year4",
    name: "YearFour",
    component: YearFour,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
