<script>
import Dropdown from './Dropdown'
import Message from './type/Message'
import Task from './type/Task'

export default {
  name: 'TopLinks',
  components: { Dropdown, Message, Task }
}
</script>

<template>
    <ul class="nav navbar-top-links navbar-right">
        <dropdown icon="fa-envelope"
            d-class="dropdown-messages"
            link="#"
            action="Ver as mensagens">

            <message name="João" at="Ontem"> Hu3 </message> <li class="divider"></li>
            <message name="João" at="Ontem"> Hu3 </message> <li class="divider"></li>

        </dropdown>

        <dropdown icon="fa-tasks"
            d-class="dropdown-tasks"
            link="#"
            action="Ver as tarefas">

            <task name="Task 1" complete="40" type="success"></task> <li class="divider"></li>
            <task name="Task 2" complete="20" type="info"></task> <li class="divider"></li>
            <task name="Task 3" complete="60" type="warning"></task> <li class="divider"></li>
            <task name="Task 4" complete="80" type="danger"></task> <li class="divider"></li>

        </dropdown>

        <dropdown icon="fa-user"
            d-class="dropdown-user">

            <li><a href="#"><i class="fa fa-user fa-fw"></i> User Profile</a></li>
            <li><a href="#"><i class="fa fa-gear fa-fw"></i> Settings</a></li>
            <li class="divider"></li>
            <li><a href="#"><i class="fa fa-sign-out fa-fw"></i> Logout</a></li>

        </dropdown>
    </ul>
</template>
