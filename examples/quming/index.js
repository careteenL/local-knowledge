const a =
  "镜铿锵镂遵旷蕾栎麓攀麒蔷萨薇薪薛薏薄绘浏泺鹏丽庐庞烁韬玺绎疆垅稳韵滢荟竞邻关檐迁识";
const b =
  "贵开凯涵皓惠尊晴理淋景捷超复越喜翔智为众淮盛程淳顺然茗轶栋杰贺迪晶朝钧竣钦情韧善胜述童晰琇喧喻诏迦珺棋茜雅尧傜茵博发涪富画媚淑淞添雯雄云焙婷媛岚嵋崴栖强钥淏勋喆淯 棠 能淇舒砚茹斯乔淦贻清深寒植淅兹寻";

const xlsx = require("xlsx");
const path = require("path");

// 将字符串转换成数组
const aArray = Array.from(a);
const bArray = Array.from(b);

// 生成每列数据
const data = [];

// 每列单独存放一个 a 字母对应的组合
aArray.forEach((charA) => {
  const column = [];
  bArray.forEach((charB) => {
    column.push(`王${charA}${charB}`);
  });
  data.push(column); // 将每列添加到数据中
});

// 转置数据（填充空白确保长度一致）
const maxLength = Math.max(...data.map((col) => col.length));
const formattedData = Array.from(
  { length: maxLength },
  (_, rowIndex) => data.map((col) => col[rowIndex] || "") // 填充空白
);

// 创建 Excel 工作簿
const workbook = xlsx.utils.book_new();
const worksheet = xlsx.utils.aoa_to_sheet(formattedData);
xlsx.utils.book_append_sheet(workbook, worksheet, "组合");

// 保存为 Excel 文件
const targetFile = path.resolve(__dirname, "./19+12.xlsx");
xlsx.writeFile(workbook, targetFile);
console.log("结果已保存到 combinations_columns.xlsx 文件中");
