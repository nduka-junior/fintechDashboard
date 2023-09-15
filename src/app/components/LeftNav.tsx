import React from "react";
import DropDown from "./DropDown";

function LeftNav() {
  const payments = [
    {
      name: "Transctions",
      path: "assets/transac.svg",
      alt: "Transactions",
    },
    {
      name: "Customers",
      path: "assets/customer.svg",
      alt: "customer",
    },
    {
      name: "Payouts",
      path: "assets/payouts.svg",
      alt: "payout",
    },
    {
      name: "Balances",
      path: "assets/Balances.svg",
      alt: "balances",
    },
    {
      name: "Subscriptions",
      path: "assets/sub.svg",
      alt: "sub",
    },
    {
      name: "Payment plans",
      path: "assets/plans.svg",
      alt: "Payment plans",
    },
  ];
  const commerce = [
    {
      name: "Referrals",
      path: "assets/Referrals.svg",
      alt: "Referrals ",
    },
    {
      name: "Audit Logs",
      path: "assets/Audit logs.svg",
      alt: "Audit Logs ",
    },
    {
      name: "Settings",
      path: "assets/Settings.svg",
      alt: "Settings ",
    },
  ];

  const DropDownName = "Payments";

  return (
    <div className="col-span-2">
      <DropDown data={payments} name={DropDownName} />
      <div>
        <DropDown data={commerce} name={"Commerce"} />
      </div>{" "}
    </div>
  );
}

export default LeftNav;
