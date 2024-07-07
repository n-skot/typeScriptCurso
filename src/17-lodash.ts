import _ from "lodash";

const data = [
  { name: "John", age: 25, role: "admin" },
  { name: "Jane", age: 30, role: "admin" },
  { name: "Mike", age: 28, role: "customer" },
  { name: "Bonnie", age: 28, role: "customer" },
  { name: "Sarah", age: 32, role: "seller" },
]

const groupByData = _.groupBy(data, (item) => item.role);
const filteredData = _.filter(data, { role: "admin" });
console.log(groupByData);
console.log(filteredData);
