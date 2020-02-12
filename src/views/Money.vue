<template>
    <div>
        <Layout class-prefix="layout">

            {{record}}

            <Tags :dataSource.sync="tags" @update:value="onUpdateTags"></Tags>

            <Notes @update:value="onUpdateNotes"></Notes>

            <Types :value.sync="record.type"></Types>

            <NumberPad @update:value="onUpdateAmount"></NumberPad>

        </Layout>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import NumberPad from '@/components/Money/NumberPad.vue';
  import Notes from '@/components/Money/Notes.vue';
  import Tags from '@/components/Money/Tags.vue';
  import Types from '@/components/Money/Types.vue';
  import {Component, Prop} from 'vue-property-decorator';

  //将所有数据接收后放到一个对象里面，这个对象有以下几种属性，这就是在ts里面声明一个类型
  type Record = {
    tags: string[]
    notes: string
    type: string
    amount: number
  }

  @Component({
    components: {Types, Tags, Notes, NumberPad}
  })
  export default class Money extends Vue {

    tags = ['衣', '食', '住', '行'];

    //对象的初始值
    record:Record = {tags:[],notes:'',type:'-',amount:0};

    onUpdateTags(value: string[]) {
      this.record.tags = value;
    }
    onUpdateNotes(value: string) {
      this.record.notes = value;
    }
    onUpdateAmount(value: string) {
      this.record.amount = parseFloat(value);
    }
  }
</script>

<style lang="scss">
    .layout-content {
        display: flex;
    }
</style>