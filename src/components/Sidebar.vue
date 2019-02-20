<template>
    <b-list-group class="vqtSidebar" fluid>
        <b-list-group-item class="vqtBrand vqtSidebarHeader">
            <span class="vqtBrandIcon"><font-awesome-icon :icon="['fab', 'vaadin']" /></span>
            <span class="vqtBrandText">VQT</span>
            <!-- Right aligned nav items -->
            <span class="vqtToggleButton ml-auto">
                <b-button v-b-toggle.vqtToggleButton1 variant="light">
                    <font-awesome-icon :icon="['fas', 'expand-arrows-alt']" class="vqtToggleDown" />
                </b-button>
            </span>
        </b-list-group-item>
        <!-- All other items tobe hidden in mobile-->
        <b-collapse id="vqtToggleButton1" visible>
            <b-list-group-item href="#" class="vqtSidebarItem">
                <span class="vqtSidebarItemIcon"><font-awesome-icon :icon="['fas', 'chalkboard']" /></span>
                <span class="vqtSidebarItemText">Dashboard</span>
            </b-list-group-item>
            <b-list-group-item href="#" class="vqtSidebarItem">
                <span class="vqtSidebarItemIcon"><font-awesome-icon :icon="['fas', 'users']" /></span>
                <span class="vqtSidebarItemText">User Profile</span>
            </b-list-group-item>
            <b-list-group-item href="#" class="vqtSidebarItem" active>
                <span class="vqtSidebarItemIcon"><font-awesome-icon :icon="['fas', 'table']" /></span>
                <span class="vqtSidebarItemText">Table List</span>
            </b-list-group-item>
            <b-list-group-item href="#" class="vqtSidebarItem">
                <span class="vqtSidebarItemIcon"><font-awesome-icon :icon="['fab', 'typo3']" /></span>
                <span class="vqtSidebarItemText">Typography</span>
            </b-list-group-item>
            <b-list-group-item href="#" class="vqtSidebarItem">
                <span class="vqtSidebarItemIcon"><font-awesome-icon :icon="['fab', 'nutritionix']" /></span>
                <span class="vqtSidebarItemText">Icons</span>
            </b-list-group-item>
            <b-list-group-item href="#" class="vqtSidebarItem">
                <span class="vqtSidebarItemIcon"><font-awesome-icon :icon="['fas', 'map-marker-alt']" /></span>
                <span class="vqtSidebarItemText">Maps</span>
            </b-list-group-item>
            <b-list-group-item href="#" class="vqtSidebarItem">
                <span class="vqtSidebarItemIcon"><font-awesome-icon :icon="['fas', 'bell']" /></span>
                <span class="vqtSidebarItemText">Notifications</span>
            </b-list-group-item>
            <!-- Items with Accordion feature -->
            <b-list-group-item href="#" class="vqtSidebarItem vqtSidebarItemHidden" v-b-toggle.vqtSideBarAccordion1>
                <span class="vqtSidebarItemIcon"><font-awesome-icon :icon="['fas', 'user']" /></span>
                <span class="vqtSidebarItemText">My Profile</span>
                <span class="vqtCaretButton ml-auto"><font-awesome-icon :icon="['fas', 'angle-down']" /></span>
            </b-list-group-item>
            <b-collapse id="vqtSideBarAccordion1" class="vqtSideBarAccordion">
                <b-list-group-item href="#" class="vqtSidebarItem vqtSidebarItemHidden">
                    <span class="vqtSidebarItemIcon"><font-awesome-icon :icon="['fas', 'sign-out-alt']" /></span>
                    <span class="vqtSidebarItemText">Sign out</span>
                </b-list-group-item>
            </b-collapse>
            <!-- Items with Accordion feature -->
            <b-list-group-item href="#" class="vqtSidebarItem vqtSidebarItemLast">
                <span class="vqtSidebarItemIcon"><font-awesome-icon :icon="['fas', 'coffee']" /></span>
                <span class="vqtSidebarItemText">Buy Me A Coffee</span>
            </b-list-group-item>
        </b-collapse>
    </b-list-group>
</template>

<script>
export default {
    name: "Sidebar",
}
</script>

<style lang="scss" scoped>
    // Small reset css
    .vqtSidebar * {
        margin: 0;
        padding: 0;
        border: none;
        line-height: 1rem;
    }
    .vqtSidebar {
        width: 100%;
        // height: 100vh;
    }
    .vqtSidebarHeader {
        display: flex;
        font-weight: bold;
        font-size: 1.1rem;
        border-bottom: 1px solid lightgrey;
        color: red;
        padding: 0.75rem 0.75rem;
        line-height: 1rem;
        min-height: 3rem;
    }
    .vqtToggleButton,
    .vqtCaretButton {
        display: block;
    }
    .vqtToggleButton button {
        color: #2c3e50;
        padding: 0.2rem 0.5rem;
        border: 1px solid lightgrey;
        font-size: 1rem;
    }
    // display content of sidebar
    #vqtToggleButton1 {
        // display: none;
    }
    .vqtSidebarItem {
        display: flex; //very important to align items inside
        padding: 0.75rem;
        border-radius: 0.375rem;
        margin: 0.15rem;
    }
    // Focus must place before active to make sure effect of active could not be overlapped with focus
    .vqtSidebarItem:focus,
    .vqtSidebarItem:hover {
        color: seagreen;
        background-color: hsla(0,0%,78.4%,.2);
    }
    .vqtSidebarItem:active,
    .vqtSidebarItem.active {
        background-color: seagreen;
        border: 0.1px solid seagreen;
        color: white;
    }
    .vqtSidebarItemIcon,
    .vqtBrandIcon {
        margin-right: 0.5rem;
    }
    .vqtSidebarItemIcon,
    .vqtSidebarItemText,
    .vqtBrandIcon,
    .vqtBrandText,
    .vqtToggleButton,
    .vqtCaretButton {
        padding: 0.375rem;
    }
    .vqtSideBarAccordion {
        margin-left: 0.5rem;
    }
    .vqtSidebarItemLast {
        
    }

    // Mobile horizontal view, prefered vertical view and now need addidtional query for H-view
    @media only screen and (min-width: 576px) {
        .vqtSidebar {
            width: 100%;
            height: 100vh;
        }
        .vqtSidebarItemHidden {
            display: none;
        }
        // hide button to toggle
        .vqtToggleButton {
            display: none;
        }
        // display content of sidebar
        #vqtToggleButton1 {
            display: block;
        }
    }


    // Mobile first means query only apply to laptop/desktop, mobile always first
    // So that will load faster in mobile
    @media only screen and (min-width: 992px) {
        .vqtSidebar {
            width: 100%;
            height: 100vh;
        }
        .vqtSidebarItemHidden {
            display: none;
        }
        // hide button to toggle
        .vqtToggleButton {
            display: none;
        }
        // display content of sidebar
        #vqtToggleButton1 {
            display: block;
        }
    }

</style>
