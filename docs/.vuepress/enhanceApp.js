import Vue from 'vue'
import Elegance from 'elegance-ui'
import 'elegance-ui/lib/index.css'
// import moudle from '../../packages/index'

// console.log(111, moudle.DemoOne)
console.log(222, Elegance)
 
export default ({
  Vue,
}) => {
  Vue.use(Elegance)
  // Vue.use(moudle.DemoOne)
}