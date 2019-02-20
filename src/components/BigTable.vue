<template>
    <b-container fluid class="vqtBigTable">
        <b-table responsive caption-top class="vqtTable" show-empty
            :items="items" 
            :fields="fields"
            :striped="striped"
            :bordered="bordered"
            :hover="hover"
            :current-page="currentPage"
            :per-page="perPage"
            :filter="filter"
            @filtered="onFiltered">
            <!-- Passing a filter function via the filter prop is deprecated and should be avoided. Use the filter-function prop instead.
            When local filtering is applied, and the resultant number of items change, <b-table> will emit the filtered event.
            Filtering, when used, is applied to the original items array data, and hence it is not currently possible to filter data based on custom rendering of virtual columns.
            With the default built-in filter function, The filter prop value can either be a string or a RegExp object  -->
            <template slot="table-caption"><h5>This is a table caption</h5></template>
            <!-- A virtual column -->
            <template slot="index" slot-scope="data">{{ data.index + 1 }}</template>
            <!-- A virtual custom formatted column -->
            <template slot="name" slot-scope="data">{{ data.item.first_name }} {{ data.item.last_name }}</template>
            <!-- A virtual custom formatted column -->
            <template slot="actions" slot-scope="row">
                <b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1"  variant="primary">View</b-button>
                <b-button size="sm" @click="row.toggleDetails"  variant="warning" class="mr-1" >{{ row.detailsShowing ? 'Hide' : 'Show' }} Edit</b-button>
                <b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1" variant="danger">Delete</b-button>
            </template>
        </b-table>
        <b-row class="vqtTableAdditionals my-1">
            <b-col md="6" class="vqtTableFilter">
                <b-input-group>
                    <!-- Define a v-model named filter here -> a binding filter variable/prop to the inputbox available now -->
                    <b-form-input size="sm" type="text" v-model="filter" placeholder="Type to Search" />
                    <!-- Append button -->
                    <b-input-group-append>
                    <b-button size="sm" :disabled="!filter" @click="filter = ''">Clear</b-button>
                    </b-input-group-append>
                </b-input-group>
            </b-col>
            <b-col md="6" class="vqtTablePagination">
                <b-alert class="vqtTableStatus" show variant="light"></b-alert>
                <b-pagination size="sm" class="ml-auto" :total-rows="totalRows" v-model="currentPage" :per-page="perPage" />
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
const items = [
    { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
    { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
    { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
    { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
    { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
    { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
    { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
]
export default {
    name: "BigTable",
    data() {
      return {
        fields: [
            'index', // A virtual column that doesn't exist in items
            { key: 'name', label: 'Full Name', sortable: true }, // A virtual column that needs custom formatting
            'first_name', 
            'last_name', 
            {key: 'age', sortable: true},
            {key: 'actions', label: 'Actions', sortable: true},
        ],
        items: items,
        striped: true,
        bordered: true,
        hover: true,
        // Initialize filter variable at the beginning. Setting the prop filter to null or an empty string will clear local items filtering.
        filter: null,
        // For pagination
        currentPage: 1,
        perPage: 5,
        totalRows: items.length,
      }
    },
    methods: {
        onFiltered(filteredItems) {
            // Trigger pagination to update the number of buttons/pages due to filtering
            this.totalRows = filteredItems.length
            this.currentPage = 1
        }
    }
}
</script>

<style lang="scss">
.vqtBigTable {
    font-size: 0.875rem;
}
.vqtTable table {
    margin: 0;
}
.vqtTableAdditionals * {
    // padding: 0;
}
.vqtTableFilter {
    
}
.vqtTablePagination {
    display: flex;
}
.vqtTableStatus {
    height: calc(1.5em + .5rem + 2px);
    padding: .25rem .5rem;
    font-size: .875rem;
    line-height: 1.5;
    border-radius: .2rem;
    width: 100%;
    margin-right: 0.2rem;
}
</style>
