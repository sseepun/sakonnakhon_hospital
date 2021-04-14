<template>
    <h2>Hello</h2>
</template>

<script>
export default {
  name: 'UserDashboardPage',
  components: {
      
  },
  created() {
    AOS.init({ easing: 'ease-in-out-cubic', duration: 750, once: true, offset: 10 });
  }
}
</script>
