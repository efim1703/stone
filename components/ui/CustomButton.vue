<template>
<button
    :class="['button d-flex align-center',
          {'color-active': active},
          {'text-center': textCenter},
          {'full-width': fullWidth}]"
    @click="$emit('click')"
>
    <span class="title">
        {{ title }}
    </span>
        <span class="icon" v-if="arrow">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
         xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 512 512"
         style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><g><g><path d="M506.134,241.843c-0.006-0.006-0.011-0.013-0.018-0.019l-104.504-104c-7.829-7.791-20.492-7.762-28.285,0.068    c-7.792,7.829-7.762,20.492,0.067,28.284L443.558,236H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h423.557    l-70.162,69.824c-7.829,7.792-7.859,20.455-0.067,28.284c7.793,7.831,20.457,7.858,28.285,0.068l104.504-104    c0.006-0.006,0.011-0.013,0.018-0.019C513.968,262.339,513.943,249.635,506.134,241.843z" fill="#ffffff" data-original="#000000" class=""/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></g></svg>
    </span>
</button>
</template>

<script>

export default {
    name: "CustomButton",
    props: {
        title: {
            type: String,
            default: ''
        },
        arrow: {
            type: Boolean,
            default: false
        },
        active: {
            type: Boolean,
            default: false
        },
        textCenter: {
            type: Boolean,
            default: false
        },
        fullWidth: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style scoped lang="scss">
.button {
    background: $primary;
    border-radius: 100px;
    padding: 10px 30px;
    transition: .5s;
    min-height: 44px;

    .title {
        font-weight: 800;
        align-items: center;
        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: .05em;
        width: 100%;
    }

    .icon {
        width: fit-content;
        height: fit-content;
        margin-left: 10px;

        svg {
            width: 15px;
            height: 15px;
        }
    }

    &:hover {
        cursor: pointer;
        background: $action;
    }

    &.color-active {
        background: $action;
    }

    &.text-center {
        justify-content: center;
    }

    &.full-width {
        width: 100% ;
    }
}

</style>
