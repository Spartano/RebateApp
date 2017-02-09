import React from 'react';

const RebateUI = ({ rebateP }) => {
console.log(rebateP)
  //all of this are variables
  const { email, urls, owner, added } = rebateP;


  return (
    <div className="rebate-info container">
      <div className="">
        <h5>Personal Info</h5>
        <ul className="list-group">
          <li className="list-group-item">Name: </li>
          <li className="list-group-item">Email: {email}</li>
        </ul>
      </div>

      <div className="">
        <h5>Rebate Details</h5>
        <ul className="list-group">
          <li className="list-group-item">Rebate: {owner}</li>
          <li className="list-group-item">Amount: $10</li>
          <li className="list-group-item">Brand: --fill--</li>
        </ul>
      </div>
      <div className='rebate'>
        <h5>Receipt</h5>
        <img src={urls[0]} />
      </div>
      <div className='receipt'>
        <h5>Receipt</h5>
        <img src={urls[1]} />
      </div>
      <div className="">
        <h5>Verify</h5>
        <ul className="list-group">
          <li className="list-group-item">Status: Submitted</li>
        </ul>
        <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal" >Verify Rebate</button>

      </div>
    </div>
  );
};

export default RebateUI;
