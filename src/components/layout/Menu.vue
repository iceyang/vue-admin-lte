<template>
  <li v-if="menu.path">
    <router-link :to="menu.path">
      <i class="fa fa-circle-o"></i> <span>{{ menu.name }}</span>
    </router-link>
  </li>
  <li v-else class="treeview">
    <a href="#">
      <i class="fa fa-share"></i>
      <span>{{ menu.name }}</span>
      <span class="pull-right-container">
        <i class="fa fa-angle-left pull-right"></i>
      </span>
    </a>
    <ul class="treeview-menu">
      <Menu v-for="(node, index) in menu.list" :key="node.name + index" :menu="node" />
    </ul>
  </li>
</template>

<script>
export default {
  name: 'Menu',
  props: ['menu']
}
</script>
