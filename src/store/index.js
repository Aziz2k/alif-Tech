import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    workers:[],
    workerId:'',
    filt:'',
  },
  mutations: {
    worker(state,payload){
      state.workers.push(payload)
    },
    getAllworker(state,payload){
      state.workers = payload
    },
    removeWorkers(state,payload){
      state.workers.splice(state.workers.findIndex(function(i){ return i.id === payload; }), 1);
    }
  },
  getters:{
    workers(state){
      return state.workers
    },
    getFilter(state) {
      return s=>{
        state.filt = s
      }  
    },
    CountWorkers(state){
      return state.workers.length
    },
    CountMan(state){
      let count = 0
      state.workers.filter(w =>{
        if (w.gender == 'Мужчина' )
          count++
        // return count
      })
      return count
    },
    CountWoman(state){
      let count = 0
      state.workers.filter(w =>{
        if (w.gender == 'Женщина' )
          count++
        // return count
      })
      return count
    },
    CountIT(state){
      let count = 0
      state.workers.filter(w =>{
        if (w.depart == 'IT' )
          count++
        // return count
      })
      return count
    },
    CountBookk(state){
      let count = 0
      state.workers.filter(w =>{
        if (w.depart == 'Бухгалтерия' )
          count++
        // return count
      })
      return count
    },
    CountMark(state){
      let count = 0
      state.workers.filter(w =>{
        if (w.depart == 'Маркетинг' )
          count++
        // return count
      })
      return count
    },
    FiltWorkers(state){
      return state.workers.filter(w => {
        if (state.filt == 'all') {
          return w
        }else if (state.filt == 'Мужчина' || state.filt == 'Женщина') {
            return w.gender.indexOf(state.filt) !==-1
        } else {
            return w.depart.indexOf(state.filt) !==-1
        }
      })
    },
    showWorker(state){
      return p => {
        state.workerId = p
      }
    },
    viewWorker(state){
      return state.workers.find(work => {
        if(work.id == state.workerId) 
        return work
      })
    }
  },
  actions: {
    addNewWorker(context,addWorker){
      axios.post('http://localhost:3000/workers', addWorker).then(response => {
        context.commit('worker', response.data)
      })
    },
    allGetWorker(context){
      axios.get('http://localhost:3000/workers').then(response => {
        context.commit('getAllworker', response.data)
      })
    },
    delWorker(context,id){
      axios.delete('http://localhost:3000/workers/'+id).then(response => {
        console.log(response)
        context.commit('removeWorkers',id)
      })
    }
  }
})
