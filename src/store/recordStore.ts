import clone from '@/lib/clone';

const localStorageKeyName: string = 'recordListModel';

const recordStore = {

  recordList: [] as RecordItem[],
  //获取数据
  fetchRecords() {
    this.recordList = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
    return this.recordList;
  },
  //保存数据
  saveRecords() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.recordList));
  },
  createRecord(record: RecordItem) {
    //深拷贝实现，每次都复制一个和当前对象一样的对象，然后把复制出来的对象传到数组中保存起来
    const record2: RecordItem = clone(record);
    record2.createdAt = new Date();
    this.recordList?.push(record2);
    recordStore.saveRecords();
  }
};

recordStore.fetchRecords();

export default recordStore;