# 返回结果

> 以流式的输出结果

以下是一
个使用 React 和 TypeScript
创建的表格组件示例：

```tsx

import React from 'react';

//
 定义列的接口
interface Column
<T> {
  key: string;

  title: string;
  render?: (
value: any, record: T) => React.ReactNode;

  width?: number | string;
}

// 定义表
格组件的 Props 接口
interface Table
Props<T> {
  columns: Column
<T>[];
  dataSource: T[];

  rowKey?: string;
  loading
?: boolean;
  className?: string;

style?: React.CSSProperties;

onRow?: (record: T) => React.HTML
Attributes<HTMLTableRowElement>;
}


// 表格组件
function Table<T extends
 Record<string, any>>
({
  columns,
  dataSource,

  rowKey = 'id',
  loading =
 false,
  className = '',
  style,

  onRow,
}: TableProps<T>) {

return (
    <div className={`table-
container ${className}`} style={style}>

      {loading ? (
        <div className="table
-loading">Loading...</div>
      ) : (

<table className="table">
          <thead>

<tr>
              {columns.map((
column) => (
                <th
                  key={column
.key}
                  style={{ width: column.width
 }}
                  className="table-header"

                >
                  {column.title
}
                </th>
              ))}
            </tr>

          </thead>
          <tbody>

            {dataSource.map((record)
 => (
              <tr
                key={record[
rowKey]}
                {...(onRow ? on
Row(record) : {})}

className="table-row"
              >
                {columns.map
((column) => (
                  <td key
={column.key} className="table-cell">
                    {
column.render
                      ? column.render(record[column.
key], record)
                      : record[
column.key]}
                  </td>

                ))}
              </tr>

            ))}
          </tbody>
        </table>

)}
    </div>
  );
}

//
 添加默认样式
const
 styles = `
  .table-container {
    width
: 100%;
    overflow-x: auto;
  }


  .table {
    width: 100
%;
    border-collapse: collapse;

    border-spacing: 0;
  }


  .table-header {
    padding: 12
px 8px;
    background-color: #f
afafa;
    font-weight:
500;
    text-align: left;

border-bottom: 1px solid #e
8e8e8;
  }

  .table-row
 {
    &:hover {

background-color: #fafafa;

}
  }

  .table-cell {
    padding:
 12px 8px;
    border-bottom: 1
px solid #e8e8e8;

  }

  .table-loading {
    padding
: 24px;
    text-align: center;

  }
`;

export default Table;


// 使用示例：
const Example
: React.FC = () => {
  interface
 DataType {
    id: number;
    name
: string;
    age: number;

address: string;
  }

  const
 columns: Column<DataType>[] = [

    {
      key: 'name
',
      title: 'Name',

      width: 200,
    },

    {
      key: 'age',

      title: 'Age',

width: 100,
    },

{
      key: 'address',

      title: 'Address',
      render
: (value, record) => (
        <
a href={`/address/${record.id}`
}>{value}</a>
      ),

    },
  ];

  const dataSource:
 DataType[] = [
    {
      id:
1,
      name: 'John Brown',
      age:
 32,
      address: 'New York No. 1
 Lake Park',
    },
    {
      id:
2,
      name: 'Jim Green
',
      age: 42,

address: 'London No. 1
Lake Park',
    },
  ];

  return (

    <Table<DataType>

columns={columns}
      dataSource={data
Source}
      loading={false}

onRow={(record) => ({
        onClick:
 () => console.log('Row clicked:',
 record),
      })}
    />

  );
};
```

这个表
格组件包含以下特性：

1.  泛型支持，可
    以根据数据类型提供类
    型检查
2.  自定义列
    渲染
3.  加载状态

4.  自定义行点击事
    件
5.  可配置列
    宽
6.  基础样式

你
可以根据需求扩展更多功能，比
如：

1. 分页
2. 排序
3. 筛选
4. 固定列
5. 行
   选择
6. 展
   开行
7. 自定义表头

使
用示例：

```tsx
interface User
 {
  id: number;
  name
: string;
  email: string;

age: number;
}

const UserTable: React.FC
 = () => {
  const columns: Column
<User>[] = [
    {

      key: 'name',
      title
: 'Name',
      width:
200,
    },
    {
      key
: 'email',
      title:
'Email',
      width: 300,

    },
    {
      key:
 'age',
      title: '
Age',
      width: 100,

    },
    {
      key:
 'actions',
      title: 'Actions',

      render: (_, record) => (

        <div>
          <button onClick={()
 => handleEdit(record)}>Edit</button>

          <button onClick={() => handleDelete(record)}>Delete</button
>
        </div>
      ),

    },
  ];

  const handleEdit = (user:
 User) => {
    console.log('
Edit user:', user);
  };


const handleDelete = (user: User) =>
 {
    console.log('Delete user:',
 user);
  };

  const users
: User[] = [
    { id:
1, name: 'John', email: '
john@example.com', age: 30
 },
    { id: 2, name: 'Jane
', email: 'jane@example.com
', age: 25 },
  ];

  return (

    <Table<User>
      columns={columns}

dataSource={users}
      rowKey="
id"
      className="user-table"

      onRow={(record) => ({
        onClick:
 () => console.log('Clicked user:', record),

      })}
    />
  );
};

```

这个表格组件提供了基
础的表格功能，你可以根据实
际需求进行扩展和修
改。
