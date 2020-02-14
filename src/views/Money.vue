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
  import {Component} from 'vue-property-decorator';
  import store from '@/store/index2';

  //数据库版本，遇到数据库数据不对的时候进行数据迁移
  window.localStorage.setItem('version', '0.0.1');

  @Component({
    components: {Types, Tags, FormItem, NumberPad}
  })
  export default class Money extends Vue {

    tags = store.tagList;

    //对象的初始值
    record: RecordItem = {tags: [], notes: '', type: '-', amount: 0};
    recordList = store.recordList;

    //保存数据的数组
    recordListModel: RecordItem[] = store.recordList;

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
      store.createRecord(this.record);
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