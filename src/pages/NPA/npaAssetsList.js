import React, { useState } from "react";

const OrgBasicData = () => {
  const [formData, setFormData] = useState({
    orgName: "",
    orgNumber: "",
    orgEmail: "",
    domain: "",
    telephone: "",
    taxNumber: "",
    location: "",
    orgType: "",
    incDate: "",
    headquarters: "",
    orgMaxMembers: "",
  });

  const [orgList, setOrgList] = useState([
    {
      id: 1,
      orgName: "Org A",
      orgNumber: "001",
      orgEmail: "a@example.com",
      domain: "org-a.com",
      telephone: "1234567890",
      taxNumber: "TX12345",
      location: "City A",
      orgType: "Non-Profit",
      incDate: "2020-01-01",
      headquarters: "HQ A",
      orgMaxMembers: "100",
    },
    // ... add more initial orgs as needed
  ]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newOrg = {
      id: orgList.length + 1,
      ...formData,
    };
    setOrgList((prev) => [...prev, newOrg]);
    setFormData({
      orgName: "",
      orgNumber: "",
      orgEmail: "",
      domain: "",
      telephone: "",
      taxNumber: "",
      location: "",
      orgType: "",
      incDate: "",
      headquarters: "",
      orgMaxMembers: "",
    });
  };

  return (
    <div>
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" style={{ marginBottom: "1rem" }}>
        <ol className="breadcrumb" style={{ fontSize: "13px" }}>
          <li className="breadcrumb-item"><a href="/">Home</a></li>
          <li
            className="breadcrumb-item active"
            aria-current="page"
            style={{ fontSize: "14px;", fontWeight: "bold" }}
          >
            Organization Basic Data
          </li>
        </ol>
      </nav>

      {/* Form Card */}
      <div
        className="card mb-4"
        style={{
          borderColor: "#d3d3d3",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          padding: "1.5rem"
        }}
      >
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              {/* Row 1 */}
              <div className="col-md-4">
                <label htmlFor="orgName" style={{ fontSize: "14px;", fontWeight: "600" }}>
                  Organization Name
                </label>
                <input
                  type="text"
                  id="orgName"
                  name="orgName"
                  className="form-control"
                  value={formData.orgName}
                  onChange={handleChange}
                  style={{ fontSize: "13px" }}
                  required
                />
              </div>

              <div className="col-md-4">
                <label htmlFor="orgNumber" style={{ fontSize: "14px;", fontWeight: "600" }}>
                  Organization Number
                </label>
                <input
                  type="text"
                  id="orgNumber"
                  name="orgNumber"
                  className="form-control"
                  value={formData.orgNumber}
                  onChange={handleChange}
                  style={{ fontSize: "13px" }}
                  required
                />
              </div>

              <div className="col-md-4">
                <label htmlFor="orgEmail" style={{ fontSize: "14px;", fontWeight: "600" }}>
                  Email
                </label>
                <input
                  type="email"
                  id="orgEmail"
                  name="orgEmail"
                  className="form-control"
                  value={formData.orgEmail}
                  onChange={handleChange}
                  style={{ fontSize: "13px" }}
                  required
                />
              </div>

              {/* Row 2 */}
              <div className="col-md-4">
                <label htmlFor="domain" style={{ fontSize: "14px;", fontWeight: "600" }}>
                  Domain
                </label>
                <input
                  type="text"
                  id="domain"
                  name="domain"
                  className="form-control"
                  value={formData.domain}
                  onChange={handleChange}
                  style={{ fontSize: "13px" }}
                />
              </div>

              <div className="col-md-4">
                <label htmlFor="telephone" style={{ fontSize: "14px;", fontWeight: "600" }}>
                  Telephone
                </label>
                <input
                  type="tel"
                  id="telephone"
                  name="telephone"
                  className="form-control"
                  value={formData.telephone}
                  onChange={handleChange}
                  style={{ fontSize: "13px" }}
                />
              </div>

              <div className="col-md-4">
                <label htmlFor="taxNumber" style={{ fontSize: "14px;", fontWeight: "600" }}>
                  Tax Number
                </label>
                <input
                  type="text"
                  id="taxNumber"
                  name="taxNumber"
                  className="form-control"
                  value={formData.taxNumber}
                  onChange={handleChange}
                  style={{ fontSize: "13px" }}
                />
              </div>

              {/* Row 3 */}
              <div className="col-md-4">
                <label htmlFor="location" style={{ fontSize: "14px;", fontWeight: "600" }}>
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  className="form-control"
                  value={formData.location}
                  onChange={handleChange}
                  style={{ fontSize: "13px" }}
                />
              </div>

              <div className="col-md-4">
                <label htmlFor="orgType" style={{ fontSize: "14px;", fontWeight: "600" }}>
                  Organization Type
                </label>
                <input
                  type="text"
                  id="orgType"
                  name="orgType"
                  className="form-control"
                  value={formData.orgType}
                  onChange={handleChange}
                  style={{ fontSize: "13px" }}
                />
              </div>

              <div className="col-md-4">
                <label htmlFor="incDate" style={{ fontSize: "14px;", fontWeight: "600" }}>
                  Incorporation Date
                </label>
                <input
                  type="date"
                  id="incDate"
                  name="incDate"
                  className="form-control"
                  value={formData.incDate}
                  onChange={handleChange}
                  style={{ fontSize: "13px" }}
                />
              </div>

              {/* Row 4 */}
              <div className="col-md-4">
                <label htmlFor="headquarters" style={{ fontSize: "14px;", fontWeight: "600" }}>
                  Headquarters
                </label>
                <input
                  type="text"
                  id="headquarters"
                  name="headquarters"
                  className="form-control"
                  value={formData.headquarters}
                  onChange={handleChange}
                  style={{ fontSize: "13px" }}
                />
              </div>

              <div className="col-md-4">
                <label htmlFor="orgMaxMembers" style={{ fontSize: "14px;", fontWeight: "600" }}>
                  Max Members
                </label>
                <input
                  type="number"
                  id="orgMaxMembers"
                  name="orgMaxMembers"
                  className="form-control"
                  value={formData.orgMaxMembers}
                  onChange={handleChange}
                  style={{ fontSize: "13px" }}
                  min={0}
                />
              </div>

              {/* empty div for alignment */}
              <div className="col-md-4"></div>
            </div>

            <button
              type="submit"
              className="btn btn-primary mt-4"
              style={{ fontSize: "13px",    float: "right"}}
            >
              Add Organization
            </button>
          </form>
        </div>
      </div>

      {/* Table Card */}
      <div
        className="card"
        style={{
          borderColor: "#d3d3d3",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          padding: "1.5rem"
        }}
      >
        <div className="card-body">
          <table className="table table-striped mb-0">
            <thead>
              <tr>
                <th style={{ fontSize: "14px;" }}>#</th>
                <th style={{ fontSize: "14px;" }}>Org Name</th>
                <th style={{ fontSize: "14px;" }}>Number</th>
                <th style={{ fontSize: "14px;" }}>Email</th>
                <th style={{ fontSize: "14px;" }}>Domain</th>
                <th style={{ fontSize: "14px;" }}>Telephone</th>
                <th style={{ fontSize: "14px;" }}>Tax Number</th>
                <th style={{ fontSize: "14px;" }}>Location</th>
                <th style={{ fontSize: "14px;" }}>Type</th>
                <th style={{ fontSize: "14px;" }}>Inc Date</th>
                <th style={{ fontSize: "14px;" }}>Headquarters</th>
                <th style={{ fontSize: "14px;" }}>Max Members</th>
              </tr>
            </thead>
            <tbody style={{ fontSize: "13px" }}>
              {orgList.map((org) => (
                <tr key={org.id}>
                  <td>{org.id}</td>
                  <td>{org.orgName}</td>
                  <td>{org.orgNumber}</td>
                  <td>{org.orgEmail}</td>
                  <td>{org.domain}</td>
                  <td>{org.telephone}</td>
                  <td>{org.taxNumber}</td>
                  <td>{org.location}</td>
                  <td>{org.orgType}</td>
                  <td>{org.incDate}</td>
                  <td>{org.headquarters}</td>
                  <td>{org.orgMaxMembers}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrgBasicData;
