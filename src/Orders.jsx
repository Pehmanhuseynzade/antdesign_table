import { useEffect, useState } from "react";
import { getAllOrders } from "./httpsrequests";
import moment from "moment";
//import { Button } from 'antd';
 import { Table } from "antd";


const columns = [
  {
    title: "Customer Id",
    dataIndex: "customerId",
    sorter: (a, b) => a.customerId - b.customerId,
  },
  {
    title: "Freight",
    dataIndex: "freight",
    sorter: (a, b) => a.freight - b.freight,
   

  
  },
  {
    title: "Adress",
    render: (_,adrs)=>(
        <p>{adrs.shipAddress.country},{adrs.shipAddress.city}</p>
    ),

  },
  {
    title: "Order Date",
    dataIndex: "orderDate",
    render:(_,time)=>(
      <p>{moment(time.orderDate).format("MMM Do YY")}</p>
    ),
  },
  {
    title: "Required Date",
    dataIndex: "requiredDate",
    render:(_,time)=>(
        <p>{moment(time.orderDate).format("MMM Do YY")}</p>
      ),
  },
  {
    title: "Shipped Date",
    dataIndex: "shippedDate",
    render:(_,time)=>(
        <p>{moment(time.orderDate).format("MMM Do YY")}</p>
      ),
  },
];


const Orders = () => {
  let [orders, setOrders] = useState([]);
  useEffect(() => { getAllOrders().then((data) => {
     setOrders(data)
          })}, []);
  return (
    <Table
      columns={columns}
      dataSource={orders}
      scroll={{
        x: 1000,
      }}
    />
  );
};

export default Orders;
