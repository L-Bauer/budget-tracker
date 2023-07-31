
import React, { Fragment, useEffect, useState } from "react";

const ListTransactions = () => {
  return <Fragment>
    {" "}
    <table className="table table-striped table-hover text-center mt-5">
      <thead>
        <tr>
          <th>Transaction Date</th>
          <th>Item</th>
          <th>Price</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {/*<tr>
          <td>John</td>
          <td>Doe</td>
          <td>john@example.com</td>
        </tr>
        <tr>
          <td>Mary</td>
          <td>Moe</td>
          <td>mary@example.com</td>
        </tr>
        <tr>
          <td>July</td>
          <td>Dooley</td>
          <td>july@example.com</td>
        </tr> */}
      </tbody>
    </table>
</Fragment>
}

export default ListTransactions