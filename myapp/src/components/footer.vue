<template>
    <div class="footer">
        <nav class="link">
            <ul>
                <router-link to="/main" tag="li">首页</router-link>
                <router-link to="/tickets" tag="li">购票</router-link>
                <router-link to="/shopping" tag="li">商城</router-link>
                <router-link to="/find" tag="li">发现</router-link>
                <router-link to="/me" tag="li">我的</router-link>
            </ul>
        </nav>
        <nav class="footlink">
            <ul>
                <li>PC版</li>
                <li>客户端下载</li>
                <li>意见反馈</li>
                <li>帮助中心</li>
            </ul>
        </nav>
        <div class="copy">
            <p><span>北京动艺时光网络科技有限公司</span>
            <a href="#" class="honest">诚信亮标</a>
            </p>
            <p>
            <span>Copyright </span>
            <span class="copytime">2006-2019</span>
            <span> Mtime.com Inc. All rights reserved.</span>
            </p>
         </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
    .footer{
        background: #f6f6f6;
        border-top: 1px solid #f6f6f6;
        .link{
                background: #fff;
            ul{
                display: flex;
                height: 100%;
                li{
                    flex:1;
                    text-align: center;
                    color: #0074c5;
                    font-size: 1.5rem;
                    display: block;
                    text-align: center;
                    padding: 1.4rem 0 1.35rem;
                }
            }
        }
        .footlink{
            border-top: 0;
             ul{
                display: flex;
                position: relative;
                li{
                    color: #333;
                    font-size: 1.2rem;
                    padding: 1.65rem 1.5rem 1.6rem;
                    display: block;
                    overflow: hidden;

                }

            }
        }
        .copy{
            padding: 0 0 2rem 0;
            p{
            color: #cdcdcd;
            text-align: center;
            padding-bottom: .5em;
            &:first-child{
                span{
                font-size: 0;
                text-indent: -3943434px;
                background: url(../assets/fot_logo.png) no-repeat center center;
                background-size: auto 2rem;
                width: 6rem;
                height: 2rem;
                display: inline-block;
                vertical-align: middle;
                }

            }

            }
            .honest{
                font-size: 0;
    width: 6.5rem;
    height: 2.4rem;
    display: inline-block;
    vertical-align: middle;
    margin-left: .4rem;
    background: url(../assets/h_mark.jpg) no-repeat;
    background-size: cover;
            }
        }
    }
</style>
