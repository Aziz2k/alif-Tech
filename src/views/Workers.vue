<template>
  <div class="about p-4">
    <div class="d-flex justify-content-between">
      <div class="title h2 font-weight-bold"> Список сотрудников </div>
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
        Добавить сотрудника
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-plus"
          viewBox="0 0 16 16">
          <path
            d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
          <path fill-rule="evenodd"
            d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
        </svg>
      </button>
    </div>
    <div class="btns my-3 d-flex align-items-center ">
      <div class="filts d-flex align-items-center">
        <button type="button" @click="filter('all'), btn=1" :class="{'active':btn==1}" class="btn btn-outline-primary mr-2 btn-sm"> Все </button>
        <button type="button" @click="filter('Мужчина'), btn=2" :class="{'active':btn==2}" class="btn btn-outline-primary mr-2 btn-sm"> Мужчина </button>
        <button type="button" @click="filter('Женщина'), btn=3" :class="{'active':btn==3}" class="btn btn-outline-primary btn-sm"> Женщина </button>
      </div>
      <div class="filts d-flex align-items-center">
        <button type="button" @click="filter('IT'), btn=4" :class="{'active':btn==4}" class="btn btn-outline-primary mx-2 btn-sm"> IT </button>
        <button type="button" @click="filter('Бухгалтерия'), btn=5" :class="{'active':btn==5}" class="btn btn-outline-primary mr-2 btn-sm"> Бухгалтерия </button>
        <button type="button" @click="filter('Маркетинг'), btn=6" :class="{'active':btn==6}" class="btn btn-outline-primary btn-sm"> Маркетинг </button>
      </div>
    </div>
    <div class="WorkersTable">
      <table class="table mt-3">
        <thead>
          <tr>
            <th scope="col">№</th>
            <th scope="col">ФИО</th>
            <th scope="col">Дата рождения</th>
            <th scope="col">Пол</th>
            <th scope="col">Отдел</th>
            <th scope="col">Должность</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="( worker , i ) of FiltWorkers" :key="i">
            <td>{{i + 1}}</td>
            <td>{{worker.name}}</td>
            <td>{{worker.date}}</td>
            <td>{{worker.gender}}</td>
            <td>{{worker.depart}}</td>
            <td>{{worker.post}}</td>
            <td class="text-right">
              <router-link :to="{name: 'ViewWorkers',params: {id:worker.id}}">
                <button type="button" @click="show(worker.id)" class="btn btn-light mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-eye"
                  viewBox="0 0 16 16">
                  <path
                    d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                </svg>
              </button>
              </router-link>
              <button type="button" data-target="#exampleModal" data-toggle="modal" class="btn btn-warning mr-4" @click="edit(worker)">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-pencil"
                  viewBox="0 0 16 16">
                  <path
                    d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                </svg>
              </button>
              <button type="button" @click="del(worker.id)" class="btn btn-danger">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor"
                  class="bi bi-person-x" viewBox="0 0 16 16">
                  <path
                    d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                  <path fill-rule="evenodd"
                    d="M12.146 5.146a.5.5 0 0 1 .708 0L14 6.293l1.146-1.147a.5.5 0 0 1 .708.708L14.707 7l1.147 1.146a.5.5 0 0 1-.708.708L14 7.707l-1.146 1.147a.5.5 0 0 1-.708-.708L13.293 7l-1.147-1.146a.5.5 0 0 1 0-.708z" />
                </svg>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" v-show="!isShow" id="exampleModalLabel">Новый сотрудник</h5>
            <h5 class="modal-title" v-show="isShow" id="exampleModalLabel">Изменит данные сотрудника</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form action="">
              <div class="form-group">
                <label>Ф.И.О.</label>
                <input type="text" v-model="worker.name" class="form-control">
              </div>
              <div class="form-group">
                <label>День рождения:</label>
                <input type="date" v-model="worker.date" class="form-control">
              </div>
              <div class="form-row">
                <div class="form-check">
                  <input class="form-check-input" v-model="worker.gender" type="radio" name="exampleRadios"
                    id="exampleRadios1" value="Мужчина" checked>
                  <label class="form-check-label mr-2" for="exampleRadios1">
                    Мужчина
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" v-model="worker.gender" type="radio" name="exampleRadios"
                    id="exampleRadios2" value="Женщина">
                  <label class="form-check-label" for="exampleRadios2">
                    Женщина
                  </label>
                </div>
              </div>
              <select v-model="worker.depart" class="custom-select mt-3">
                <option value="null">Выберите отдел</option>
                <option value="Бухгалтерия">Бухгалтерия</option>
                <option value="IT">IT</option>
                <option value="Маркетинг">Маркетинг</option>
              </select>
              <div class="form-group mt-3">
                <label>Должность</label>
                <input type="text" v-model="worker.post" class="form-control">
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="close()">Закрыть</button>
            <button type="button" v-show="!isShow" class="btn btn-primary" data-dismiss="modal" @click="add()">Добавить</button>
            <button type="button" v-show="isShow" class="btn btn-primary" data-dismiss="modal" @click="save()">Сохранить</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
  export default {
    name: 'Home',
    data: () => ({
      worker: {
        depart: null
      },
      isShow:false,
      btn:1
    }),
    methods: {
      add() {
        this.$store.dispatch('addNewWorker', this.worker)
        this.worker = {
          depart: null
        }
      },
      del(id){
        this.$store.dispatch('delWorker',id)
      },
      edit(worker) {
        this.worker = worker
        this.isShow = true
      },
      show(id){
        this.$store.getters.showWorker(id)
      },
      close() {
        this.worker = {
          depart: null
        }
        this.isShow = false
      },
      save() {
        axios.put('http://localhost:3000/workers/' + this.worker.id, this.worker)
          .then(response => {
            this.workers.forEach(work => {
              if (work.id == response.data.id) {
                work = response.data
              }
            })
          })
        this.worker = {
        depart: null
        },
        this.isShow = false
      },
      filter(i) {
        this.filt = i
        this.$store.getters.getFilter(this.filt)
      }
    },
    computed:{
      workers(){
        return this.$store.getters.workers
      },
      FiltWorkers(){
        return  this.$store.getters.FiltWorkers
      }
    },
    created() {
      this.$store.dispatch('allGetWorker')
    }
  }
</script>