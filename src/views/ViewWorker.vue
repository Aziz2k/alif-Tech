<template>
  <div class="View p-4">
    <div class="card w-50">
      <div class="card-header bg-dark d-flex align-items-center justify-content-between">
        <router-link to='/workers'>
          <svg version="1.1" id="Capa_1" width='25px' x="0px" y="0px"
          viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
            <g>
              <g>
                <path fill='#ffffff' d="M492,236H68.442l70.164-69.824c7.829-7.792,7.859-20.455,0.067-28.284c-7.792-7.83-20.456-7.859-28.285-0.068
                  l-104.504,104c-0.007,0.006-0.012,0.013-0.018,0.019c-7.809,7.792-7.834,20.496-0.002,28.314c0.007,0.006,0.012,0.013,0.018,0.019
                  l104.504,104c7.828,7.79,20.492,7.763,28.285-0.068c7.792-7.829,7.762-20.492-0.067-28.284L68.442,276H492
                  c11.046,0,20-8.954,20-20C512,244.954,503.046,236,492,236z"/>
                </g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g>
              </g><g></g><g></g><g></g><g></g>
            </svg>
        </router-link>
        <div class="btns">
          <button type="button" data-target="#exampleModal" data-toggle="modal" class="btn btn-warning mr-2" @click="edit(view)">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-pencil"
                  viewBox="0 0 16 16">
                  <path
                    d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                </svg>
          </button>
          <router-link to="/workers">
            <button type="button" @click="del(view.id)" class="btn btn-danger">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor"
                  class="bi bi-person-x" viewBox="0 0 16 16">
                  <path
                    d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                  <path fill-rule="evenodd"
                    d="M12.146 5.146a.5.5 0 0 1 .708 0L14 6.293l1.146-1.147a.5.5 0 0 1 .708.708L14.707 7l1.147 1.146a.5.5 0 0 1-.708.708L14 7.707l-1.146 1.147a.5.5 0 0 1-.708-.708L13.293 7l-1.147-1.146a.5.5 0 0 1 0-.708z" />
                </svg>
            </button>
          </router-link>
        </div>
      </div>
      <div class="card-body">
        <img src="../assets/Avatar.png" class="rounded float-left mr-4" alt="">
        <div class="h1 mb-5">{{ view.name }}</div>
        <div class="d-flex ">
          <div class="d-flex flex-column ">
            <div class="h5 mb-4">Дата рождения :</div>
            <div class="h5"> Отдел : </div>
          </div>
          <div class="d-flex flex-column">
            <div class="col h6 mb-3 mr-2 mt-1">{{view.date}}</div>
            <div class="col h6 mb-0 mr-2"> {{view.depart}} </div>
          </div>
          <div class="d-flex flex-column ">
            <div class="h5 mb-4">Пол :</div>
            <div class="h5"> Должность : </div>
          </div>
          <div class="d-flex flex-column">
            <div class="col h6 mb-3 mr-2 mt-1">{{view.gender}}</div>
            <div class="col h6 mb-0"> {{view.post}} </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Изменит данные сотрудника</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form action="">
              <div class="form-group">
                <label>Ф.И.О.</label>
                <input type="text" v-model="view.name" class="form-control">
              </div>
              <div class="form-group">
                <label>День рождения:</label>
                <input type="date" v-model="view.date" class="form-control">
              </div>
              <div class="form-row">
                <div class="form-check">
                  <input class="form-check-input" v-model="view.gender" type="radio" name="exampleRadios"
                    id="exampleRadios1" value="Мужчина" checked>
                  <label class="form-check-label mr-2" for="exampleRadios1">
                    Мужчина
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" v-model="view.gender" type="radio" name="exampleRadios"
                    id="exampleRadios2" value="Женщина">
                  <label class="form-check-label" for="exampleRadios2">
                    Женщина
                  </label>
                </div>
              </div>
              <select v-model="view.depart" class="custom-select mt-3">
                <option value="null">Выберите отдел</option>
                <option value="Бухгалтерия">Бухгалтерия</option>
                <option value="IT">IT</option>
                <option value="Маркетинг">Маркетинг</option>
              </select>
              <div class="form-group mt-3">
                <label>Должность</label>
                <input type="text" v-model="view.post" class="form-control">
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Закрыть</button>
            <button type="button" class="btn btn-primary" data-dismiss="modal" @click="save()">Сохранить</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  // data:()=>({
  //   
  // }),
  computed: {
      view() {
        return this.$store.getters.viewWorker
      }
    },
    methods:{
      del(id){
        this.$store.dispatch('delWorker',id)
      },
      edit(view) {
        this.worker = view
      },
      save() {
        axios.put('http://localhost:3000/workers/' + this.view.id, this.view)
          .then(response => {
            ( work => {
              if (work.id == response.data.id) {
                work = response.data
              }
            })
          })
      }
    }
}
</script>

<style>

</style>