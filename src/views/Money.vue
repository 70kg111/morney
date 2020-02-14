<template>
    <div>
        <Layout class-prefix="layout">

            <Tags :dataSource.sync="tags" @update:value="onUpdateTags"></Tags>

            <div class="notes">
                <FormItem @update:value="onUpdateNotes" field-name="备注" placeholder="在这里输入备注"></FormItem>

            </div>

            <Types :value.sync="record.type"></Types>

            <NumberPad @update:value="onUpdateAmount" @submit="saveRecord"></NumberPad>

        </Layout>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import NumberPad from '@/components/Money/NumberPad.vue';
  import FormItem from '@/components/Money/FormItem.vue';
  import Tags from '@/components/Money/Tags.vue';
  import Types from '@/components/Money/Types.vue';
  import {Component, Prop, Watch} from 'vue-property-decorator';
  import {recordListModel} from '@/models/recordListModel';

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

  //获取标签，外面先获取一次，然后给里面用
  const recordList = recordListModel.fetch();

  @Component({
    components: {Types, Tags, FormItem, NumberPad}
  })
  export default class Money extends Vue {

    tags = window.tagList;

    //对象的初始值
    record: RecordItem = {tags: [], notes: '', type: '-', amount: 0};
    recordList: RecordItem[] = recordList;

    //保存数据的数组
    recordListModel: RecordItem[] = recordListModel.fetch();

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
      recordListModel.create(this.record);

    }

    //数组每次变化的时候都保存到本地，就相当于是保存了所有的数据
    @Watch('recordList')
    onRecordListChange() {
      recordListModel.save();
    }
  }
</script>

<style lang="scss">
    .layout-content {
        display: flex;
    }

    .notes {
        padding: 12px 0;
    }

</style>