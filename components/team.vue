<template>
    <component v-bind:is="mainTag" v-bind:class="mainClass" v-bind:id="mainId" class="team">
        <div class="container">
            <div class="row">
                <div class="col">
                    <h1 class="decoration">Meet our team </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis harum hic ipsam
                        laudantium. Delectus eius, quam.
                    </p>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-auto">
                    <a href="#" class="team--person">
                        <h2 class="team--name">Patryk Padus</h2>
                        <img src="~/assets/person.svg"/>
                    </a>
                </div>
                <div class="col-auto">
                    <a href="#" class="team--person">
                        <h2 class="team--name">Aneta Węglińska</h2>
                        <img src="~/assets/person.svg"/>
                    </a>
                </div>
                <div class="col-auto">
                    <a href="#" class="team--person">
                        <h2 class="team--name">Izabela Rucińska</h2>
                        <img src="~/assets/person.svg"/>
                    </a>
                </div>
                <div class="col-auto">
                    <a href="#" class="team--person">
                        <h2 class="team--name">Aneta Węglińska</h2>
                        <img src="~/assets/person.svg"/>
                    </a>
                </div>
            </div>
            <div class="row">
                <a href="#" class="team--more no-decoration">Contact us →</a>
            </div>
        </div>
    </component>
</template>
<script>
  export default {
    name: 'cTeam',
    props: ['mainTag','mainClass','mainId'],
    mounted() {
      //
    }
  }
</script>

<style lang="scss" scoped>
    .team{
        text-align: center;
        padding: 120px 15px 15px;
    }

    .team--person{
        display: block;
        max-width: 100%;
        width: 300px;
    }

    .team--name{
        position: absolute;
        top: 50%;
        left: 0;
        right: 0;
        transform: translate(0, -50%);
        font-size: 29px;
        color: rgb(22,171,134);
    }

    .team--more{
        margin: auto;
        color: rgb(197,217,45);
        padding: 60px;
        font-size: 29px;
    }
</style>
