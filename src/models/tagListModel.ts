//引入mvc思想，vue中已经有了 v 和 c ，这里封装一下 m ，也就是对数据的操作

const localStorageKeyName: string = 'tagList';

type Tag = {
  id: string;
  name: string;
}

type TagListModel = {
  data: Tag[]
  fetch: () => Tag[]
  create: (name: string) => string
  save: () => void
}

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
    this.data.push({id: name, name: name});
    this.save();
    return name;
  },
  //保存标签
  save() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
  }

};

export {tagListModel};