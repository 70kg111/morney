//将所有数据接收后放到一个对象里面，这个对象有以下几种属性，这就是在ts里面声明一个类型
type RecordItem = {
  tags: string[]
  notes: string
  type: string
  amount: number
  createdAt?: Date
}

type Tag = {
  id: string;
  name: string;
}

interface Window {
}