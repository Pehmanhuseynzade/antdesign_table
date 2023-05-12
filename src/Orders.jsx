import { useEffect, useState } from "react";
import { getAllOrders } from "./httpsrequests";
import moment from "moment";
//import { Button } from 'antd';
 import { Table } from "antd";

const Orders = () => {
  let [orders, setOrders] = useState([]);
  const columns = [
    {
      title: "Customer Id",
      dataIndex: "customerId",
      //muellime filtere basarsiz birden ele bilersiniz ishlemir.Amma ki ishleyir sadece datalar o qeder coxdur ki,dondurur ve gec acilir.Amma Ishleyir
      filters: orders.map((order) => {
          return {
            text: order.customerId,
            value: order.customerId,
          };
        }),
        filterSearch: true,
        onFilter: (value, record) => record.customerId.includes(value),
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
      sorter: (a, b) => parseInt(a.orderDate) - parseInt(b.orderDate),
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
  useEffect(() => { getAllOrders().then((data) => {
     setOrders(data)
          })}, []);
  return (
    < Table
      columns={columns}
      dataSource={orders}
      rowKey={(item)=>item.id}
      scroll={{
        x: 1000,
      }}
    />
  );
};

export default Orders;
