<script>
import Dropdown from './Dropdown'
import Message from './type/Message'
import Task from './type/Task'

export default {
  name: 'TopLinks',
  components: { Dropdown, Message, Task },
  data: function () {
    return {
      tasks: [
        { name: 'Task 1', complete: '40', type: 'success' },
        { name: 'Task 2', complete: '20', type: 'info' },
        { name: 'Task 3', complete: '60', type: 'warning' },
        { name: 'Task 4', complete: '80', type: 'danger' }
      ]
    }
  }
}
</script>

<template>
    <ul class="nav navbar-top-links navbar-right">
        <dropdown icon="fa-envelope" d-class="dropdown-messages"
            link="#"
            action="Ver as mensagens">

            <template v-for="n in 3">
                <message name="João" at="Ontem"> Hu3 </message>
                <li class="divider"></li>
            </template>

        </dropdown>

        <dropdown icon="fa-tasks" d-class="dropdown-tasks"
            link="#"
            action="Ver as tarefas">

            <template v-for="task in tasks">
                <task :name="task.name" :complete="task.complete" :type="task.type"/>
                <li class="divider"></li>
            </template>

        </dropdown>

        <dropdown icon="fa-user" d-class="dropdown-user">

            <li><a href="#"><i class="fa fa-user fa-fw"></i> User Profile</a></li>
            <li><a href="#"><i class="fa fa-gear fa-fw"></i> Settings</a></li>
            <li class="divider"></li>
            <li><a href="#"><i class="fa fa-sign-out fa-fw"></i> Logout</a></li>

        </dropdown>
    </ul>
</template>
