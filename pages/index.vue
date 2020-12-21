<template>
  <div class="wrapper">
    <div class="container">
        <div class="faucet-title">Clover Authenticated Faucet</div>
        <div class="form-container">
            <div class="ipt-container">
                <b-form-input 
                        v-model="text" 
                        placeholder="Input your Ethereum or Clover Address…"  
                        class="ipt">
                </b-form-input>
            </div>
            <button class="btn-custom" @click="getToken()">
                Give me CLV
            </button>
        </div>
        <div class="bottom-text">Type you Address and get 100 CLV test tokens per day.</div>
    </div>
    <div class="img-wrapper"><img src="~/assets/images/girl.png"/></div>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                totalStorage: '0',
                totalNode: '0',
                text: "",
                failPath: '~/assets/svgs/fail.svg'
            }
        },
        methods: {
            async getToken() {
                let h = this.$createElement
                let styleDiv = {
                    display: 'flex',
                    'flex-direction': 'row',
                }
                let styelMargin = {
                    'margin-left': '10px'
                }
                let imgSrcSuccess = require('../assets/svgs/success.svg')
                let imgSrcFail = require('../assets/svgs/fail.svg')
                let options = {
                    toaster: 'b-toaster-top-center',
                    noCloseButton: true
                }
                try {
                    let res = await this.$axios.get(`http://faucet-api.clovernode.com/clover/api/faucet/${this.text}`)
                    console.log(`${res}`)
                    if(res.status === 200) {
                        if (res.data.success === true) {
                            let vnode = h(
                                'div',
                                { 
                                    style: styleDiv
                                },
                                [
                                    h(
                                        'img', {
                                            attrs: {
                                                src: imgSrcSuccess
                                            }
                                        }
                                    ),
                                    h(
                                        'div',
                                        { 
                                            style: styelMargin
                                        },
                                        'Successfully got 100 CLVs'
                                    )
                                ]
                            )
                            this.$bvToast.toast([vnode], options)
                        }
                        else {
                            let vnode = h(
                                'div',
                                { 
                                    style: styleDiv
                                },
                                [
                                    h(
                                        'img', {
                                            attrs: {
                                                src: imgSrcFail
                                            }
                                        }
                                    ),
                                    h(
                                        'div',
                                        { 
                                            style: styelMargin
                                        },
                                        res.data.message
                                    )
                                ]
                            )

                            this.$bvToast.toast(res.data.message, options)
                        }
                    }
                } catch(e) {
                    let vnode = h(
                                'div',
                                {   
                                    style: styleDiv
                                },
                                [
                                    h(
                                        'img', {
                                            attrs: {
                                                src: imgSrcFail
                                            }
                                        }
                                    ),
                                    h(
                                        'div',
                                        { 
                                            style: styelMargin
                                        },
                                        'Failed to get CLV'
                                    )
                                ]
                            )
                    this.$bvToast.toast([vnode], options)
                }
                
            }
        }

    }
</script>

<style lang="scss" scoped>
    .wrapper {
        position: relative;
        margin-top: 200px;
        min-width: 1200px;
        overflow: auto;

        .img-wrapper {
            position: absolute;
            right: -66px;
            top: 0px;
            img {
                width: 241px;
            }
        }

        
    }
    .container {
        // padding: 0 10%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .faucet-title {
            font-size: 44px;
            color: #333333;
            font-family: Helvetica;
        }
        .form-container {
            display: flex;
            flex-direction: row;
            margin-top: 68px;
        }
        .ipt-container {
            margin-right: 24px;
        }
        .ipt {
            width: 630px;
            height: 88px;
            background: #FFFFFF;
            border-radius: 50px;
            border: 2px solid #999999;
            font-size: 30px;
            font-family: Helvetica;
        }
        input:focus {
            outline: none !important;
            border:2px solid #666;
            box-shadow: 0 0 0 transparent;
        }
        .btn-custom {
            width: 192px;
            height: 88px;
            border-radius: 48px;
            background-color: #4BA871;     
            color: white;
            font-size: 26px;
            outline: none;
            border: 0;
            padding: 0;
            font-family: Helvetica;
        }
        .btn-custom:hover {
            background-color:#76B96D;
        }
        .bottom-text {
            margin-top: 68px;
            font-size: 26px;
            font-family: Helvetica;
            color: #333333;
            margin-bottom: 100px;
        }
    }
    
</style>
