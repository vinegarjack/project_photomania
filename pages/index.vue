<template>
  <div class="container">
    <ul>
      <li v-for="photo in photos">
        <b-card class="text-center"
                :img-src="photo.image"
        >
          <div class="bg-secondary text-light">
            {{photo.id}}
          </div>
        </b-card>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'Home',
  async asyncData ({ $axios }) {
    let photos = []
    try {
      photos = await $axios.$get('/photo')
    }  catch (e) {
      console.log(e.response)
    }

    return { photos }
  }

}
</script>

<style scoped lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  text-align: center;
  padding-top: 1rem;
  li {
    width: 500px;
    list-style: none;
    text-center{
      height: 150px;
    }
  }
}


</style>
