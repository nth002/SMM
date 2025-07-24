import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Row, Col, Breadcrumb, Form } from "react-bootstrap";
import "./Dashboard.css";

import addImage2 from "../assets/images/add2.jpg";
import addImage4 from "../assets/images/subs.jpeg";
import addImage5 from "../assets/images/upg.jpeg";
import walletImg from "../assets/images/e-wallet.jpg";

import Swal from 'sweetalert2';

const knownPlatforms = [
  "instagram",
  "facebook",
  "twitter",
  "telegram",
  "youtube",
  "tiktok",
  "canva",
  "whatsapp",
  "website design",
  "threads",
  "linkedin",
];

const Dashboard = () => {
  const [firstSelect, setFirstSelect] = useState("");
  const [secondOptions, setSecondOptions] = useState([{ value: "", label: "Select Service" }]);
  const [secondSelect, setSecondSelect] = useState("");
  const [services, setServices] = useState([]);
  const [linkInput, setLinkInput] = useState("");
  const [descInput, setDescInput] = useState("");

  // State for balance
  const [balance, setBalance] = useState(null);
  const [balanceLoading, setBalanceLoading] = useState(true);
  const [quantity, setQuantity] = useState("");

  // Fetch services on firstSelect change
  useEffect(() => {
    if (!firstSelect) return;

    axios
      .post("http://localhost:5000/api/services")
      .then((response) => {
        console.log("Services from backend:", response.data);
        const all = response.data;

        setServices(all);

        let filtered;

        if (firstSelect.toLowerCase() === "other") {
          filtered = all.filter((item) => {
            const name = item.name?.toLowerCase() || "";
            return !knownPlatforms.some((platform) => name.includes(platform));
          });
        } else {
          filtered = all.filter((item) =>
            item.name?.toLowerCase().startsWith(firstSelect.toLowerCase())
          );
        }

        const options = filtered.map((item) => ({
          value: item.service,
          label: item.name,
        }));

        setSecondOptions([{ value: "", label: "Select Service" }, ...options]);
      })
      .catch((error) => {
        console.error("Error fetching services:", error);
        setSecondOptions([{ value: "", label: "Failed to load services" }]);
      });
  }, [firstSelect]);

  // Fetch user balance on component mount
  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await axios.post("http://localhost:5000/api/balance");
        if (response.data && response.data.balance !== undefined && response.data.balance !== null) {
          setBalance(response.data.balance);
        } else {
          setBalance(0);
        }
      } catch (error) {
        console.error("Error fetching balance:", error);
        setBalance(0);
      } finally {
        setBalanceLoading(false);
      }
    };

    fetchBalance();
  }, []);

  const onFirstChange = (e) => {
    setFirstSelect(e.target.value);
    setSecondSelect("");
    setSecondOptions([{ value: "", label: "Loading..." }]);
    setLinkInput("");
    setDescInput("");
    setQuantity("");
  };

  const onSecondChange = (e) => {
    const selected = e.target.value;
    setSecondSelect(selected);
    setLinkInput("");
    setDescInput("");
    setQuantity("");
  };

  const selectedServiceDetails = services.find(
    (item) => String(item.service) === String(secondSelect)
  );

  return (
    <div className="dashboard-container p-3">
      <Row className="mb-3 align-items-center justify-content-between">
        <Col xs="auto">
          <Breadcrumb>
            <Breadcrumb.Item active>Dashboard</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>

      <Row>
        {/* Left Ad */}
        <Col md={3}>
          <Card className="ad-card mb-4">
            <Card.Img variant="top" src={walletImg} />
            <Card.Body>
              <Card.Text>Wallet balance{balanceLoading ? (
              <div style={{ fontSize: "1.25rem", fontWeight: "bold" }}>Loading...</div>
            ) : (
              <div style={{ fontSize: "1.25rem", fontWeight: "bold" }}>
                ₹ {balance !== null ? balance.toFixed(2) : "0.00"}
              </div>
            )}</Card.Text>
            </Card.Body>
          </Card>

          <Card className="rotating-ad-card">
            <div className="ad-horizontal-content">
              <img src={addImage5} alt="Exclusive" className="ad-horizontal-img" />
              <div className="ad-info">
                <p className="mb-2">Subscribe today and get 50% off.</p>
                <button className="btn btn-sm btn-primary">More Info</button>
              </div>
            </div>
          </Card>
        </Col>

        {/* Center Content */}
        <Col md={6}>
          {/* Platform Selection */}
          <Card className="mb-4 shadow-sm custom-card">
            <Card.Header className="custom-header">Select Platform</Card.Header>
            <Card.Body>
              <Form.Select value={firstSelect} onChange={onFirstChange}>
                <option value="">Select Platform</option>
                {knownPlatforms.map((platform) => (
                  <option key={platform} value={platform}>
                    {platform.charAt(0).toUpperCase() + platform.slice(1)}
                  </option>
                ))}
                <option value="other">Other</option>
              </Form.Select>
            </Card.Body>
          </Card>

          {/* Service Selection */}
          {firstSelect && (
            <Card className="mb-4 shadow-sm custom-card">
              <Card.Header className="custom-header">Select Service</Card.Header>
              <Card.Body>
                <Form.Select value={secondSelect} onChange={onSecondChange}>
                  {secondOptions.map(({ value, label }) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </Form.Select>
              </Card.Body>
            </Card>
          )}

          {/* Details Section */}
          {secondSelect && selectedServiceDetails && (
            <Card className="mb-4 shadow-sm custom-card">
              <Card.Header className="custom-header">Service Details & Input</Card.Header>
              <Card.Body>
                <p>
                  <strong>Name:</strong> {selectedServiceDetails.name}
                </p>
                <p>
                  <strong>Service ID:</strong> {selectedServiceDetails.service}
                </p>
                <p>
                  <strong>Rate:</strong> ₹{selectedServiceDetails.rate}
                </p>
                <p>
                  <strong>Min:</strong> {selectedServiceDetails.min}
                </p>
                <p>
                  <strong>Max:</strong> {selectedServiceDetails.max}
                </p>

                <Form.Group className="mb-3">
                  <Form.Label>Paste Link</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter link here..."
                    value={linkInput}
                    onChange={(e) => setLinkInput(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter description..."
                    value={descInput}
                    onChange={(e) => setDescInput(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                </Form.Group>
                <button
                  className="btn btn-primary"
                  onClick={async () => {
                    if (!secondSelect) {
                      Swal.fire({
                        icon: "warning",
                        title: "Oops",
                        text: `select a service`,
                        confirmButtonColor: "#3085d6",
                      })
                      return;
                    }
                    if (!linkInput.trim()) {
                      Swal.fire({
                        icon: "warning",
                        title: "Oops",
                        text: `Please enter a link`,
                        confirmButtonColor: "#3085d6",
                      })
                      return;
                    }
                    if (!quantity || isNaN(quantity) || quantity <= 0) {
                     Swal.fire({
                      icon: "warning",
                      title: "Oops",
                      text: `Please enter quantity`,
                      confirmButtonColor: "#3085d6",
                    })
                      return;
                    }
                    console.log("jhgsfhf: ", selectedServiceDetails.service)
                    try {
                      const payload = {
                        key: "72e916d44c6ae2b93154f06f7b6abc423a770318",
                        action: "add",
                        service: String(selectedServiceDetails.service), // Use the actual service ID here
                        link: String(linkInput),
                        quantity: String(quantity),
                        comments: descInput || "",
                        runs: "optional",    // or omit this key completely if not used
                        interval: "optional" // or omit
                      };

                      console.log("payload : ", payload)

                      const response = await axios.post("http://localhost:5000/api/place-order", payload);

                      if (response.data && response.data.success) {
                        Swal.fire({
                          icon: "success",
                          title: "Yay",
                          text: "Order placed successfully",
                          confirmButtonColor: "#3085d6",
                        }).then(() => {
                          setLinkInput("");
                          setDescInput("");
                          setQuantity("");
                          setSecondSelect("");
                          setSecondOptions([{ value: "", label: "Select Service" }]);
                        });
                        // Reset fields
                        
                      } else {
                        Swal.fire({
                          icon: "error",
                          title: "Nope",
                          text: response.data,
                          confirmButtonColor: "#3085d6",
                        })
                      }
                    } catch (error) {
                      console.error("Error placing order:", error);
                      Swal.fire({
                          icon: "error",
                          title: "Nope",
                          text: "Duplicate Order",
                          confirmButtonColor: "#3085d6",
                        })
                    }
                  }}
                >
                  Place Order
                </button>
              </Card.Body>
            </Card>
          )}
        </Col>

        {/* Right Ad */}
        <Col md={3}>
          <Card className="ad-card mb-4">
            <Card.Img variant="top" src={addImage4} />
            <Card.Body>
              <Card.Text>Upgrade to Premium. Unlock powerful features!</Card.Text>
            </Card.Body>
          </Card>

          <Card className="rotating-ad-card">
            <div className="ad-horizontal-content">
              <img src={addImage2} alt="Exclusive" className="ad-horizontal-img" />
              <div className="ad-info">
                <p className="mb-2">Subscribe today and get 50% off.</p>
                <button className="btn btn-sm btn-primary">More Info</button>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
