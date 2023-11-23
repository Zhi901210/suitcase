import { createApp } from 'vue'
// 引入 VeeValidate 元件跟功能
import { Field, Form, ErrorMessage, defineRule, configure} from 'vee-validate';
// 引入 VeeValidate 的驗證規則
import AllRules from '@vee-validate/rules';
// 引入 VeeValidate 的 i18n 功能
import { localize, setLocale } from '@vee-validate/i18n';
// 引入 VeeValidate 的繁體中文語系檔
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';

import axios from 'axios'
import VueAxios from 'vue-axios'
import "bootstrap"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faScrewdriverWrench} from '@fortawesome/free-solid-svg-icons'
import { faHeadphonesSimple } from '@fortawesome/free-solid-svg-icons'
import App from './App.vue'
import router from './router'

import './assets/all.scss'

// 使用 Object.keys 將 AllRules 轉為陣列並使用 forEach 迴圈將驗證規則加入 VeeValidate
Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});

// 將當前 VeeValidate 的語系設定為繁體中文
configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true,
});
setLocale('zh_TW');

const app = createApp(App)
// 掛載 Global 的 VeeValidate 元件
app.component('VField', Field);
app.component('VForm', Form);
app.component('ErrorMessage', ErrorMessage);

app.component(FontAwesomeIcon)

app.component('font-awesome-icon', FontAwesomeIcon)
library.add(faArrowRight, faHouse, faArrowLeft, faUser, faThumbsUp, faTruckFast, faScrewdriverWrench, faHeadphonesSimple)

app.use(VueAxios, axios)
app.use(router)
app.mount('#app')
