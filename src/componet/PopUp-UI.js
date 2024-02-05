import {  useState } from "react"



export const PopUpUI = ( props ) => {
    const [mobile, setMobile] = useState('');
    const [error, setError] = useState('');

    const validateMobile = () => {
        if (!mobile.startsWith('09')) {
          setError('شماره همراه باید با 09 شروع شود');
          return false;
        }
    
        if (mobile.length !== 11) {
          setError('شماره همراه باید 11 رقم باشد');
          return false;
        }
    
        setError('');
        return true;
      };

      
    const handleSubmit = () => {
      if (validateMobile()) {
        console.log('شماره همراه وارد شده:', mobile);
        props.onClose();
      }
    };
    return (
      <div className="popup-container">
        <div>
        <div className="popup-content">
          <p className="popup-text">برای ارتباط بیشتر و دریافت مشاوره شماره همراه خود را وارد کنید</p>
        </div>
        <div className="popup-inp">
            <div>
            <input type="number" value={mobile} placeholder="شماره خود را وارد کنید"
              onChange={(e)=>setMobile(e.target.value)}
            />
             {error && <p className="error-message">{error}</p>}
            </div>
            <div>
            <button onClick={handleSubmit}>ارسال</button>
            </div>
        </div>
        </div>
        <span className="close-button" onClick={props.onClose}>
        &times;
        </span>
      </div>
    );
  };
  
