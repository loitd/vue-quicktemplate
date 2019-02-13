<template>
<b-navbar toggleable="md" type="light" variant="faded">
    <b-container>
        <!-- <b-navbar-toggle> for use with the <b-collapse is-nav> component. -->
        <b-navbar-toggle target="sidebar-wrapper" @click.native="navSidebarTongled" v-if="isSidebar == 'yes'">
            <span v-bind:style="this.$store.getters.sidebarButton.navright"><font-awesome-icon :icon="['fas', 'angle-double-right']" /></span>
            <span v-bind:style="this.$store.getters.sidebarButton.navleft"><font-awesome-icon :icon="['fas', 'angle-double-left']" /></span><!-- when closed -->
        </b-navbar-toggle>
        <!-- The <b-navbar-brand> generates a link if href is provided, or a <router-link> if to is provided. If neither is given it renders as a <div> tag. -->
        <b-navbar-brand center tag="h1" class="mb-0" to="/" exact>
            <span><font-awesome-icon icon="coffee" /></span> 
            {{ title }}
        </b-navbar-brand>
        <!-- <b-navbar-toggle> for use with the <b-collapse is-nav> component. -->
        <b-navbar-toggle target="nav_collapse" @click.native="navNavbarTongled">
            <span v-bind:style="this.$store.getters.tongledButton.navup"><font-awesome-icon :icon="['fas', 'angle-double-up']" /></span>
            <span v-bind:style="this.$store.getters.tongledButton.navdown"><font-awesome-icon :icon="['fas', 'angle-double-down']" /></span><!-- when closed -->
        </b-navbar-toggle>

        <!-- <b-collapse is-nav> for grouping and hiding navbar contents by a parent breakpoint. -->
        <b-collapse is-nav id="nav_collapse">

            <!-- <b-nav-form> for any form controls and actions. -->
            <b-nav-form class="searchbox" >
                <b-input-group size="sm">
                    <b-input-group-text slot="prepend">
                        <span><font-awesome-icon :icon="['fas', 'search']" /></span>
                    </b-input-group-text>
                    <b-form-input size="md" class="mr-sm-2" type="text" placeholder="Search ..." style="border-left: none;"/>
                </b-input-group>
            </b-nav-form>

            <!-- <b-navbar-nav> for a full-height and lightweight navigation (including support for dropdowns). -->
            <b-navbar-nav class="midnav">
                <!-- <b-nav-item> for link (and router-link) action items -->
                <b-nav-item to="/" exact>
                    <span><font-awesome-icon :icon="['fas', 'home']" /></span>
                    <span>Home</span>
                </b-nav-item>
                <b-nav-item to="/#course">
                    <font-awesome-layers full-width class="fa-1x" style="background:MistyRose">
                        <span><font-awesome-icon :icon="['fas', 'sun']" /></span>
                        <font-awesome-layers-text class="fa-layers-counter" transform="down-6 left-2 shrink-10" value="N" style="background:Tomato; font-size: 1.375rem;"/>
                        <!-- <span class="fa-layers-counter" style="background:Tomato; font-size: 1.375rem;">NEW</span> -->
                    </font-awesome-layers>
                    <span>Courses</span>
                </b-nav-item>
                <b-nav-item to="/#referals">
                    <span><font-awesome-icon :icon="['fas', 'gift']" /></span>
                    <span>Referals</span>
                </b-nav-item>
                <b-nav-item to="/#help"><!-- <b-nav-item> for link (and router-link) action items -->
                    <span><font-awesome-icon :icon="['fas', 'question']" /></span>
                    <span>Help</span>
                </b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto rightnav">
                <b-nav-item to="/#notification" right class="notification">
                    <font-awesome-layers full-width class="fa-1x">
                        <span><font-awesome-icon :icon="['fas', 'bell']" /></span>
                        <font-awesome-layers-text class="fa-layers-counter" transform="down-12 left-2 shrink-12" value="" style="background: Tomato; color:White;"/>
                    </font-awesome-layers>
                </b-nav-item>
                <!-- <b-nav-item-dropdown> for navbar dropdown menus -->
                <b-nav-item-dropdown right class="profiledd">
                    <!-- Using button-content slot -->
                    <template slot="button-content">
                        <b-img-lazy id="userthumb" rounded="circle" thumbnail src="https://picsum.photos/64/64/?image=89" style="" width="28" height="28" blank-color="#bbb" alt="img" />
                        <span>Username</span>
                    </template>
                    <b-dropdown-item to="#profile">Profile</b-dropdown-item>
                    <b-dropdown-item to="#signout">Signout</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>

        </b-collapse><!-- collapse -->
    </b-container>
</b-navbar><!-- whole navbar -->

    <!-- navbar-1.vue -->
</template>

<script>
export default {
    name: 'Navbar',
    data: function() {
        return {
        }
    },
    components: {},
    props: {
        // this props is for parents to send to components
        title: String,
        isSidebar: String, //yes or no
    }, 
    methods: {
        navNavbarTongled: function() {
            this.$store.commit('navbarTongled');
        },
        navSidebarTongled: function() {
            this.$store.commit('sidebarTongled');
        }
    },
    computed: {
    }
}
</script>

<style lang="scss" scoped>
// Import component styles
// @ is an alias to /src
// Splitted to a scss file mean packed, you can make any change here
@import "@/assets/scss/components/navbar.scss";
</style>
