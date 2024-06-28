import React, { useContext, useState } from "react";
import "./Form.css";
import { InvoiceContext } from "../context/DataContext";

function Form() {
  const { invoiceData, setInvoiceData } = useContext(InvoiceContext);
  const [showAddItem, setShowAddItem] = useState(false);
  const [newItem, setNewItem] = useState({
    description: "",
    unitPrice: 0,
    qty: 1,
    discount: 0,
    taxRate: "2.5%",
    taxAmount: 0.0,
    totalAmount: 0.0,
  });

  const handleChange = (e, index, field) => {
    const value = e.target.value;
    setInvoiceData((prevData) => {
      if (index !== undefined) {
        const items = [...prevData.items];
        items[index][field] = value;
        return { ...prevData, items };
      }
      return { ...prevData, [field]: value };
    });
  };

  return (
    <div className="invoice h-screen overflow-scroll">
      <div className="flex items-center gap-10">
        {invoiceData.logo && (
          <img src={invoiceData.logo} alt="Amazon Logo" className="logo" />
        )}
        {!invoiceData.logo && <label htmlFor="">Choose logo</label>}
        <input
          type="file"
          name=""
          id=""
          accept="image/*"
          onChange={(e) => {
            console.log(e.target.files);
            const imageSrc = URL.createObjectURL(e.target.files[0]);
            setInvoiceData((pre) => {
              return { ...pre, logo: imageSrc };
            });
          }}
        />
      </div>
      <h2 className=" font-semibold">Seller Details</h2>
      <div className="section">
        <label>Sold By:</label>
        <input
          type="text"
          value={invoiceData.soldBy}
          onChange={(e) => handleChange(e, undefined, "soldBy")}
        />
        <label>Address:</label>
        <input
          type="text"
          value={invoiceData.sellarAddress}
          onChange={(e) => handleChange(e, undefined, "sellarAddress")}
        />
        <label>PAN No:</label>
        <input
          type="text"
          value={invoiceData.panNo}
          onChange={(e) => handleChange(e, undefined, "panNo")}
        />
        <label>GST Registration No:</label>
        <input
          type="text"
          value={invoiceData.gstNo}
          onChange={(e) => handleChange(e, undefined, "gstNo")}
        />
      </div>
      <div className="section">
        <label>Order Number:</label>
        <input
          type="text"
          value={invoiceData.orderNumber}
          onChange={(e) => handleChange(e, undefined, "orderNumber")}
        />
        <label>Order Date:</label>
        <input
          type="text"
          value={invoiceData.orderDate}
          onChange={(e) => handleChange(e, undefined, "orderDate")}
        />
      </div>
      <div className="section">
        <label>Billing Address:</label>
        <textarea
          value={invoiceData.billingAddress}
          onChange={(e) => handleChange(e, undefined, "billingAddress")}
        />
        <label>Shipping Address:</label>
        <textarea
          value={invoiceData.shippingAddress}
          onChange={(e) => handleChange(e, undefined, "shippingAddress")}
        />
      </div>
      <div className="section">
        <label>Place of Supply:</label>
        <input
          type="text"
          value={invoiceData.placeOfSupply}
          onChange={(e) => handleChange(e, undefined, "placeOfSupply")}
        />
        <label>Place of Delivery:</label>
        <input
          type="text"
          value={invoiceData.placeOfDelivery}
          onChange={(e) => handleChange(e, undefined, "placeOfDelivery")}
        />
      </div>
      <div className="section">
        <label>Invoice Number:</label>
        <input
          type="text"
          value={invoiceData.invoiceNumber}
          onChange={(e) => handleChange(e, undefined, "invoiceNumber")}
        />
        <label>Invoice Date:</label>
        <input
          type="text"
          value={invoiceData.invoiceDate}
          onChange={(e) => handleChange(e, undefined, "invoiceDate")}
        />
      </div>
      <div className="items">
        <h2 className="font-bold">Items</h2>
        {invoiceData.items.map((item, index) => (
          <div key={index} className="item">
            <label>Description:</label>
            <textarea
              value={item.description}
              onChange={(e) => handleChange(e, index, "description")}
            />
            <label>Unit Price:</label>
            <input
              type="number"
              value={item.unitPrice}
              onChange={(e) => handleChange(e, index, "unitPrice")}
            />
            <label>Qty:</label>
            <input
              type="number"
              value={item.qty}
              onChange={(e) => handleChange(e, index, "qty")}
            />
            <label>Discount:</label>
            <input
              type="number"
              value={item.discount}
              onChange={(e) => handleChange(e, index, "discount")}
            />
            <label>Tax Rate:</label>
            <input
              type="text"
              value={item.taxRate}
              onChange={(e) => handleChange(e, index, "taxRate")}
            />
            <label>Tax Amount:</label>
            <input
              type="number"
              value={item.taxAmount}
              onChange={(e) => handleChange(e, index, "taxAmount")}
            />
            <label>Total Amount:</label>
            <input
              type="number"
              value={item.totalAmount}
              onChange={(e) => handleChange(e, index, "totalAmount")}
            />
            <button
              className=" p-1 bg-red-400 text-white rounded-md"
              onClick={() => {
                const arr = invoiceData.items.filter((it, ind) => index != ind);
                setInvoiceData(
                  ...(pre) => {
                    return { ...pre, items: arr };
                  }
                );
              }}
            >
              Delete
            </button>
          </div>
        ))}

        {showAddItem && (
          <div className="item">
            <label>Description:</label>
            <textarea
              value={newItem.description}
              onChange={(e) => {
                setNewItem((pre) => {
                  return { ...pre, description: e.target.value };
                });
              }}
            />
            <label>Unit Price:</label>
            <input
              type="number"
              value={newItem.unitPrice}
              onChange={(e) => {
                setNewItem((pre) => {
                  return { ...pre, unitPrice: e.target.value };
                });
              }}
            />
            <label>Qty:</label>
            <input
              type="number"
              value={newItem.qty}
              onChange={(e) => {
                setNewItem((pre) => {
                  return { ...pre, qty: e.target.value };
                });
              }}
            />
            <label>Discount:</label>
            <input
              type="number"
              value={newItem.discount}
              onChange={(e) => {
                setNewItem((pre) => {
                  return { ...pre, discount: e.target.value };
                });
              }}
            />
            <label>Tax Rate:</label>
            <input
              type="text"
              value={newItem.taxRate}
              onChange={(e) => {
                setNewItem((pre) => {
                  return { ...pre, taxRate: e.target.value };
                });
              }}
            />
            <label>Tax Amount:</label>
            <input
              type="number"
              value={newItem.taxAmount}
              onChange={(e) => {
                setNewItem((pre) => {
                  return { ...pre, taxAmount: e.target.value };
                });
              }}
            />
            <label>Total Amount:</label>
            <input
              type="number"
              value={newItem.totalAmount}
              onChange={(e) => {
                setNewItem((pre) => {
                  return { ...pre, totalAmount: e.target.value };
                });
              }}
            />
            <button
              className=" p-1 bg-red-400 text-white rounded-md"
              onClick={() => {
                const arr = [...invoiceData.items, newItem];
                setInvoiceData(
                  ...(pre) => {
                    return { ...pre, items: arr };
                  }
                );
              }}
            >
              Add
            </button>
          </div>
        )}
        {!showAddItem && (
          <button
            onClick={() => setShowAddItem(true)}
            className=" p-1 bg-blue-400 rounded-md text-white"
          >
            Add Items
          </button>
        )}
      </div>
      <div className="section">
        <label>Total Amount:</label>
        <input
          type="text"
          value={invoiceData.totalAmount}
          onChange={(e) => handleChange(e, undefined, "totalAmount")}
        />
        <label>Amount in Words:</label>
        <input
          type="text"
          value={invoiceData.amountInWords}
          onChange={(e) => handleChange(e, undefined, "amountInWords")}
        />
      </div>
      <div className="section">
        <label>Authorized Signatory:</label>
        <input
          type="file"
          onChange={(e) => {
            const imageSrc = URL.createObjectURL(e.target.files[0]);
            setInvoiceData((pre) => {
              return { ...pre, signImg: imageSrc };
            });
          }}
        />
      </div>
    </div>
  );
}

export default Form;
