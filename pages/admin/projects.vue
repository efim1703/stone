<template>
    <div class="wrapper">
        Projects
        <input type="file" ref="fileInput" @change="uploadFile">
    </div>
</template>

<script>
import CustomButton from "~/components/ui/CustomButton.vue";
import projectRepository from "~/services/repositories/project-repository";

export default {
    components: {CustomButton},
    layout: 'empty',
    name: 'Projects',
    data() {
        return {
            formData: {
                title: 'Проект 1',
                description: 'Описание проекта 1',
                product_type: 'кварц',
                img: '',
            },
        }
    },
    mounted() {
        this.getProjects()
    },
    methods: {
        async getProjects() {
            const data = await projectRepository.getProjects({limit: 10, offset: 0})
            console.log(data)
        },
        async addProject() {
            const formDataFormat = new FormData()
            console.log(this.formData.img)
            formDataFormat.append('img', this.formData.img)
            formDataFormat.append('title', this.formData.title)
            formDataFormat.append('description', this.formData.description)
            formDataFormat.append('product_type', this.formData.product_type)

            const data = await projectRepository.addProject(formDataFormat, localStorage.getItem('api_token'))
        },
        uploadFile() {
            const file = this.$refs.fileInput.files[0]

            if (file) {
                this.formData.img = file
            }
        }
    }
};
</script>

<style lang="scss" scoped>
input {
    width: 100px;
    height: 60px;
    background: $action;
}

</style>
