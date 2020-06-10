import {DatePicker} from "antd";
import moment from "moment";
export function getcurrentdate(separator='-'){

    let date = new Date().getDate();
    let month = new Date().getMonth() + 1
    let year = new Date().getFullYear();

    return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date<10?`0${date}`:`${date}`}`
}