//先获取本地数据库的最大值，在这个基础上id再增加，如果没有获取到就从0开始
let id: number = parseInt(window.localStorage.getItem('_idMax') || '0') || 0;

function createId() {
  id++;
  //把id存到 localStorage
  window.localStorage.setItem('_indeMax', id.toString());
  return id;
}

export default createId;