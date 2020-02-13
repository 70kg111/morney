<template>
    <div class="tags">
        <div class="new">
            <button @click="createTag">新增标签</button>
        </div>
        <ul class="current">
            <li v-for="tag in dataSource" :key="tag.id" @click="toggle(tag)"
                :class="{selected:selectedTags.indexOf(tag) >= 0}">{{tag.name}}
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class Tags extends Vue {
    //readonly 表示只读属性，无法更改
    @Prop(Array) readonly dataSource: string[] | undefined;   //默认数组，外部传过来
    selectedTags: string[] = [];

    //标签的选中和取消
    toggle(tag: string) {
      const index = this.selectedTags.indexOf(tag);
      if (index >= 0) {
        this.selectedTags.splice(index, 1);
      } else {
        this.selectedTags.push(tag);
      }
      //事件触发之后将选中的tags传出去
      this.$emit('update:value',this.selectedTags)
    }

    //新建标签
    createTag() {
      const name = window.prompt('请输入标签名：');
      if (name === '') {
        window.alert('标签名不能为空');
      } else if (this.dataSource) {
        //子组件传值给父组件，修改数据
        this.$emit('update:dataSource', [...this.dataSource, name]);
      }

    }
  }
</script>

<style lang="scss" scoped>
    .tags {
        font-size: 14px;
        padding: 16px;
        flex-grow: 1;
        display: flex;
        flex-direction: column-reverse;
        background: white;

        > .current {
            display: flex;
            flex-wrap: wrap;

            > li {
                margin-top: 4px;
                display: flex;
                justify-content: center;
                align-items: center;
                $bg: #d9d9d9;
                background: $bg;
                padding: 0 16px;
                height: 24px;
                border-radius: (24px/2);
                text-align: center;
                margin-right: 12px;

                &.selected {
                    background: darken($bg, 25%);
                    color: white;
                }
            }
        }

        > .new {
            padding-top: 16px;

            > button {
                background: transparent;
                border: none;
                border-bottom: 1px solid;
                color: #999999;
                padding: 0 3px;
            }
        }
    }

</style>