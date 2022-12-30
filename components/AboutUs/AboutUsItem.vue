<template>
    <div class="about-us-item">
        <div class="about-us-image">
            <img class="circle" :src="getPath(card.svgName)" alt="Icon"/>
        </div>
        <h3>{{ card.title }}</h3>
        <p> {{ card.caption }}</p>
    </div>
</template>

<script>
export default {
    name: 'AboutUsItem',
    props: {
        card: {
            type: Object,
            required: true
        }
    },
    methods: {
        getPath(fileName) {
            return require(`@/assets/svg/${fileName}.svg`)
        }
    }
}
</script>

<style lang="scss" scoped>
.about-us-item {
    flex-basis: 25%;
    padding: 0 10px;
    text-align: center;

    &:hover .about-us-image {
        background-color: #DAA14C;
        -webkit-transform: rotateY(360deg);
        -moz-transform: rotateY(360deg);
        -ms-transform: rotateY(360deg);
        -o-transform: rotateY(360deg);
        transform: rotateY(360deg);
    }

    & > *:not(:last-child) {
        margin-bottom: 10px;
    }

    .about-us-image {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100px;
        width: 100px;
        background: $primary;
        border-radius: 50%;
        margin: 0 auto 10px;

        -webkit-transition: all 0.9s;
        -moz-transition: all 0.9s;
        -ms-transition: all 0.9s;
        -o-transition: all 0.9s;
        transition: all 0.9s;

        img {
            width: 50px;
            height: 50px;
            -webkit-transform: rotateY(360deg);
            -moz-transform: rotateY(360deg);
            -ms-transform: rotateY(360deg);
            -o-transform: rotateY(360deg);
            transform: rotateY(360deg);
        }
    }

    h3 {
        line-height: 23px;
        font-size: 18px;
    }

    p {
        font-size: 16px;
    }


}

@media (max-width: 768px) {
    .about-us-item {
        flex-basis: 48%;
        padding: 0;
        margin-bottom: 20px;

        p {
            font-size: 16px;
        }
    }
}

@media (max-width: 375px) {
    .about-us-item {
        position: relative;
        flex-basis: 100%;

        & > * {
            margin-bottom: 40px;
        }

        &:after {
            content: '';
            position: absolute;
            top: 90%;
            right: 0;
            left: 0;
            height: 1px;
            width: 100%;
            background: white;
        }
    }
}
</style>
