<template>
    <div class="project">
        <img :src="require(`@/static/portfolios/${ project.imageName }.png`)" :alt="`${ project.id } project image`">
        <h3 class="project-title">{{ project.title }}</h3>
        <p>{{ project.caption }}</p>
        <custom-button title="Подробнее о проекте" arrow/>
    </div>
</template>

<script>
    import CustomButton from '@/components/ui/CustomButton.vue';

    export default {
        name: 'Card',
        components: { CustomButton },
        props: {
            project: {
                type: Object,
                required: true
            },
        }
    }
</script>

<style lang="scss" scoped>
    .project {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;

        img {
            object-fit: cover;
            width: 100%;
            height: 100%;
            margin-bottom: 32px;
        }

        h3 {
            margin-bottom: 16px;
        }

        p {
            margin-bottom: 16px;
        }
    }

    @media (max-width: 768px) {
        .project {
            img {
                margin-bottom: 12px;
            }

            h3 {
                margin-bottom: 8px;
            }

            p {
                margin-bottom: 16px;
            }
        }
    }
</style>
