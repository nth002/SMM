import React, { useState } from "react";
import { Card, Row, Col, Breadcrumb, Form } from "react-bootstrap";
import "./Dashboard.css";

import addImage1 from "../assets/images/add1.webp";
import addImage2 from "../assets/images/add2.jpg";
import addImage4 from "../assets/images/subs.jpeg";
import addImage5 from "../assets/images/upg.jpeg";


const Dashboard = () => {
  const firstOptions = [
    { value: "", label: "Select Social Side" },
    { value: "facebook", label: "Facebook" },
    { value: "twitter", label: "Twitter" },
    { value: "instagram", label: "Instagram" },
  ];

  const secondOptionsMap = {
    facebook: [
      { value: "", label: "Select Facebook Category" },
      { value: "posts", label: "Posts" },
      { value: "friends", label: "Friends" },
    ],
    twitter: [
      { value: "", label: "Select Twitter Category" },
      { value: "tweets", label: "Tweets" },
      { value: "followers", label: "Followers" },
    ],
    instagram: [
      { value: "", label: "Select Instagram Category" },
      { value: "photos", label: "Photos" },
      { value: "stories", label: "Stories" },
    ],
  };

  const infoMap = {
    posts: {
      title: "Facebook Posts",
      description: "Posts are the content you share on Facebook that your friends and followers see.",
      items: ["Text posts", "Image posts", "Video posts", "Event posts"],
    },
    friends: {
      title: "Facebook Friends",
      description: "Friends are people you've connected with on Facebook to share updates.",
      items: ["Close friends", "Family", "Work colleagues", "Acquaintances"],
    },
    tweets: {
      title: "Twitter Tweets",
      description: "Tweets are short messages you post on Twitter.",
      items: ["Text tweets", "Image tweets", "Retweets", "Replies"],
    },
    followers: {
      title: "Twitter Followers",
      description: "Followers are users who subscribe to see your tweets in their timeline.",
      items: ["Active followers", "Inactive followers", "Verified followers"],
    },
    photos: {
      title: "Instagram Photos",
      description: "Photos are images you share on your Instagram profile.",
      items: ["Profile photos", "Posts", "Tagged photos"],
    },
    stories: {
      title: "Instagram Stories",
      description: "Stories are temporary photos/videos that disappear after 24 hours.",
      items: ["Photo stories", "Video stories", "Highlights"],
    },
  };

  const [firstSelect, setFirstSelect] = useState("");
  const [secondSelect, setSecondSelect] = useState("");

  const onFirstChange = (e) => {
    setFirstSelect(e.target.value);
    setSecondSelect("");
  };

  const onSecondChange = (e) => {
    setSecondSelect(e.target.value);
  };

  const secondOptions = secondOptionsMap[firstSelect] || [];
  const info = infoMap[secondSelect];

  return (
    <div className="dashboard-container p-3">
      <Row className="mb-3">
        <Col>
          <Breadcrumb>
            <Breadcrumb.Item active>Dashboard</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>

      <Row>
        {/* Left Ad */}
        <Col md={3}>
          <Card className="ad-card mb-4">
            <Card.Img variant="top" src={addImage1} />
            <Card.Body>
              <Card.Text>Special offer on analytics tools. Try now!</Card.Text>
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
          <Card className="mb-4 shadow-sm custom-card">
            <Card.Header className="custom-header">Select Social Side</Card.Header>
            <Card.Body>
              <Form.Select value={firstSelect} onChange={onFirstChange}>
                {firstOptions.map(({ value, label }) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </Form.Select>
            </Card.Body>
          </Card>

          {firstSelect && (
            <Card className="mb-4 shadow-sm custom-card">
              <Card.Header className="custom-header">Select Category</Card.Header>
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

          {info && (
            <Card className="mb-4 shadow-sm custom-card">
              <Card.Header className="custom-header">{info.title}</Card.Header>
              <Card.Body>
                <p>{info.description}</p>
                <ul className="info-list">
                  {info.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
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
