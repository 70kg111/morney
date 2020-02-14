//太依赖window了，这时候创建一个store，把所有的都挂到store上import {recordListModel} from '@/models/recordListModel';
import recordStore from '@/store/recordStore';
import tagStore from '@/store/tagStore';

const store = {
    //record store
    ...recordStore,
    //tag store
    ...tagStore

};

console.log(store);

export default store;