<script>
import Navbar from './components/layout/navbar'

export default {
  name: 'app',
  components: { Navbar }
}
</script>

<template>
    <div id="app">
        <div id="wrapper">
            <navbar/>
        </div>
        <router-view/>
    </div>
</template>
