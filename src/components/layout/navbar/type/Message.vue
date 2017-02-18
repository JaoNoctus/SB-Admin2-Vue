<script>
export default {
  name: 'Message',
  props: ['name', 'at', 'to']
}
</script>

<template>
    <li>
        <a :href="to">
            <div>
                <strong>{{ name }}</strong>
                <span class="pull-right text-muted">
                    <em>{{ at }}</em>
                </span>
            </div>
            <div><slot></slot></div>
        </a>
    </li>
</template>
