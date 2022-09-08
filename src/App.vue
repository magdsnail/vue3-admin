<template>
  <div class="layout">
      <!--头部区域-->
      <div class="header-container">
          <page-header></page-header>
      </div>
      <div class="main-container">
          <!--导航区域-->
          <div class="nav-container">
              <page-nav></page-nav>
          </div>
          <!--内容区域-->
          <div class="page-container">
              <router-view></router-view>
          </div>
      </div>
  </div>
</template>
