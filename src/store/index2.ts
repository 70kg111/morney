//太依赖window了，这时候创建一个store，把所有的都挂到store上
import {tagListModel} from '@/models/tagListModel';
import {recordListModel} from '@/models/recordListModel';

const store = {
  //tag store
  //把数据放在这里让 Money.vue 和 Labels.vue 去读，那么两边都是读取的同一个对象
  tagList: tagListModel.fetch(),
  findTag (id: string) {
    return this.tagList.filter(t => t.id === id)[0];
  },
  createTag: (name: string) => {
    const message = tagListModel.create(name);
  }
  , removeTag: (id: string) => {
    return tagListModel.remove(id);
  },
  updateTag: (id: string, name: string) => {
    return tagListModel.update(id, name);
  },
  //record store
  recordList: recordListModel.fetch(),
  createRecord: (record: RecordItem) => {
    recordListModel.create(record);
  }
};

export default store;