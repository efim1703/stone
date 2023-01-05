<template>
    <div class="wrapper">
        <div class="login d-flex flex-column align-center">
            <div class="login-title">LOGIN</div>
            <div class="login-body">
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
                    @click="login"
                    @keydown.enter="login"
                />
            </div>
        </div>
    </div>
</template>

<script>
import CustomButton from "~/components/ui/CustomButton.vue";
import adminRepository from "~/services/repositories/admin-repository";

export default {
    components: {CustomButton},
    layout: 'empty',
    name: 'Admin',
    data() {
        return {
            formData: {
                name: 'gevorg',
                password: 'gevorg'
            },
            errorPassword: false,
            errorLogin: false
        }
    },
    methods: {
        async login() {
            try {
                const response = await adminRepository.login({...this.formData})

                if (response.access_token) {
                    localStorage.setItem('api_token', response.access_token)
                    this.$router.push({ path: '/admin/projects' })
                }
            } catch (error) {
                console.warn(error)
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.wrapper {
    height: 100vh;
    color: $primary;

    .login {
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
