import React from "react";

function OpenAccount() {
  return (
    <div className="container mt-5">
        <div className="row text-center">
            <h1 className="mt-5 fs-1">Open a Zerodha account</h1>
            <p className="mt-4 fs-5">
                Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades. 
            </p>
            <button
                className="p-2 btn btn-primary fs-5 mt-4 mb-5"
                style={{ width: "15%", margin: "0 auto", padding: "2px" }}
            >
                Sign up now
            </button>
        </div>
    </div>
  );
}

export default OpenAccount;
