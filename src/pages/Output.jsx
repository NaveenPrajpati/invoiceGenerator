import React, { useContext } from "react";
import { InvoiceContext } from "../context/DataContext";

export default function Output() {
  const { invoiceData, handleChange } = useContext(InvoiceContext);
  return (
    <div className=" w-1/2 h-screen py-4 px-10 font-normal text-black ">
      {/* header info */}
      <div className=" flex justify-between items-center">
        <img src={invoiceData.logo} alt="Logo" className="logo" />
        <div className=" flex flex-col items-end">
          <p className=" font-bold text-sm">
            Tax Invoic/Bill of Supply/Cash Memo
          </p>
          <p className=" text-xs ">(Original for Recipient)</p>
        </div>
      </div>

      {/* billing info */}
      <div className="flex justify-between mt-8 text-xs">
        {/* left box */}
        <div className=" w-1/2  flex flex-col justify-between ">
          <div>
            <div>
              <p className=" font-bold ">Sold By:</p>
              <p className="  ">{invoiceData.soldBy}</p>
              <p className="  max-w-48">{invoiceData.sellarAddress}</p>
            </div>
            <div className="mt-4">
              <p>
                <span className="font-bold">Pan no</span>: {invoiceData.panNo}
              </p>
              <p>
                <span className="font-bold">GST Registration No</span>:{" "}
                {invoiceData.gstNo}
              </p>
            </div>
          </div>
          <div>
            <p>
              <span className=" font-bold">Order Number</span>:{" "}
              {invoiceData.orderNumber}
            </p>
            <p>
              <span className=" font-bold">Order Date</span>:{" "}
              {invoiceData.orderDate}
            </p>
          </div>
        </div>

        {/* right box */}
        <div className=" w-1/2  flex flex-col items-end text-right">
          <div className=" ">
            <p className=" font-bold">Billing Address:</p>
            <p className=" w-48">{invoiceData.billingAddress}</p>
            <p className="">IN</p>
            <p className=" text-xs">
              <span className="font-bold ">State UT Code</span>: 29
            </p>
          </div>

          <div className="mt-8">
            <p className=" font-bold">Shipping Address:</p>
            <p className=" text-xs w-48">{invoiceData.shippingAddress}</p>
            <p className="text-xs">IN</p>
            <p className=" text-xs">
              <span className="font-bold ">State UT Code</span>: 29
            </p>
            <p className=" text-xs">
              <span className="font-bold">Place of supply</span>: NOIDA
            </p>
            <p className=" text-xs">
              <span className="font-bold ">Place of delivery</span>: NOIDA
            </p>
            <p className=" text-xs">
              <span className="font-bold">Invoice Number</span>: IN-123
            </p>
            <p className=" text-xs">
              <span className="font-bold ">Invoice Details</span>: KA-12313-123
            </p>
            <p className=" text-xs">
              <span className="font-bold ">Invoice Date</span>: 12.13.1233
            </p>
          </div>
        </div>
      </div>

      {/* price info table */}

      <table className="table-auto border-collapse  mt-5 text-xs w-full text-center">
        <thead className="">
          <tr className="">
            <th className=" text-xs border-2 border-black bg-red-100">
              SI No.
            </th>
            <th className=" text-xs border-2 border-black bg-red-100">
              Description
            </th>
            <th className=" text-xs border-2 border-black bg-red-100">
              Unit Price
            </th>
            <th className=" text-xs border-2 border-black bg-red-100">Qty</th>
            <th className=" text-xs border-2 border-black bg-red-100">
              Net Amount
            </th>
            <th className=" text-xs border-2 border-black bg-red-100">
              Tax Rate
            </th>
            <th className=" text-xs border-2 border-black bg-red-100">
              Tax Type
            </th>
            <th className=" text-xs border-2 border-black bg-red-100">
              Tax Amount
            </th>
            <th className=" text-xs border-2 border-black bg-red-100">
              Total Amount
            </th>
          </tr>
        </thead>
        <tbody>
          {invoiceData?.items.map((item, index) => (
            <tr className="  ">
              <td className=" text-sm text-center border-black border-2">
                {index + 1}
              </td>
              <td className=" text-start border-2 border-black ">
                {item.description}
              </td>
              <td className=" border-2 border-black ">{item.unitPrice}</td>
              <td className=" text-sm border-2 border-black ">{item.qty}</td>
              <td className=" text-sm border-2 border-black ">
                ₹
                {parseInt(item.unitPrice) *
                  (1 - parseInt(item.discount) / 100) *
                  parseInt(item.qty)}
              </td>
              <td className=" text-sm border-2 border-black ">
                {item.taxRate}
              </td>
              <td className=" text-sm border-2 border-black ">CGST</td>
              <td className=" text-sm border-2 border-black ">
                {item.taxAmount}
              </td>
              <td className=" text-sm border-2 border-black ">
                {item.totalAmount}
              </td>
            </tr>
          ))}

          <tr className="border-2 border-black ">
            <td colSpan={7} className=" text-start">
              Total:
            </td>
            <td className="border-2 border-black bg-red-100">
              {invoiceData.totalAmount}
            </td>
            <td className="border-2 border-black bg-red-100">
              {invoiceData.totalAmount}
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr className="border-2 border-black ">
            <td colSpan="9" className="border">
              <div className="font-bold text-start">Amount in Words:</div>
              <div className=" text-start">{invoiceData.amountInWords}</div>
            </td>
          </tr>
          <tr className="border-2 border-black">
            <td colSpan="9" className="border px-2  text-end">
              <div className="font-bold">For Varasiddhi Silk Exports:</div>
              <div className="mt-4">
                {invoiceData.signImg && (
                  <img
                    src={invoiceData.signImg}
                    alt="Authorized Signatory"
                    className="h-12 mx-auto"
                  />
                )}
                {!invoiceData.signImg && (
                  <div className="border-2 border-black bg-red-100 w-20 h-10 "></div>
                )}
                <div>Authorized Signatory</div>
              </div>
            </td>
          </tr>
          <tr>
            <td colSpan="9" className=" px-1 ">
              Whether tax is payable under reverse charge - No
            </td>
          </tr>
        </tfoot>
      </table>

      {/* info */}

      <p className=" mt-10 text-center text-sm text-red-200">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse iure et
        tempore repudiandae itaque delectus, labore similique. Autem, neque et?
        tempore repudiandae itaque delectus, labore similique. Autem, neque et?
        tempore repudiandae itaque delectus, labore similique. Autem, neque et?
      </p>
    </div>
  );
}
