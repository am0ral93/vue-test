import Vue from "vue";
import VueMq from "vue-mq";

Vue.use(VueMq, {
  breakpoints: {
    sm: 769,
    md: 993,
    lg: Infinity
  }
});
export var checkSize = {
  computed: {
    showMobFn() {
      return this.$mq === 'sm';
    }
  },
};
