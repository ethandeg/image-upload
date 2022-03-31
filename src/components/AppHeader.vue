<template>
    <div class="ui secondary pointing menu">
        <a href="/" class="active item">
            Image Storage
        </a>

        <div class="right menu">
            <a href="#" class="ui item" @click="login">Login</a>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
    name: 'AppHeader',
    methods: {
        ...mapActions(['login'])
    }
    //if want methods outside of map actions, do the following context
    //methods: {
        //...mapActions(['login']),
        //some other func
    //}
}

</script>

<style scoped>

</style>