import LoginOut from "./loginOut";
import ElTest from "./elTest";
import "./plugins/element";
import "./style.scss";
const components = [LoginOut, ElTest];
const install = Vue => {
  // 全局注册组件
  components.forEach(item => {
    Vue.component(item.name, item);
  });
};

// 判断是否直接引入文件，如果是，就不用调用Vue.use()
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default install;
export { LoginOut, ElTest };
// fonts文件夹下字体是elementui字体，没有运行报错
