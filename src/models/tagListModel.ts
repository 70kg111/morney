//引入mvc思想，vue中已经有了 v 和 c ，这里封装一下 m ，也就是对数据的操作

import createId from '@/lib/createId';

const localStorageKeyName: string = 'tagList';

const tagListModel: TagListModel = {

  data: [],
  //获取标签
  fetch() {
    this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
    return this.data;
  },
  //创建标签
  create(name) {
    const names = this.data.map(item => item.name);
    if (names.indexOf(name) >= 0) {
      window.alert('你已经创建过这个标签了~');
      return '';
    }
    const id = createId().toString();

    this.data.push({id, name: name});
    this.save();
    return name;
  },
  //更新标签
  update(id, name) {
    const idList = this.data.map(item => item.id);
    if (idList.indexOf(id) >= 0) {
      const names = this.data.map(item => item.name);
      if (names.indexOf(name) >= 0) {
        return 'duplicated';
      } else {
        const tag = this.data.filter(item => item.id === id)[0];
        tag.name = name;
        this.save();
        return 'success';
      }
    } else {
      return 'not found';
    }
  },
  //删除标签
  remove(id: string) {
    let index = -1;
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].id === id) {
        index = i;
        break;
      }
    }
    console.log(index);
    this.data.splice(index, 1);
    this.save();
    return true;
  },
  //保存标签
  save() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
  }

};

export {tagListModel};