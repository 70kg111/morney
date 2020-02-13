<template>
    <div>
        {{value}}
        <label class="notes">
            <span class="name">{{this.fieldName}}</span>
            <input type="text" :placeholder="this.placeholder" v-model="value">
        </label>
    </div>
</template>

<script lang="ts">

  import Vue from 'vue';
  import {Component, Prop, Watch} from 'vue-property-decorator';

  @Component
  export default class Notes extends Vue {
    value: string = '';

    @Prop({required: true}) fieldName!: string;
    @Prop() placeholder?: string;

    @Watch('value')
    onValueChange(value: string) {
      this.$emit('update:value', value);
    }

  }
</script>

<style lang="scss" scoped>

    .notes {
        background: #f5f5f5;
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
        }
    }

</style>