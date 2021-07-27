<template>
  <div class="home p-4">
    <div >
      <div class="title h2 font-weight-bold"> Главная </div>
    </div>
    <div class="d-flex justify-content-between my-4">
      <button @click="filter('all')" class="btn border rounded btn-primary p-4" style="width:250px" >
        <div class="d-flex align-items-center justify-content-center">
          {{CountWorkers}}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people-fill ml-2" viewBox="0 0 16 16">
            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
            <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
            <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
          </svg>
        </div>
        Все сотрудники
      </button>
      <button @click="filter('Мужчина')" class="btn border rounded btn-primary p-4" style="width:250px" >
        <div class="d-flex align-items-center justify-content-center">
          {{CountMan}}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill ml-2" viewBox="0 0 16 16">
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
          </svg>
        </div>
        Мужчины в нашем компании
      </button>
      <button @click="filter('Женщина')" class="btn border rounded btn-primary p-4" style="width:250px" >
        <div class="d-flex align-items-center justify-content-center">
          {{CountWoman}}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill ml-2" viewBox="0 0 16 16">
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
          </svg>
        </div>
        Женщины в нашем компании
      </button>
      <button @click="filter('IT')" class="btn border rounded btn-primary p-4" style="width:250px" >
        <div class="d-flex align-items-center justify-content-center">
          {{CountIT}}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-laptop ml-2" viewBox="0 0 16 16">
            <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
          </svg>
        </div>
        В отделе IT
      </button>
      <button @click="filter('Маркетинг')" class="btn border rounded btn-primary p-4" style="width:250px" >
        <div class="d-flex align-items-center justify-content-center">
          {{CountMark}}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-graph-up ml-2" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M0 0h1v15h15v1H0V0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5z"/>
          </svg>
        </div>
        В отделе Маркетинг
      </button>
      <button @click="filter('Бухгалтерия')" class="btn border rounded btn-primary p-4" style="width:250px">
        <div class="d-flex align-items-center justify-content-center">
          {{CountBookk}}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calculator ml-2" viewBox="0 0 16 16">
            <path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
            <path d="M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4z"/>
          </svg>
        </div>
        В отделе Бухгалтерии
      </button>
    </div>
    <div class="WorkersTable" style="height:295px;overflow:hidden">
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
          </tr>
        </tbody>
      </table>
    </div>
    <div class="btn w-100 mt-4 d-flex justify-content-end">
      <router-link to="/workers">
        <button type="button" class="btn btn-primary">
        Смотреть полный список
        </button>
      </router-link>
    </div>
  </div>
</template>


<script>
  export default ({
    data: () => ({
    }),
    computed:{
      FiltWorkers(){
        return  this.$store.getters.FiltWorkers
      },
      CountMan(){
        return this.$store.getters.CountMan
      },
      CountWoman(){
        return this.$store.getters.CountWoman
      },
      CountWorkers(){
        return this.$store.getters.CountWorkers
      },
      CountIT(){
        return this.$store.getters.CountIT
      },
      CountMark(){
        return this.$store.getters.CountMark
      },
      CountBookk(){
        return this.$store.getters.CountBookk
      }
    },
    methods:{
      filter(i) {
        this.filt = i
        this.$store.getters.getFilter(this.filt)
      }
    },
    created() {
      this.$store.dispatch('allGetWorker')
    },
  })
</script>
