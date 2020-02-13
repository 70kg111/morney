//引入mvc思想，vue中已经有了 v 和 c ，这里封装一下 m ，也就是对数据的操作

const localStorageKeyName: string = 'recordList';

const model = {

  //复制单条数据
  clone(data: RecordItem[] | RecordItem) {
    return JSON.parse(JSON.stringify(data));
  },
  //获取数据
  fetch() {
    return JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
  },
  //保存数据
  save(data: RecordItem[]) {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(data));
  }

};

export {model};