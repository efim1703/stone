<template>
    <div class="project">
        <div class="container">
            <div class="project-title-wrapper">
                <h3 class="h-subtitle">Портфолио</h3>
                <h1 class="h1-title">Искусственный камень в интерьере в наших выполненных проектах</h1>
                <p>Ознакомьтесь c примерами наших работ по изготовлению изделий из натурального камня и облицовке
                    интерьеров и
                    экстерьеров. Мы выполняем самые разные проекты под ключ.
                </p>
            </div>
            <div class="project-list-wrapper">
                <dropdown-select
                    :items-list="materialsList"
                    :title="materialTitle"
                    @item-checked="itemChecked($event)"
                    class="project-dropdown"
                />
                <div class="project-list">
                    <project-card
                        v-for="project in projectList"
                        :key="project.id"
                        :project="project"
                        class="project-list-item"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ProjectCard from '~/components/ProjectCard.vue'
    import DropdownSelect from '~/components/ui/DropdownSelect.vue';

    export default {
        name: 'index',
        components: { DropdownSelect,  ProjectCard },
        data() {
            return {
                projectList: [
                    {
                        id: 1,
                        title: 'Облицовка кухни мраморным камнем',
                        caption: 'В проекте выполнены облицовка санузла, изготовление острова, полы в жилых помещениях, облицовка гостевого санузла',
                        imageName: 'portfolioImage2'
                    },
                    {
                        id: 2,
                        title: 'Облицовка кухни мраморным камнем',
                        caption: 'В проекте выполнены облицовка санузла, изготовление острова, полы в жилых помещениях, облицовка гостевого санузла',
                        imageName: 'portfolioImage2'
                    },
                    {
                        id: 3,
                        title: 'Облицовка кухни мраморным камнем',
                        caption: 'В проекте выполнены облицовка санузла, изготовление острова, полы в жилых помещениях, облицовка гостевого санузла',
                        imageName: 'portfolioImage2'
                    },
                    {
                        id: 4,
                        title: 'Облицовка кухни мраморным камнем',
                        caption: 'В проекте выполнены облицовка санузла, изготовление острова, полы в жилых помещениях, облицовка гостевого санузла',
                        imageName: 'portfolioImage2'
                    },
                    {
                        id: 5,
                        title: 'Облицовка кухни мраморным камнем',
                        caption: 'В проекте выполнены облицовка санузла, изготовление острова, полы в жилых помещениях, облицовка гостевого санузла',
                        imageName: 'portfolioImage2'
                    },
                    {
                        id: 6,
                        title: 'Облицовка кухни мраморным камнем',
                        caption: 'В проекте выполнены облицовка санузла, изготовление острова, полы в жилых помещениях, облицовка гостевого санузла',
                        imageName: 'portfolioImage2'
                    },
                    {
                        id: 7,
                        title: 'Облицовка кухни мраморным камнем',
                        caption: 'В проекте выполнены облицовка санузла, изготовление острова, полы в жилых помещениях, облицовка гостевого санузла',
                        imageName: 'portfolioImage2'
                    },
                    {
                        id: 8,
                        title: 'Облицовка кухни мраморным камнем',
                        caption: 'В проекте выполнены облицовка санузла, изготовление острова, полы в жилых помещениях, облицовка гостевого санузла',
                        imageName: 'portfolioImage2'
                    },
                    {
                        id: 9,
                        title: 'Облицовка кухни мраморным камнем',
                        caption: 'В проекте выполнены облицовка санузла, изготовление острова, полы в жилых помещениях, облицовка гостевого санузла',
                        imageName: 'portfolioImage2'
                    }
                ],
                materialsList: [
                    {  id: 1, name: 'Кварц', checked: false },
                    {  id: 2, name: 'Мрамор', checked: false },
                    {  id: 3, name: 'Гранит', checked: false },
                    {  id: 4, name: 'Оникс', checked: false },
                ],
            }
        },
        methods: {
            clearArray(array) {
                array.map(item => item.checked = false)
            },
            itemChecked(id) {
                if (this.materialsList.find( el => el.id === id).checked === true) {
                    this.clearArray(this.materialsList)
                    return
                }
                this.clearArray(this.materialsList)
                this.materialsList.find( el => el.id === id).checked = true
            }
        },
        computed: {
            materialTitle: function() {
                return this.materialsList.find( el => el.checked === true)?.name ?? 'Тип изделия'
            }
        }
    }
</script>

<style lang="scss" scoped>
    .project {
        &-title-wrapper {
            width: 65%;
            margin: 124px 0 56px;

            .h-subtitle {
                margin-bottom: 12px;
            }
        }

        .project-list-wrapper {
            display: flex;
            flex-direction: column;

            .project-dropdown {
                align-self: flex-end;
                margin-bottom: 28px;
            }
        }

        &-list {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            row-gap: 60px;

            &-item {
                width: calc(100% / 3 - 88px / 3);
            }
        }
    }

    @media (max-width: 1024px) {
        .project {
            &-title-wrapper {
                margin-bottom: 32px;
                width: 100%;
            }

            &-list {
                &-item {
                    width: calc(100% / 2 - 88px / 2);
                }
            }

            p {
                display: none;
            }
        }
    }

    @media (max-width: 768px) {
        .project {
            &-title-wrapper {
                text-align: center;
                margin: 152px 0 20px;

                .h-subtitle {
                    margin-bottom: 0;
                }
            }

            .project-list-wrapper .project-dropdown {
                margin-bottom: 8px;
            }

            &-list {
                row-gap: 30px;

                &-item {
                    width: 100%;
                }
            }
        }
    }
</style>
