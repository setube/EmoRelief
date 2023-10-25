<template>
    <div class="container">
        <var-input variant="outlined" placeholder="请输入需要存储的内容" textarea v-model="value" class="storage" />
        <var-button type="success" block @click="storage">存储</var-button>
    </div>
</template>


<script>
    import { Snackbar } from '@varlet/ui'
    export default {
        data () {
            return {
                value: '',
            };
        },
        methods: {
            storage () {
                this.value = '';
                Snackbar['success']('你并不孤单，我在这里陪伴着你。')
            },
        }
    }
</script>

<style>
    .storage {
        margin: 0 0px 20px 0;
    }
</style>