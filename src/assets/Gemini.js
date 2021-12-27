 
import React from 'react';

export const Gemini = ({img}) => {

    const stroke = img ? `var(--accent)` : "white";

    return (
    <div className='gemini'>
    <svg viewBox="0 0 405 337" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="366.01" y1="196.127" x2="300.01" y2="138.127" stroke={stroke} stroke-width="3"/>
        <line x1="267.168" y1="111.248" x2="144.168" y2="29.2481" stroke={stroke} stroke-width="3"/>
        <line x1="92.8032" y1="166.904" x2="24.8032" y2="76.9043" stroke={stroke} stroke-width="3"/>
        <line x1="102.444" y1="29.4328" x2="31.444" y2="51.4328" stroke={stroke} stroke-width="3"/>
        <line x1="267.089" y1="303.192" x2="127.089" y2="196.192" stroke={stroke} stroke-width="3"/>
        <text transform="translate(275.844 102) rotate(5.02216)" fill="black" font-family="Arial" font-size="60" letter-spacing="0em"><tspan x="0" y="55.3008">*</tspan></text>
        <text transform="translate(404.087 211.844) rotate(111.837)" fill="black" font-family="Arial" font-size="60" letter-spacing="0em"><tspan x="0" y="55.3008">*</tspan></text>
        <text transform="translate(304.569 327.994) rotate(154.287)" fill="black" font-family="Arial" font-size="60" letter-spacing="0em"><tspan x="0" y="55.3008">*</tspan></text>
        <text transform="translate(131.37 177.908) rotate(106.646)" fill="black" font-family="Arial" font-size="60" letter-spacing="0em"><tspan x="0" y="55.3008">*</tspan></text>
        <text transform="translate(22.5941 39) rotate(53.0346)" fill="black" font-family="Arial" font-size="60" letter-spacing="0em"><tspan x="0" y="55.3008">*</tspan></text>
        <text transform="translate(119.252) rotate(13.1074)" fill="black" font-family="Arial" font-size="60" letter-spacing="0em"><tspan x="0" y="55.3008">*</tspan></text>
    </svg>
    </div>
    );
};