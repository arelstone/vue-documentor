<template>
    <div id="headline">
        <h2 class="title">
            <router-link :to="link"><slot></slot></router-link>
        </h2>
    </div>
</template>

<script>
  export default {
    name: 'headline',
    introduction: '',
    description: '',
    token: '',
    props: {
      link: {type: String, required: true}
    }
  }
</script>

<style scoped lang="scss">

</style>