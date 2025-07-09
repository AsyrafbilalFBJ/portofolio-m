<template>
    <div class="row bg-primary" style="height:1.5vh">&ensp;</div>
    <div class="wrapper">
        <nav>
            <router-link to="/" exact class="text-decoration-none">
                <h5 class="text-uppercase text-dark fw-semibold m-0 align-middle">Asyrafbilal Fadhila Bhinar Jaya</h5>
            </router-link>
            <input type="checkbox" name="" id="toggle">
            <label for="toggle" v-on:click="expand">
                <span v-if="expanded">
                    <i class="material-icons">
                        expand_less
                    </i>
                </span>
                <span v-else class="text-primary">
                    <i class="material-icons">
                        expand_more
                    </i>
                </span>
                
            </label>
            <div class="menu">
                <ul class="m-0 p-0">
                    <li class="w-100 p-2 m1">
                        <router-link to="/portofolio-m/" exact class="text-decoration-none text-center txt-black w-100" v-on:click="close">
                            <p class="text-uppercase fw-normal m-auto">Work</p>
                        </router-link>
                    </li>
                    <li class="w-100 p-2">
                        <router-link to="/portofolio-m/about" exact class="text-decoration-none text-center txt-black w-100" v-on:click="close">
                            <p class="text-uppercase fw-normal m-auto">About</p>
                        </router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
    <!-- <div class="row bg-primary" style="height:1.5vh">&ensp;</div>
    <div class="row m-5">
        <div class="col-1">
        </div>
        <div class="col-lg-7 col-sm-12">
            <router-link to="/" exact class="text-decoration-none">
                <h5 class="text-uppercase text-dark fw-semibold m-0 align-middle">Asyrafbilal Fadhila Bhinar Jaya</h5>
            </router-link>
        </div>
        <div class="col-1">
        </div>
        <div class="col-lg-1 col-sm-12">
            <router-link to="/" exact class="text-decoration-none text-end txt-black">
                <p class="text-uppercase fw-normal m-0">Work</p>
            </router-link>
        </div>
        <div class="col-lg-1 col-sm-12">
            <router-link to="/about" exact class="text-decoration-none text-end txt-black">
                <p class="text-uppercase fw-normal m-0">About</p>
            </router-link>
        </div>
        <div class="col-1">
        </div>
    </div> -->
</template>

<script>
export default {
    name: 'NavHeader',
    props: {
        msg: String
    },
    data(){
        return {
            expanded: false
        }
    },
    methods: {
        expand(){
            this.expanded = !this.expanded;
        },
        close(){
            document.getElementById("toggle").checked = false;
            this.expand();
        }
    }
}
</script>

<style>
.txt-black{
    color: black
}
.router-link-exact-active{
    color: #0D6EFD
}
</style>