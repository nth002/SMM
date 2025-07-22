import React, { useState } from "react";
import { Card, Row, Col, Breadcrumb, Form } from "react-bootstrap";

const Dashboard = () => {
  // 1st select options
  const firstOptions = [
    { value: "", label: "Select Social Side" },
    { value: "facebook", label: "Facebook" },
    { value: "twitter", label: "Twitter" },
    { value: "instagram", label: "Instagram" },
  ];

  // 2nd select options depending on first select
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

  // 3rd div info based on 2nd select
  const infoMap = {
    posts: {
      title: "Facebook Posts",
      description:
        "Posts are the content you share on Facebook that your friends and followers see.",
      items: ["Text posts", "Image posts", "Video posts", "Event posts"],
    },
    friends: {
      title: "Facebook Friends",
      description:
        "Friends are people you've connected with on Facebook to share updates.",
      items: ["Close friends", "Family", "Work colleagues", "Acquaintances"],
    },
    tweets: {
      title: "Twitter Tweets",
      description: "Tweets are short messages you post on Twitter.",
      items: ["Text tweets", "Image tweets", "Retweets", "Replies"],
    },
    followers: {
      title: "Twitter Followers",
      description:
        "Followers are users who subscribe to see your tweets in their timeline.",
      items: ["Active followers", "Inactive followers", "Verified followers"],
    },
    photos: {
      title: "Instagram Photos",
      description: "Photos are images you share on your Instagram profile.",
      items: ["Profile photos", "Posts", "Tagged photos"],
    },
    stories: {
      title: "Instagram Stories",
      description:
        "Stories are temporary photos/videos that disappear after 24 hours.",
      items: ["Photo stories", "Video stories", "Highlights"],
    },
  };

  // State
  const [firstSelect, setFirstSelect] = useState("");
  const [secondSelect, setSecondSelect] = useState("");

  // Handle changes
  const onFirstChange = (e) => {
    setFirstSelect(e.target.value);
    setSecondSelect(""); // Reset second select when first changes
  };

  const onSecondChange = (e) => {
    setSecondSelect(e.target.value);
  };

  // Get current second options & info
  const secondOptions = secondOptionsMap[firstSelect] || [];
  const info = infoMap[secondSelect];

  // Header style matching your gradient and style:
  const headerStyle = {
    background: "linear-gradient(90deg, rgb(0 150 255) 0%, rgb(0 0 0) 100%)",
    color: "white",
    fontWeight: "600",
    fontSize: "1.05rem",
    padding: "0.75rem 1rem",
  };

  return (
    <div>
      <Row className="mb-3">
        <Col>
          <Breadcrumb>
            <Breadcrumb.Item active>Dashboard</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>

      {/* First select */}
      <Card className="mb-4 shadow-sm">
        <Card.Header style={headerStyle}>Select Social Side</Card.Header>
        <Card.Body>
          <Form.Select value={firstSelect} onChange={onFirstChange} aria-label="Social Side select">
            {firstOptions.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </Form.Select>
        </Card.Body>
      </Card>

      {/* Second select - shows only if firstSelect chosen */}
      {firstSelect && (
        <Card className="mb-4 shadow-sm">
          <Card.Header style={headerStyle}>Select Category</Card.Header>
          <Card.Body>
            <Form.Select value={secondSelect} onChange={onSecondChange} aria-label="Category select">
              {secondOptions.map(({ value, label }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </Form.Select>
          </Card.Body>
        </Card>
      )}

      {/* Info div - shows only if secondSelect chosen */}
      {info && (
        <Card className="mb-4 shadow-sm">
          <Card.Header style={headerStyle}>{info.title}</Card.Header>
          <Card.Body>
            <p>{info.description}</p>
            <ul>
              {info.items.map((item, idx) => (
                <li key={idx} style={{ fontSize: "14px", marginBottom: "0.25rem" }}>
                  {item}
                </li>
              ))}
            </ul>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default Dashboard;
