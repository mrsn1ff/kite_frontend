import React from "react";

function Footer() {
  return (
    <footer style={{backgroundColor:"#f2f2f2"}}>
    <div className="container border-top mt-5 mb-3">
      <div className="row p-2 mt-5">
        <div className="col">
          <img
            src="media/images/logo.svg"
            alt="Logo"
            style={{ width: "50%" }}
            className="mb-3"
          />
          <p className="">
            &copy; 2010 - 2024, Zerodha Broking Ltd. All rights reserved.
          </p>
        </div>
        <div className="col">
          <h1 className="fs-5 mb-3">Company</h1>
            <div className="text-muted">
                <a href="" class="text-decoration-none">About</a><br />
                <a href="" class="text-decoration-none">Products</a><br />
                <a href="" class="text-decoration-none">Pricing</a><br />
                <a href="" class="text-decoration-none">Referral programme</a><br />
                <a href="" class="text-decoration-none">Careers</a><br />
                <a href="" class="text-decoration-none">Zerodha.tech</a><br />
                <a href="" class="text-decoration-none">Press & media</a><br />
                <a href="" class="text-decoration-none">Zerodha Cares (CSR)</a><br />
            </div>
        </div>
        <div className="col" style={{textDecoration:"undefined"}}>
          <h1 className="fs-5 mb-3">Support</h1>
          <a href="" class="text-decoration-none">Contact us</a>
          <br />
          <a href="" class="text-decoration-none">Support portal</a>
          <br />
          <a href="" class="text-decoration-none">Z-Connect blog</a>
          <br />
          <a href="" class="text-decoration-none">List of charges</a>
          <br />
          <a href="" class="text-decoration-none">Downloads & resources</a>
          <br />
          <a href="" class="text-decoration-none">Videos</a>
          <br />
          <a href="" class="text-decoration-none">
            Market overview
          </a>
          <br />
          <a href="" class="text-decoration-none">How to file a complaint?</a>
          <br />
          <a href="" class="text-decoration-none">Status of your complaints</a>
          <br />
        </div>
        <div className="col">
          <h1 className="fs-5 mb-3">Account</h1>
          <a href="" class="text-decoration-none">Open an account</a>
          <br />
          <a href="" class="text-decoration-none">Fund transfer</a> <br />
        </div>
      </div>
      <div className="mt-5 text-muted" style={{ fontSize: "10px" }}>
        <p>
          Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
          no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
          Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading
          through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI
          Registration no.: INZ000038238 Registered Address: Zerodha Broking
          Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public
          School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For
          any complaints pertaining to securities broking please write to
          complaints@zerodha.com, for DP related to dp@zerodha.com. Please
          ensure you carefully read the Risk Disclosure Document as prescribed
          by SEBI | ICF
        </p>
        <p>
          Procedure to file a complaint on SEBI SCORES: Register on SCORES
          portal. Mandatory details for filing complaints on SCORES: Name, PAN,
          Address, Mobile Number, E-mail ID. Benefits: Effective Communication,
          Speedy redressal of the grievances
        </p>
        <p>Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>
        <p>
          Investments in securities market are subject to market risks; read all
          the related documents carefully before investing.
        </p>
        <p>
          Attention investors: 1) Stock brokers can accept securities as margins
          from clients only by way of pledge in the depository system w.e.f
          September 01, 2020. 2) Update your e-mail and phone number with your
          stock broker / depository participant and receive OTP directly from
          depository on your e-mail and/or mobile number to create pledge. 3)
          Check your securities / MF / bonds in the consolidated account
          statement issued by NSDL/CDSL every month.
        </p>
        <p>
          "Prevent unauthorised transactions in your account. Update your mobile
          numbers/email IDs with your stock brokers. Receive information of your
          transactions directly from Exchange on your mobile/email at the end of
          the day. Issued in the interest of investors. KYC is one time exercise
          while dealing in securities markets - once KYC is done through a SEBI
          registered intermediary (broker, DP, Mutual Fund etc.), you need not
          undergo the same process again when you approach another
          intermediary." Dear Investor, if you are subscribing to an IPO, there
          is no need to issue a cheque. Please write the Bank account number and
          sign the IPO application form to authorize your bank to make payment
          in case of allotment. In case of non allotment the funds will remain
          in your bank account. As a business we don't give stock tips, and have
          not authorized anyone to trade on behalf of others. If you find anyone
          claiming to be part of Zerodha and offering such services, please
          create a ticket here.
        </p>
        <div className="d-flex justify-content-center mt-3">
            <ul class="navbar-nav flex-row">
              <li class="nav-item me-2">
                <a class="nav-link active" aria-current="page" href="#">
                  NSE
                </a>
              </li>
              <li class="nav-item me-2">
                <a class="nav-link active" aria-current="page" href="#">
                  BSE
                </a>
              </li>
              <li class="nav-item me-2">
                <a class="nav-link active" aria-current="page" href="#">
                  MCX
                </a>
              </li>
              <li class="nav-item me-2">
                <a class="nav-link active" aria-current="page" href="#">
                  Terms&Conditions
                </a>
              </li>
              <li class="nav-item me-2">
                <a class="nav-link active" aria-current="page" href="#">
                  Policies & procedures
                </a>
              </li>
              <li class="nav-item me-2">
                <a class="nav-link active" aria-current="page" href="#">
                  Privacy policy
                </a>
              </li>
              <li class="nav-item me-2">
                <a class="nav-link active" aria-current="page" href="#">
                  Disclosure
                </a>
              </li>
              <li class="nav-item me-2">
                <a class="nav-link active" aria-current="page" href="#">
                  For investor's attention
                </a>
              </li>
              <li class="nav-item me-2">
                <a class="nav-link active" aria-current="page" href="#">
                  Investor charter
                </a>
              </li>
            </ul>
        </div>
      </div>
    </div>
    </footer>
  );
}

export default Footer;
