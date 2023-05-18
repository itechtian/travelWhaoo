'use client'

import { useState } from 'react';

const FloatingLabelInput = ({ label, value, onChange, type }) => {
  const [isFocused, setIsFocused] = useState(false);

  const [hideShow, setHideShow] = useState(false)
 
  const handleFocus = () => {
    console.log('focused');
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleHideShow = () => {
    setHideShow(!hideShow)
  }

  return (
    <div className={`floating-label-input ${isFocused ? 'focused' : ''}`}>
      <label className={`label ${isFocused ? 'focused' : ''}`}>{label}</label>
      {type == 'password' ? <span style={{'color':'#891189', 'position':'absolute','top':'20px', 'right':'20px'}} onClick={() => handleHideShow}>{hideShow ? 'Hide' : 'Show'}</span> : null }
      <input
        className="input"
        type={type}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    <style jsx>{`
        .floating-label-input {
          position: relative;
          margin-bottom: 23px;
        }

        .label {
          position: absolute;
          top: 0;
          left: 0;
          transition: all 0.3s;
          pointer-events: none;
          opacity: 0.5;
          padding: 4px 16px;
          width: auto;
          height: 32px;

        }

        .input {
            background: #FFFFFF;
            /* Grey 50 */
            height:56px;
            width:100%;
            border: 1px solid #8D8D8D;
            border-radius: 4px;
            padding-left:16px
        }

        .input:focus {
          border: 1px solid #E862E8;
          outline:1px solid #E862E8
        }

        .label.focused {
          transform: translateY(-20px) scale(0.75);
          opacity: 1;
          color:#891189;
          font-size: 24px;
          background:#FFFFFF;

 
        }
      `}
    </style>
    </div>
  );
};

export default FloatingLabelInput;
