<template>
    <div>
        <label class="formItem">
            <span class="name">{{this.fieldName}}</span>
            <input type="text" :placeholder="placeholder" :value="value" @input="onValueChange($event.target.value)">
        </label>
    </div>
</template>

<script lang="ts">

  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class FormItem extends Vue {
    @Prop({default: ''}) value!: string;

    @Prop({required: true}) fieldName!: string;
    @Prop() placeholder?: string;

    onValueChange(value: string) {
      this.$emit('update:value', value);
    }

  }
</script>

<style lang="scss" scoped>

    .formItem {
        display: flex;
        font-size: 14px;
        padding: 0 0 0 16px;
        align-items: center;

        > .name {
            padding-right: 16px;
        }

        > input {
            padding: 16px 0;
            flex-grow: 1;
            background: transparent;
            border: none;
            padding-right: 16px;
            height: 44px;
        }
    }

</style>