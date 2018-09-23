<template>
    <component v-bind:is="mainTag" class="footer">
        <div class="container links justify-content-center justify-content-sm-between">

            <ul class="menu list-unstyled row flex-grow-1">
                <li class="col-auto">
                    <nuxt-link class="link" to="/">
                        Contact
                    </nuxt-link>
                </li>
                <li class="separator col-auto">
                    |
                </li>
                <li class="col-auto">
                    <nuxt-link class="link" to="/">
                        Privacy
                    </nuxt-link>
                </li>
                <li class="separator col-auto">
                    |
                </li>
                <li class="col-auto">
                    <nuxt-link class="link" to="/">
                        Status
                    </nuxt-link>
                </li>
            </ul>

            <address class="address">ul. Elsnera 1/7, 44-100 Gliwice</address>

            <ul class="social list-unstyled row mx-4 mx-md-0 flex-grow-1 flex-md-grow-0">
                <li class="col-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414" clip-rule="evenodd" width="24" height="16">
                        <path fill="#0f0" d="M23.35-.003H0V3.11h23.35zM23.344 6.44H7.777v3.114h15.567zM23.355 12.884h-7.783v3.113h7.783z"/>
                    </svg>
                </li>
                <li class="col-auto">
                    <a class="bh" href="https://www.behance.net/zawadzkimaa9db">
                        <svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414" clip-rule="evenodd" width="26" height="16">
                            <path fill="#0f0" fill-rule="nonzero" d="M23.222 2.27h-6.443V.67h6.444v1.6h-.001zM12.49 8.832c.415.644.623 1.426.623 2.344 0 .95-.234 1.801-.71 2.553-.304.498-.68.918-1.133 1.257-.509.391-1.112.66-1.805.803-.696.144-1.448.216-2.26.216H0v-16h7.727c1.948.032 3.329.596 4.144 1.705.49.68.732 1.495.732 2.443 0 .978-.246 1.76-.74 2.355-.275.334-.68.637-1.218.91.814.299 1.432.768 1.845 1.414zm-8.8-2.519h3.386c.695 0 1.258-.132 1.691-.396.433-.264.649-.733.649-1.407 0-.744-.286-1.238-.86-1.476-.492-.165-1.123-.25-1.888-.25H3.69v3.53zm6.052 4.635c0-.832-.34-1.406-1.018-1.714-.379-.176-.914-.265-1.6-.272H3.69v4.264H7.07c.695 0 1.232-.09 1.62-.28.7-.35 1.051-1.013 1.051-1.998zm15.87-2.603c.078.523.114 1.283.1 2.275h-8.345c.046 1.152.443 1.958 1.198 2.419.454.289 1.006.43 1.651.43.681 0 1.236-.172 1.663-.526.233-.188.438-.452.616-.786h3.058c-.08.68-.448 1.37-1.11 2.071-1.025 1.114-2.463 1.673-4.31 1.673-1.526 0-2.87-.471-4.037-1.41-1.164-.943-1.748-2.471-1.748-4.591 0-1.989.525-3.51 1.577-4.57 1.057-1.06 2.42-1.59 4.1-1.59.996 0 1.894.179 2.695.537.799.358 1.459.922 1.979 1.697.47.683.772 1.472.914 2.37zm-3.01.298c-.056-.796-.322-1.399-.8-1.811-.476-.413-1.069-.62-1.777-.62-.77 0-1.365.221-1.788.657-.425.435-.69 1.026-.798 1.774h5.163z"/>
                        </svg>
                    </a>
                </li>
                <li class="col-auto">
                    <a class="fb" href="https://www.facebook.com/meet.webo">
                        <svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414" clip-rule="evenodd" width="8" height="16">
                            <path fill="#0f0" d="M7.146 8.01H4.904v7.994H1.58V8.01H0V5.185h1.58V3.357c0-1.306.62-3.353 3.353-3.353l2.462.01v2.742H5.61c-.294 0-.705.146-.705.77v1.662h2.53l-.288 2.821z"/>
                        </svg>
                    </a>
                </li>
            </ul>

        </div>
        <div class="copyright">
            <div class="shortcut"><a class="link" href="#">hello@webo.agency</a> <span class="text-primary my-3 my-md-auto">;)</span> <a class="link" href="#">+48 22 39 06 234</a></div>
            <div class="note">webo © {{ new Date().getFullYear() }}</div>
        </div>
    </component>
</template>
<script>
  export default {
    name: 'cFooter',
    props: ['mainTag']
  }
</script>

<style lang="scss" scoped>
    .footer{
        text-align: center;
    }

    .menu{
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 15px;

        @media(min-width: 320px){
            flex-direction: row;
            padding-top: 20px;
            padding-bottom: 20px;
        }
    }

    .link{
        font-size: 12px;
        word-break: break-all;

        @media(min-width: 320px){
            word-break: normal;
            font-size: 16px;
        }
    }

    .separator{
        transform: rotate(90deg);
        transform-origin: center center;
    }

    .address{
        margin-bottom: 15px;
        font-size: 12px;
        word-break: break-word;
        padding: 0 15px 15px;

        @media(min-width: 320px){
            word-break: normal;
            font-size: 16px;
        }
    }

    .social{
        display: none;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 0;

        @media(min-width: 191px){
            display: flex;
        }
    }

    .social{
        order: 1;
    }

    .social .bh,
    .social .fb{
        padding-top: 20px;
        padding-bottom: 20px;
    }


    // Second bar

    .copyright{
        margin: 0;
        color: #000;

        @media(min-width: 191px){
            padding: 13px;
        }
    }

    .shortcut{
        display: flex;
        flex-direction: column;
        margin: 0 0 15px;

        @media(min-width: 191px){
            margin-bottom: 18px;
        }
    }

    .note{
        font-size: 12px;
        word-break: break-word;
        margin: 0 0 15px;

        @media(min-width: 191px){
            margin-top: 20px;
            padding-left: 10px;
        }
    }
</style>
