<script>
import TopLinks from './TopLinks'

export default {
  name: 'navbar',
  components: { TopLinks }
}
</script>

<template>
    <nav class="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="sr-only">Toggle navigation</span>
                <template v-for="n in 3"> <span class="icon-bar"></span> </template>
            </button>
            <router-link :to="{ name: 'home' }" class="navbar-brand">SB Admin v2.0</router-link>
        </div>
        <top-links/>
    </nav>
</template>
