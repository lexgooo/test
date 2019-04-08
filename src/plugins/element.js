import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css';
import { Button, RadioGroup, RadioButton, Menu, Submenu, MenuItem, MenuItemGroup } from 'element-ui'

const elComponents = [Button, RadioGroup, RadioButton, Menu, Submenu, MenuItem, MenuItemGroup]

elComponents.forEach(item => {  
    Vue.use(item)
})
