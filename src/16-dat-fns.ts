import { format, formatDistance, subDays } from "date-fns";

const date = new Date(1998, 11, 15);
const rta = subDays(date, 1);
const string = format(rta, 'yyyy-MM-dd');

console.log(string);
