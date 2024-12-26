import React from 'react';

const Notification = ({ message, onClose }) => {
    return (
        <div
            style={{
                position: 'fixed',
                top: '20px',
                right: '20px',
                background: '#4caf50',
                color: '#fff',
                padding: '10px 20px',
                borderRadius: '5px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
        >
            {message}
            <button
                onClick={onClose}
                style={{
                    marginLeft: '10px',
                    background: 'transparent',
                    border: 'none',
                    color: '#fff',
                    cursor: 'pointer',
                }}
            >
                ✖
            </button>
        </div>
    );
};

export default Notification;
