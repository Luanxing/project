import Vue from 'vue'
Vue.filter('Hourfilter', (data) => {
  if (!data) {
    return ''
  } else {
    var d = new Date(data * 1000)
    var hour = d.getHours()
    hour = ('00' + hour).slice(-2)
    return hour
  }
})
Vue.filter('Minutesfilter', (data) => {
  if (!data) {
    return ''
  } else {
    var d = new Date(data * 1000)
    var minute = d.getMinutes()
    minute = ('00' + minute).slice(-2)
    return minute
  }
})
