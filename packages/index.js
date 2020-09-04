import DemoOne from './DemoOne.vue'

const components = {
  DemoOne
}

const install = vue => {
  Object.keys(components).forEach(key => {
    vue.component(key, components[key])
  })  
}

Object.keys(components).forEach(key => {
  components[key].install = vue => {
    vue.component(key, components[key])
  }
})

export default {
  install,
  ...components
}