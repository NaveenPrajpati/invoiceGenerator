import React, { createContext, useState } from "react";

const InvoiceContext = createContext();

const InvoiceProvider = ({ children }) => {
  const [invoiceData, setInvoiceData] = useState({
    soldBy: "Varasiddhi Silk Exports",
    sellarAddress:
      "75, 3rd Cross, Lalbagh Road, BENGALURU, KARNATAKA, 560027, IN",
    panNo: "AACFV3325K",
    gstNo: "29AACFV3325K1ZY",
    orderNumber: "403-3225714-7676307",
    orderDate: "28.10.2019",
    billingAddress:
      "Madhu B, Eurofins IT Solutions India Pvt Ltd., 1st Floor, Maruti Platinum, Lakshminarayana Pura, AECS Layout, BENGALURU, KARNATAKA, 560037, IN",
    shippingAddress:
      "Madhu B, Eurofins IT Solutions India Pvt Ltd., 1st Floor, Maruti Platinum, Lakshminarayana Pura, AECS Layout, BENGALURU, KARNATAKA, 560037, IN",
    placeOfSupply: "KARNATAKA",
    placeOfDelivery: "KARNATAKA",
    invoiceNumber: "IN-761",
    invoiceDate: "28.10.2019",
    items: [
      {
        description:
          "Varasiddhi Silks Men's Formal Shirt (SH-05-42, Navy Blue, 42)",
        unitPrice: 338.1,
        qty: 1,
        discount: 0,
        taxRate: "2.5%",
        taxAmount: 13.45,
        totalAmount: 365.0,
      },
      // {
      //   description:
      //     "Varasiddhi Silks Men's Formal Shirt (SH-05-40, Navy Blue, 40)",
      //   unitPrice: 338.1,
      //   qty: 3,
      //   netAmount: 338.1,
      //   taxRate: "2.5%",
      //   taxAmount: 13.45,
      //   totalAmount: 365.0,
      // },
    ],
    totalAmount: "1195.00",
    amountInWords: "One Thousand One Hundred And Ninety-five only",
    authorizedSignatory: "Authorized Signatory",
    signImg: "",
    logo: "",
  });

  return (
    <InvoiceContext.Provider value={{ invoiceData, setInvoiceData }}>
      {children}
    </InvoiceContext.Provider>
  );
};

export { InvoiceContext, InvoiceProvider };
