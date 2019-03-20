<template>
    <div class="row">
        <div class="col-md-12">
            <b-card-group deck>
                <b-card title="" header-tag="header" footer-tag="non-footer" class="vqtcard">
                    <!-- This is the header of the card -->
                    <div slot="header" class="row vqtcardheader">
                        <div class="col-sm-6 col-md-4 col-lg-3 vqtcardtitle">
                            <p>{{ ctitle }}</p>
                        </div>
                        <div class="col-sm-6 col-md-8 col-lg-9"></div>
                    </div>
                    <!-- This is the content of the card -->
                    <div class="row vqtcardbody">
                        <canvas height="60" class="vqtcanvas" v-bind:id="this.cid"></canvas>
                    </div>
                    <!-- This is the footer of the card -->
                    <!-- <div slot="footer" class="row vqtcardfooter"></div> -->
                </b-card>
            </b-card-group>
        </div>    
    </div>
</template>

<script>
import {LineChart} from '../plugins/chartlinereact.js'
import ChartSampleData from '../plugins/chartsampledata.js'

export default {
    props: {
        cid: String,
        ctitle: String,
    }, 
    data: () => {
        return {
            ChartSampleData: ChartSampleData
        }
    },
    mounted() {
        // begin
        // console.log(this.cid)
        this.createChart(this.cid, this.ChartSampleData);
    },
    methods: {
        createChart(chartId, chartData) {
            const ctx = document.getElementById(chartId);
            const myChart = new Chart(ctx, {
            type: chartData.type,
            data: chartData.data,
            options: chartData.options,
            });
        }
    },
}
</script>

<style lang="scss" scoped>
    .vqtcard{
        box-shadow: 0 6px 10px -4px rgba(0, 0, 0, .15);
        margin-bottom: 15px;
        
    }
    .vqtcard .card-header{
        padding: .25rem;
    }

    .vqtcardtitle {
        text-align: left;
        font-weight: bold;
    }
</style>
