import React, { useRef, useEffect, useState } from "react";
import * as blazeface from "@tensorflow-models/blazeface";
import "@tensorflow/tfjs-backend-webgl";
import "./FaceScan.css"; // External CSS

const FaceScan = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [model, setModel] = useState(null);
  const [videoReady, setVideoReady] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadModel = async () => {
      const loadedModel = await blazeface.load();
      setModel(loadedModel);
      startVideo();
    };
    loadModel();
  }, []);

  const startVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.onloadedmetadata = () => {
            setVideoReady(true);
            setLoading(false);
            videoRef.current.play();
          };
        }
      })
      .catch((err) => console.error("Error accessing webcam:", err));
  };

  useEffect(() => {
    let intervalId;
    if (model && videoReady && videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      intervalId = setInterval(async () => {
        const predictions = await model.estimateFaces(video, false);
        context.clearRect(0, 0, canvas.width, canvas.height);

        if (predictions.length > 0) {
          predictions.forEach((prediction) => {
            const start = prediction.topLeft;
            const end = prediction.bottomRight;
            const size = [end[0] - start[0], end[1] - start[1]];

            context.beginPath();
            context.strokeStyle = "#00ff88";
            context.lineWidth = 3;
            context.shadowColor = "#00ff88";
            context.shadowBlur = 15;
            context.rect(start[0], start[1], size[0], size[1]);
            context.stroke();
          });
        }
      }, 100);
    }

    return () => clearInterval(intervalId);
  }, [model, videoReady]);

  return (
    <div className="face-scan-container">
      <h2 className="face-scan-title">🔍 AI Face Scanner</h2>

      <div className="video-wrapper">
        {loading && <p className="loading-text">Loading AI model & camera...</p>}

        <video
          ref={videoRef}
          width="640"
          height="480"
          autoPlay
          muted
          playsInline
          className="face-video"
        />
        <canvas ref={canvasRef} className="face-canvas" />
      </div>
    </div>
  );
};

export default FaceScan;
