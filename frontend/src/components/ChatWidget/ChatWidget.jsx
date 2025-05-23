import React, { useState } from 'react';
import { MdOutlineClose } from 'react-icons/md';
import './ChatWidget.css';
import SplineScene from '../SplineScene';


const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [robotVisible, setRobotVisible] = useState(true);

  const handleToggle = () => {
    setIsOpen(prev => !prev);
    setRobotVisible(prev => !prev);
  };

  return (
    <div className="chat-container">
      {robotVisible && (
        <>
          <span class="bubble">
            Want to Something ? Click me!</span>
          <div onClick={handleToggle} className="robot-wrapper">
            <SplineScene />
          </div>
        </>
      )}

      <div className="chat-wrapper">
        <div
          className={`chat-panel ${isOpen ? 'open' : 'closed'}`}
          style={{
            backdropFilter: 'blur(10px)',
            backgroundColor: 'rgba(255, 255, 255, 0.85)',
          }}
        >
          <div className="chat-inner">
            <button onClick={handleToggle} className="chat-close">
              <MdOutlineClose />
            </button>

            <h2 className="chat-title">Jamila's Chat Support</h2>

            <iframe style={{ width: '100%', height: '100%' }} frameBorder="0"
            src="https://widget.botsonic.com/CDN/index.html?service-base-url=https%3A%2F%2Fapi-azure.botsonic.ai&token=bd4f07f7-61fe-46e7-b700-77499bb040ac&base-origin=https%3A%2F%2Fbot.writesonic.com&instance-name=Botsonic&standalone=true&page-url=https%3A%2F%2Fbot.writesonic.com%2Fbots%2Fe8eb4e29-aaf5-48c8-bc1a-35d3a17ca21a%2Fconnect">
          </iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatWidget;
