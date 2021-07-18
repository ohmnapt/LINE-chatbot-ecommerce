<template>
    <div class="container">
        <br><br><br>
        <div class="ImageTab">
            <div class="ImageTab01">
                <div class="MainDisplay">
                    <div class="background">
                        <div class="mainBorder">
                            <div class="mainImage"></div>
                        </div>
                    </div>
                </div>
                <div class="subDisplay">
                    <div class=subDisplay01>
                        <div class="subBackground01">
                            <div class="subBorder01">
                                <div class="subImage01"></div>
                            </div>
                        </div>
                    </div>
                    <div class="subDisplay02">
                        <div class="subBackground02">
                            <div class="recentDisplay"></div>
                            <div class="subBorder02">
                                <div class="subImage02"></div>
                            </div>
                        </div>
                    </div>
                    <div class="subDisplay03">
                        <div class="subBackground03">
                            <div class="subBorder03">
                                <div class="subImage03"></div>
                            </div>
                        </div>
                    </div>
                    <div class="subDisplay04">
                        <div class="subBackground04">
                            <div class="subBorder04">
                                <div class="subImage04"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="detail">
                <div class="card">
                    <div class="header">
                        <div class="headerBorder"><span class="headerText">Maya Tunic</span></div>
                    </div>
                    <div class="price">
                        <div class="priceBorder">
                            <div class="priceArea"><span class="priceText">$50.00</span></div>
                        </div>
                    </div>
                    <div class="description">
                    </div><span class="descriptionText">With abutted seams and moisture wicking capacity, the Maya Tunic lets
                        you
                        work out in complete comfort. • Mint green heather tunic-style tank. • Wrapped back with cut out
                        detail.• Drawcord detail at end.• Abutted seams.</span>
                </div>
                <div class="form-area">
                    <div class="form-border">
                        <select class="form-control">
                            <option>S</option>
                            <option>M</option>
                            <option>L</option>
                            <option>XL</option>
                        </select>
                    </div>
                </div>
                <div class="event-button">
                    <div class="button-area">
                        <div class="quantity-button">
                            <div class="quantity-border"></div><span class="quantity-num">1</span>
                            <div class="decrese-button-area">
                                <div class="decrese-button"></div>
                            </div>
                            <div class="increse-button-area">
                                <div class="increse-button"></div>
                            </div>
                        </div>
                        <div class="submit-button">
                            <div class="add-button-area">
                                <div class="add-button"><span class="add-button-text">Add to cart</span></div>
                            </div>
                            &nbsp; &nbsp;
                            <div class="buy-button-area">
                                <div class="buy-button"><span class="buy-button-text">buy now</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import Hero from '../components/Hero.vue'
    import SubHero1 from '../components/SubHero1.vue'
    import Card from '../components/Card.vue'
    import ImageTab from '../components/ImageTab.vue'
    export default {
        name: 'ProductDetail',
        components: {
            Hero,
            SubHero1,
            ImageTab,
            Card
        }
    };
</script>

<style>
    .ImageTab {
        width: 1272px;
        height: 664px;
        position: absolute;
        overflow: hidden;
    }

    .ImageTab01 {
        width: 630px;
        height: 664px;
        position: absolute;
        left: 0px;
        top: 0px;
    }

    .MainDisplay {
        width: 450.61016845703125px;
        height: 663.8305053710938px;
        position: absolute;
        left: 179.38983154296875px;
        top: 0px;
    }

    .background {
        background-color: white;
        width: 422px;
        height: 664px;
        position: absolute;
        left: 0px;
        top: 0px;
        overflow: hidden;
    }

    .mainBorder {
        width: 422px;
        height: 664px;
        position: absolute;
        left: -11.38983154296875px;
        top: 0px;
    }

    .mainImage {
        width: 422px;
        height: 664px;
        position: absolute;
        left: 0px;
        top: 0px;
        background-image: url(../assets/product_detail_04.png);
        background-repeat: no-repeat;
        background-size: cover;
    }

    .subDisplay {
        width: 170.8474578857422px;
        height: 664px;
        position: absolute;
        left: 0px;
        top: 0px;
    }

    .subDisplay01 {
        opacity: 0.25;
        width: 170.8474578857422px;
        height: 160.12863159179688px;
        position: absolute;
        left: 0px;
        top: 503.8713684082031px;
    }

    .subBackground01 {
        background-color: white;
        width: 170.8474578857422px;
        height: 160.12863159179688px;
        position: absolute;
        left: 0px;
        top: 0px;
        overflow: hidden;
    }

    .subBorder01 {
        width: 196px;
        height: 204px;
        position: absolute;
        left: -28px;
        top: -7.871368408203125px;
    }

    .subImage01 {
        width: 196px;
        height: 204px;
        position: absolute;
        left: 0px;
        top: 0px;
        background-image: url(../assets/product_detail_01.png);
        background-repeat: no-repeat;
        background-size: cover;
    }

    .subDisplay02 {
        opacity: 0.25;
        width: 170.8474578857422px;
        height: 160.12860107421875px;
        position: absolute;
        left: 0px;
        top: 335.744873046875px;
    }

    .subBackground02 {
        background-color: white;
        width: 170.8474578857422px;
        height: 160.12860107421875px;
        position: absolute;
        left: 0px;
        top: 0px;
        overflow: hidden;
    }

    .recentDisplay {
        width: 324.7613525390625px;
        height: 371.49822998046875px;
        position: absolute;
        left: -137.2823486328125px;
        top: -80.06428527832031px;
        background-image: url(../assets/image.png);
        background-repeat: no-repeat;
        background-size: cover;
    }

    .subBorder02 {
        width: 218px;
        height: 231px;
        position: absolute;
        left: 0px;
        top: 0.255126953125px;
    }

    .subImage02 {
        width: 218px;
        height: 231px;
        position: absolute;
        left: 0px;
        top: 0px;
        background-image: url(../assets/product_detail_04.png);
        background-repeat: no-repeat;
        background-size: cover;
    }

    .subDisplay03 {
        width: 170.8474578857422px;
        height: 160.1285858154297px;
        position: absolute;
        left: 0px;
        top: 167.78773498535156px;
    }

    .subBackground03 {
        background-color: white;
        width: 170.8474578857422px;
        height: 160.1285858154297px;
        position: absolute;
        left: 0px;
        top: 0px;
        overflow: hidden;
    }

    .subBorder03 {
        width: 160px;
        height: 231px;
        position: absolute;
        left: 0px;
        top: -7.7877349853515625px;
    }

    .subImage03 {
        width: 160px;
        height: 231px;
        position: absolute;
        left: 0px;
        top: 0px;
        background-image: url(../assets/product_detail_04.png);
        background-repeat: no-repeat;
        background-size: cover;
    }

    .subDisplay04 {
        opacity: 0.25;
        width: 170.8474578857422px;
        height: 160.12860107421875px;
        position: absolute;
        left: 0px;
        top: 0px;
    }

    .subBackground04 {
        background-color: white;
        width: 170.8474578857422px;
        height: 160.12860107421875px;
        position: absolute;
        left: 0px;
        top: 0px;
        overflow: hidden;
    }

    .subBorder04 {
        width: 274px;
        height: 312px;
        position: absolute;
        left: -114px;
        top: -64px;
    }

    .subImage04 {
        width: 274px;
        height: 312px;
        position: absolute;
        left: 0px;
        top: 0px;
        background-image: url(../assets/product_detail_04.png);
        background-repeat: no-repeat;
        background-size: cover;
    }


    .detail {
        width: 522px;
        height: 664px;
        position: absolute;
        left: 750px;
        top: 0px;
    }

    .card {
        width: 522px;
        height: 208px;
        position: absolute;
        left: 0px;
        top: 0px;
    }

    .header {
        width: 522px;
        height: 42px;
        position: absolute;
        left: 0px;
        top: 0px;
    }

    .headerBorder {
        width: 138px;
        height: 42px;
        position: absolute;
        left: 0px;
        top: 0px;
    }

    .headerText {
        color: rgba(29.000000171363354, 31.000000052154064, 34.00000177323818, 1);
        width: 138px;
        height: 42px;
        position: absolute;
        left: 0px;
        top: 0px;
        font-family: Raleway;
        text-align: center;
        font-size: 26px;
        letter-spacing: 0;
    }

    .price {
        width: 522px;
        height: 40px;
        position: absolute;
        left: 0px;
        top: 58px;
    }

    .priceBorder {
        width: 58px;
        height: 29px;
        position: absolute;
        left: 0px;
        top: 5.5px;
    }

    .priceArea {
        width: 58px;
        height: 29px;
        position: absolute;
        left: 0px;
        top: 0px;
    }

    .priceText {
        color: rgba(29.000000171363354, 31.000000052154064, 34.00000177323818, 1);
        width: 58px;
        height: 29px;
        position: absolute;
        left: 0px;
        top: 0px;
        font-family: Raleway;
        text-align: right;
        font-size: 18px;
        letter-spacing: 0;
    }
    .description {
        width: 32px;
        height: 32px;
        position: absolute;
        left: 0px;
        top: 98px;
    }

    .descriptionText {
        color: rgba(0, 0, 0, 1);
        width: 522px;
        height: 78px;
        position: absolute;
        left: 0px;
        top: 130px;
        font-family: Roboto;
        text-align: left;
        font-size: 16px;
        letter-spacing: 0;
    }

    .form-area {
        width: 522px;
        height: 127px;
        position: absolute;
        left: 0px;
        top: 277px;
    }

    .form-border {
        width: 522px;
        height: 81px;
        position: absolute;
        left: 0px;
        top: 0px;
    }

    .event-button {
        width: 523px;
        height: 52px;
        position: absolute;
        left: -1px;
        top: 420px;
    }

    .button-area {
        width: 523px;
        height: 52px;
        position: absolute;
        left: 0px;
        top: 0px;
    }

    .quantity-button {
        width: 111px;
        height: 52px;
        position: absolute;
        left: 0px;
        top: 0px;
    }

    .quantity-border {
        background-color: rgba(241.00000083446503, 242.00000077486038, 243.00000071525574, 1);
        width: 111px;
        height: 52px;
        position: absolute;
        left: 0px;
        top: 0px;
    }

    .quantity-num {
        color: rgba(29.000000171363354, 31.000000052154064, 34.00000177323818, 1);
        width: 10.702701568603516px;
        height: 29px;
        position: absolute;
        left: 50.6484375px;
        top: 14px;
        font-family: Raleway;
        text-align: center;
        font-size: 18px;
        letter-spacing: 0;
    }

    .decrese-button-area {
        width: 25.297298431396484px;
        height: 26px;
        position: absolute;
        left: 3.891885757446289px;
        top: 13.7998046875px;
    }

    .decrese-button {
        background-color: rgba(29.000000171363354, 31.000000052154064, 34.00000177323818, 1);
        width: 11px;
        height: 1px;
        position: absolute;
        left: 7px;
        top: 13px;
    }

    .increse-button-area {
        width: 25.29730987548828px;
        height: 26px;
        position: absolute;
        left: 81.8108139038086px;
        top: 13.7998046875px;
    }

    .increse-button {
        background-color: rgba(29.000000171363354, 31.000000052154064, 34.00000177323818, 1);
        width: 10px;
        height: 10px;
        position: absolute;
        left: 8px;
        top: 8px;
    }

    .submit-button {
        width: 398px;
        height: 52px;
        position: absolute;
        left: 135px;
        top: 0px;
    }

    .add-button-area {
        width: 197px;
        height: 52px;
        position: absolute;
        left: 0px;
        top: 0px;
    }

    .add-button {
        background-color: rgba(94.0000019967556, 206.0000029206276, 123.0000002682209, 1);
        width: 197px;
        height: 52px;
        position: absolute;
        left: 0px;
        top: 0px;
    }

    .add-button-text {
        color: rgba(255, 255, 255, 1);
        width: 105px;
        height: 20px;
        position: absolute;
        left: 46px;
        top: 16px;
        font-family: Raleway;
        text-align: center;
        font-size: 16px;
        letter-spacing: 0;
    }

    .buy-button-area {
        width: 197px;
        height: 52px;
        position: absolute;
        left: 201px;
        top: 0px;
    }

    .buy-button {
        background-color: rgba(29.000000171363354, 31.000000052154064, 34.00000177323818, 1);
        width: 197px;
        height: 52px;
        position: absolute;
        left: 0px;
        top: 0px;
    }

    .buy-button-text {
        color: white;
        width: 78px;
        height: 20px;
        position: absolute;
        left: 59.5px;
        top: 16px;
        font-family: Raleway;
        text-align: center;
        font-size: 16px;
        letter-spacing: 0;
    }
</style>