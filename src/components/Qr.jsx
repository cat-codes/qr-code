import React from 'react';
function Qr() {
  return (
    <div id='contents' style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
    }}>
        <div id='qr-bg' style={{
            width: '280px',
            height: '450px',
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: '18px',
            padding: '15px',
            borderRadius: '5%',
            backgroundColor: 'white',
            boxShadow: '0px 0px 10px 5px rgb(211, 211, 211, 0.4)',
        }}>
            <img src="https://github.com/cat-codes/qr-code/blob/gh-pages/assets/image-qr-code-Vzk8NPce.png?raw=true"> style={{
                height: '280px',
                borderRadius: '5%',
            }}></img>
            <h1 style={{
                    fontFamily: 'Roboto',
                    fontSize: '20px',
                    fontWeight: '600',
                    padding: '5px 15px',
                    letterSpacing: '0.8px',
                    color: '#272727',
            }}>Improve your front-end skills by building projects</h1>
            <div style={{
                    fontFamily: 'Roboto',
                    fontSize: '14px',
                    color: '#9498A1',
                    fontWeight: '400',
                    padding: '5px 15px',
                    letterSpacing: '0.5px',
            }}>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</div>
        </div>
    </div>
  )
}
export default Qr;