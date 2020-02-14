<template>

    <Layout>
        <div class="tags">
            <router-link class="tag" v-for="tag in tags" :key="tag.id" :to="`/labels/edit/${tag.id}`">
                <span>{{tag.name}}</span>
                <Icon name="right"/>
            </router-link>
        </div>

        <div class="createTag-wrapper">
            <Button class="createTag" @click.native="createTag">新建标签</Button>
        </div>
    </Layout>

</template>

<script lang="ts">

  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import {tagListModel} from '@/models/tagListModel';
  import Button from '@/components/Button.vue';

  @Component({
    components: {Button}
  })
  export default class Labels extends Vue {
    //获取到的标签展示出来
    tags = window.tagList;

    createTag() {
      const name = window.prompt('请输入标签名：');
      if (name) {
        tagListModel.create(name);
      }
    }

  }
</script>

<style lang="scss" scoped>
    .tags {
        background: white;
        font-size: 16px;
        padding-left: 16px;

        > .tag {
            min-height: 44px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid #e6e6e6;

            svg {
                margin-right: 16px;
                width: 24px;
                height: 24px;
            }
        }
    }

    .createTag-wrapper {
        text-align: center;
        padding-top: 44px;
    }

    .createTag {
        background: #767676;
        color: white;
        border-radius: 4px;
        border: none;
        height: 40px;
        padding: 0 16px;
    }
</style>