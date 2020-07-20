import ElTest from "./Index.vue";

/* istanbul ignore next */
ElTest.install = function(Vue) {
  Vue.component(ElTest.name, ElTest);
};

export default ElTest;
