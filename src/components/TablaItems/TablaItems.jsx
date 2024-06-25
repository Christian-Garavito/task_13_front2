import React from "react";

const TablaItems = ({ itemsMostrar, headers }) => {
  // const headers = Object.keys(itemsMostrar?.[0] ?? {});

  return (
    <div>
      <table>
        <thead>
          <tr>
            {headers?.map((header, indHeader) => (
              <th key={indHeader}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {itemsMostrar?.map((obj, indItem) => (
            <tr key={indItem}>
              {Object.values(obj).map((val, indValue) => (
                <td key={indValue}>{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaItems;