<script>
export default {
  name: 'Task',
  props: ['to', 'name', 'complete', 'type']
}
</script>

<template>
    <li>
        <a :href="to">
            <div>
                <p>
                    <strong>{{ name }}</strong>
                    <span class="pull-right text-muted">{{ complete }}% Complete</span>
                </p>
                <div class="progress progress-striped active">
                    <div :class="'progress-bar progress-bar-' + type" role="progressbar" :aria-valuenow="complete" aria-valuemin="0" aria-valuemax="100" :style="'width: ' + complete + '%'">
                        <span class="sr-only">{{ complete }}% Complete</span>
                    </div>
                </div>
            </div>
        </a>
    </li>
</template>
