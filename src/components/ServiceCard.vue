<template>
    <div class="row">
        <div class="col-md-12">
            <b-card-group deck>
                <b-card title="Title" header-tag="header" footer-tag="footer">
                <h6 slot="header" class="mb-0">Header Slot</h6>
                <!-- This is the content of the card -->
                <line-chart
                    :chartdata="chartdata"
                    :options="options"/>
                <!-- This is the content of the card -->
                <em slot="footer">Footer Slot</em>
                </b-card>
            </b-card-group>
        </div>    
    </div>
</template>

<script>
import {Line, Bar, LineChart} from 'vue-chartjs'

export default {
    extends: Line,
    data: () => ({
        chartdata: {
        datacollection: {
            labels: ['January', 'February'],
            datasets: [
            {
                label: 'Data One',
                backgroundColor: '#f87979',
                data: [40, 20]
            }
            ]
        }
        },
        options: {
        responsive: true,
        maintainAspectRatio: false
        }
    }),
    mounted() {
        // begin
        this.renderChart(this.datacollection, this.options)
    },
}
</script>

<style lang="scss">
    
</style>
