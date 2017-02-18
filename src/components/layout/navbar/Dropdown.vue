<script>
export default {
  name: 'Dropdown',
  props: ['icon', 'dClass', 'link', 'action'],
  computed: {
    hasLink: function () {
      return this.link != null
    }
  }
}
</script>

<template>
    <li class="dropdown">
        <a class="dropdown-toggle" data-toggle="dropdown" href="#">
            <i :class="['fa fa-fw', icon]"></i> <i class="fa fa-caret-down"></i>
        </a>
        <ul :class="['dropdown-menu', dClass]">
            <slot></slot>
            <li v-if="hasLink">
                <a class="text-center" :href="link">
                    <strong>{{ action }}</strong>
                    <i class="fa fa-angle-right"></i>
                </a>
            </li>
        </ul>
    </li>
</template>
