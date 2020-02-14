//引入mvc思想，vue中已经有了 v 和 c ，这里封装一下 m ，也就是对数据的操作

import clone from '@/lib/clone';

const localStorageKeyName: string = 'recordListModel';

const recordListModel = {

  data: [] as RecordItem[],

  //新增一条数据
  create(record:RecordItem){
    //深拷贝实现，每次都复制一个和当前对象一样的对象，然后把复制出来的对象传到数组中保存起来
    const record2: RecordItem = clone(record);
    record2.createdAt = new Date();
    this.data.push(record2);
  },
  //获取数据
  fetch() {
    this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
    return this.data;
  },
  //保存数据
  save() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
  }

};

export {recordListModel};