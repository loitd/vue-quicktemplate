<template>
    <b-navbar class="vqtNavbar" type="light" variant="faded">
        <b-navbar-nav>
            <b-nav-item>Dashboard</b-nav-item>
        </b-navbar-nav>
        <!-- Searchbox -->
        <b-navbar-nav class="ml-auto">
            <!-- <b-nav-form> for any form controls and actions. -->
            <b-nav-form class="searchbox" >
                <b-input-group size="sm">
                    <b-input-group-text slot="prepend">
                        <span><font-awesome-icon :icon="['fas', 'search']" /></span>
                    </b-input-group-text>
                    <b-form-input size="md" class="mr-sm-2" type="text" placeholder="Search ..." style="border-left: none;"/>
                </b-input-group>
            </b-nav-form>
            <!-- profile -->
            <b-nav-item-dropdown right no-caret text="">
                <template slot="button-content">
                    <em><font-awesome-icon :icon="['fas', 'user']" /></em>
                </template>
                <b-dropdown-item href="#"><font-awesome-icon :icon="['fas', 'user']" class="mr-1" />My Profile</b-dropdown-item>
                <b-dropdown-divider />
                <b-dropdown-item to="/login"><font-awesome-icon :icon="['fas', 'sign-in-alt']" class="mr-1" />Login</b-dropdown-item>
                <b-dropdown-item href="#"><font-awesome-icon :icon="['fas', 'sign-out-alt']" class="mr-1" />Logout</b-dropdown-item>
            </b-nav-item-dropdown>
        </b-navbar-nav>
    </b-navbar>
</template>

<script>
export default {
    name: 'Navbar',
}
</script>

<style lang="scss" scoped>
    // For mobile -> hide it
    .vqtNavbar {
        display: none;
        padding: 1rem 1rem;
        min-height: 50px;
        max-height: 60px;
    }

    // Mobile horizontal view, prefered vertical view and now need addidtional query for H-view
    @media only screen and (min-width: 576px) {
        .vqtNavbar {
            display: flex;
        }
    }


    // Mobile first means query only apply to laptop/desktop, mobile always first
    // So that will load faster in mobile
    @media only screen and (min-width: 992px) {
        .vqtNavbar {
            display: flex;
        }
    }
</style>
