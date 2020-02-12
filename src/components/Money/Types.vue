<template>
    <div>
        <ul class="types">
            <li :class="value === '-' && 'selected' " @click="selectType('-')">支出</li>
            <li :class="value === '+' && 'selected' " @click="selectType('+')">收入</li>
        </ul>
    </div>
</template>

<script lang="ts">

  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class Types extends Vue {
    @Prop() readonly value!: string;//type的值通过外部传递进来，加一个 ! 就可以忽略初始值的报错

    selectType(type: string) { //type只能是 - + 中的一个，要做判断
      if (type !== '-' && type !== '+') {
        throw new Error('type is unknown');
      }
      this.$emit('update:value', type);
    }
  }

  //js 写法
  // export default {
  //   name: "Types",
  //   //用 data 表示当前的类型
  //   data() {
  //     return {
  //       type: '-' //'-'表示支出，'+'表示收入
  //     }
  //   },
  //   //methods 切换 type
  //   methods: {
  //     selectType(type) { //type只能是 - + 中的一个，要做判断
  //       if (type !== '-' && type !== '+') {
  //         throw new Error('type is unknown')
  //       }
  //       this.type = type;
  //     }
  //   }
  // }
</script>

<style lang="scss" scoped>

    .types {
        background: #c4c4c4;
        display: flex;

        > li {
            width: 50%;
            height: 64px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;

            &.selected::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 4px;
                background: #333333;
            }
        }
    }

</style>