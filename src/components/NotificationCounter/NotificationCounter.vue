<template>
  <div class="component">
     <div class="dropdown">
       <a href="javascript:;" id="notification-center" class="icon-set globe-fill" data-toggle="dropdown">
         <span class="bubble" v-if="notificationCount>0">{{notificationCount}}</span>
       </a>
     </div>
  </div>
</template>

<script>
export default {
  name: 'NotificationCounter',
  computed: {
    notificationCount () {
      return this.$store.state.events.length
    }
  }
}
</script>
<style scope>
.bubble {
    border-radius: 100%;
    height: 14px;
    width: 14px;
    background-color: rgba(226, 32, 91, 0.77);
    color: #fff;
    position: relative;
    top: -6px;
    float: right;
    right: -5px;
    font-size: 0.7em;
}
</style>
