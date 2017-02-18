<script>
export default {
  name: 'Sidebar'
}
</script>

<template>
    <div class="navbar-default sidebar" role="navigation" style="margin-top: 0px;">
        <div class="sidebar-nav navbar-collapse">
            <ul class="nav" id="side-menu">
                <li><router-link to="/" exact> <i class="fa fa-dashboard fa-fw"></i> Dashboard </router-link></li>
                <li><router-link to="/tables"> <i class="fa fa-table fa-fw"></i> Tables </router-link></li>
            </ul>
        </div>
    </div>
</template>
