<template>
    <div>
        <Layout class-prefix="layout">

            <Tags :dataSource.sync="tags" @update:value="onUpdateTags"></Tags>

            <Notes @update:value="onUpdateNotes"></Notes>

            <Types :value.sync="record.type"></Types>

            <NumberPad @update:value="onUpdateAmount" @submit="saveRecord"></NumberPad>

        </Layout>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import NumberPad from '@/components/Money/NumberPad.vue';
  import Notes from '@/components/Money/Notes.vue';
  import Tags from '@/components/Money/Tags.vue';
  import Types from '@/components/Money/Types.vue';
  import {Component, Prop, Watch} from 'vue-property-decorator';
  import {model} from '@/model';

  //数据库版本，遇到数据库数据不对的时候进行数据迁移
  window.localStorage.setItem('version', '0.0.1');

  //将所有数据接收后放到一个对象里面，这个对象有以下几种属性，这就是在ts里面声明一个类型
  //这种全局使用的类型应该放到 custom.d.ts 文件中
  // type RecordItem = {
  //   tags: string[]
  //   notes: string
  //   type: string
  //   amount: number
  //   createdAt?: Date
  // }

  @Component({
    components: {Types, Tags, Notes, NumberPad}
  })
  export default class Money extends Vue {

    tags = ['衣', '食', '住', '行'];

    //对象的初始值
    record: RecordItem = {tags: [], notes: '', type: '-', amount: 0};

    //保存数据的数组
    recordList: RecordItem[] = model.fetch();

    onUpdateTags(value: string[]) {
      this.record.tags = value;
    }

    onUpdateNotes(value: string) {
      this.record.notes = value;
    }

    onUpdateAmount(value: string) {
      this.record.amount = parseFloat(value);
    }

    //把数据保存到数组中
    saveRecord() {
      //深拷贝实现，每次都复制一个和当前对象一样的对象，然后把复制出来的对象传到数组中保存起来
      const record2: RecordItem = model.clone(this.record);
      record2.createdAt = new Date();
      this.recordList.push(record2);

    }

    //数组每次变化的时候都保存到本地，就相当于是保存了所有的数据
    @Watch('recordList')
    onRecordListChange() {
      model.save(this.recordList);
    }
  }
</script>

<style lang="scss">
    .layout-content {
        display: flex;
    }
</style>