<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark p-3">
      <router-link class="navbar-brand" to="/">AT</router-link> 
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link active-class="active" exact class="nav-link" to="/">Главная</router-link> 
          </li>
          <li class="nav-item">
            <router-link active-class="active" class="nav-link" to="/workers">Сотрудники</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<style>


</style>

