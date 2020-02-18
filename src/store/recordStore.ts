import clone from '@/lib/clone';

const localStorageKeyName: string = 'recordListModel';

const recordStore = {

  recordList: [] as RecordItem[],
  //获取数据

  //保存数据

  createRecord(record: RecordItem) {
    //深拷贝实现，每次都复制一个和当前对象一样的对象，然后把复制出来的对象传到数组中保存起来

  }
};

recordStore.fetchRecords();

export default recordStore;