<template>
    <div class="wrapper">
        <div class="logout d-flex flex-column align-center">
            <div class="logout-title">LOGOUT</div>
            <div class="logout-body">
                <input
                    v-model="formData.name"
                    type="text"
                    :class="['input', {'error': errorLogin}]"
                    placeholder="Login or name"
                >
                <input
                    v-model="formData.password"
                    type="text"
                    :class="['input', {'error': errorPassword}]"
                    placeholder="Password"
                >
                <CustomButton
                    full-width
                    title="Войти"
                    @click="logout"
                    @keydown.enter="logout"
                />
            </div>
        </div>
    </div>
</template>

<script>
import CustomButton from "~/components/ui/CustomButton.vue";

export default {
    components: {CustomButton},
    layout: 'empty',
    name: 'Admin',
    data() {
        return {
            formData: {
                name: '',
                password: ''
            },
            errorPassword: false,
            errorLogin: false
        }
    },
    // async fetch() {
    //     const response = await this.$axios.post('/api/login', {name: 'gevorg', password: 'gevorg'})
    //     console.log(response)
    // },
    methods: {
        async logout() {
            // const response = await this.$axios.post('/api/login', {name: this.formData.name, password: this.formData.password})
            // console.log(response)
            // if (response.data.error?.code === 401) {
            //     console.log(response.data.error)
            // }
            // if (response.data.error?.code === 422) {
            //     console.log(response.data.error)
            // }
            // if (response.data?.access_token) {
            //     // localStorage.setItem('api_token', response.access_token)
            //     // this.$router.push({ name: 'AdminProducts' })
            // }
            const response = await fetch('http://malire7m.beget.tech/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.formData)
            }).then(response => response.json())

            if (response.error?.code === 401 || response.error?.code === 422) {
                this.errorLogin = true
                this.errorPassword = true
            }

            if (response.access_token) {
                localStorage.setItem('api_token', response.access_token)
                this.$router.push({ path: '/' })
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.wrapper {
    height: 100vh;
    color: $primary;

    .logout {
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        width: 594px;
        height: 254px;
        padding: 26px;
        background: #fff;
        border-radius: 24px;
        margin: auto;

        &-title {
            font-weight: 700;
            font-size: 36px;
            margin-bottom: 28px;
        }

        &-body {
            width: 60%;
            margin: 0 auto;

            .input {
                background: $admin-light;
                border-radius: 24px;
                color: $dark;
                width: 100%;
                height: 44px;
                padding: 14px 34px;
                margin-bottom: 14px;
                border: 1px solid $admin-light;
                font-size: 14px;

                &.error {
                    border: 1px solid $red;
                    color: $red;
                }

                &::placeholder {
                    color: $dark;
                }

            }
        }
    }
}

</style>
