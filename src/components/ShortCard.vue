<template>
    <div class="row">
        <div class="col-md-12">
            <b-card-group deck>
                <b-card title="" header-tag="header" footer-tag="non-footer" class="vqtcard">
                    <!-- This is the header of the card -->
                    <div slot="header" class="row vqtcardheader">
                        <div class="col-sm-12 col-md-12 col-lg-12 vqtcardtitle">
                            <p>Capacity</p>
                        </div>
                    </div>
                    <!-- This is the content of the card -->
                    <div class="row vqtcardbody">
                        150GB
                    </div>
                    <!-- This is the footer of the card -->
                    <!-- <div slot="footer" class="row vqtcardfooter"></div> -->
                </b-card>
            </b-card-group>
        </div>    
    </div>
</template>

<script>
export default {
    name: "ShortCard",
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
