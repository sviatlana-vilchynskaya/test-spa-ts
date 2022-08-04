import React from "react";
import "./styles/index.css";

function Table() {
  return (
    <div className="table-container">
      <div className="table-contacts-wrap">
        <table className="table-contacts">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="table-contact-checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="table-contact-checkbox" />
                </label>
              </th>
              <td>
                <div className="contact-wrap">
                  <div className="contact-avatar">
                    <div className="contact-mask">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtAuo52iEqeBhllpTn02t-mFFA9GUPY4Cbag&usqp=CAU"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="contact-name">Hart Hagerty</div>
                    <div className="contact-country">United States</div>
                  </div>
                </div>
              </td>
              <td>
                Zemlak, Daniel and Leannon
                <span className="contact-badge">
                  Desktop Support Technician
                </span>
              </td>
              <td>Purple</td>
              <th>
                <button className="details-btn">details</button>
              </th>
            </tr>

            <tr>
              <th>
                <label>
                  <input type="checkbox" className="table-contact-checkbox" />
                </label>
              </th>
              <td>
                <div className="contact-wrap">
                  <div className="contact-avatar">
                    <div className="contact-mask">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGmaZgLLANRqjbr5CbgIQ0zV54gB7xMkraHg&usqp=CAU"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="contact-name">Brice Swyre</div>
                    <div className="contact-country">China</div>
                  </div>
                </div>
              </td>
              <td>
                Carroll Group
                <span className="contact-badge">Tax Accountant</span>
              </td>
              <td>Red</td>
              <th>
                <button className="details-btn">details</button>
              </th>
            </tr>

            <tr>
              <th>
                <label>
                  <input type="checkbox" className="table-contact-checkbox" />
                </label>
              </th>
              <td>
                <div className="contact-wrap">
                  <div className="contact-avatar">
                    <div className="contact-mask">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA-4vjXBWynvCKno-EGalFVJ-ocuxJEn2whw&usqp=CAU"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="contact-name">Marjy Ferencz</div>
                    <div className="contact-country">Russia</div>
                  </div>
                </div>
              </td>
              <td>
                Rowe-Schoen
                <span className="contact-badge">Office Assistant I</span>
              </td>
              <td>Crimson</td>
              <th>
                <button className="details-btn">details</button>
              </th>
            </tr>

            <tr>
              <th>
                <label>
                  <input type="checkbox" className="table-contact-checkbox" />
                </label>
              </th>
              <td>
                <div className="contact-wrap">
                  <div className="contact-avatar">
                    <div className="contact-mask">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR2gTHojt-XIhehmJHWF3vFYgcaV45OWYt1Q&usqp=CAU"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="contact-name">Yancy Tear</div>
                    <div className="contact-country">Brazil</div>
                  </div>
                </div>
              </td>
              <td>
                Wyman-Ledner
                <span className="contact-badge">
                  Community Outreach Specialist
                </span>
              </td>
              <td>Indigo</td>
              <th>
                <button className="details-btn">details</button>
              </th>
            </tr>
          </tbody>

          <tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default Table;
