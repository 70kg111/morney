<template>
    <div>
        {{value}}
        <label class="notes">
            <span class="name">备注</span>
            <input type="text" placeholder="请输入文字" v-model="value">
        </label>
    </div>
</template>

<script lang="ts">

  import Vue from 'vue';
  import {Component, Watch} from 'vue-property-decorator';

  @Component
  export default class Notes extends Vue {
    value: string = '';
    @Watch('value')
    onValueChange(value:string){
      this.$emit('update:value',value)
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