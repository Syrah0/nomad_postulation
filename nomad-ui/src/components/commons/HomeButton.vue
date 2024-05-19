<template>
    <div
        class="colums col-4 shadow-box shadow-12"
        style="justify-content: center; display: grid; align-content: center; height: 50%;  border-radius: 5%;  border-style: solid;"
        :class="disabled ? 'disabled' : 'available'"
        :onClick="() => clickFn()"
    >
        <q-icon 
            class="col q-pb-xl"
            :name="icon"
            size="10rem"
        />
        <div
            class="col text-center"
            style="font-size: x-large;"
        >
            {{ text }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeButton',
    props: {
        text: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: true,
        },
        disabled: {
            type: Boolean,
            default: false
        },
        // newClass: {
        //     type: String,
        //     default: ''
        // },
        // newStyle: {
        //     type: String,
        //     default: ''
        // }
    },
    methods: {
        clickFn () {
            if (!this.disabled) {
                this.$emit('clickFn');
            }
        }
    }
}
</script>

<style lang="scss">
.disabled {
    background-color: $grey-5;
    border-color: #fff;
}
.available {
    background-color: lightblue;
    border-color: cadetblue;
    cursor: pointer;
}
</style>