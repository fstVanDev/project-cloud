import React, { useEffect, useState } from 'react'
import { Card, CardBody } from '@pancakeswap-libs/uikit'
import styled from 'styled-components'

const CountDown = styled(Card)`
font-family: Urbanist;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 19px;
text-align: center;
color: #FFFFFF;
box-sizing: content-box;
// position: absolute;
background: #FB075F;
border-radius: 8px;
width: 110px;
height: 40px;
display: block;
margin-left: auto;
margin-right: auto;
`

const CountDownCard = () => {


   const calculateTimeLeft = () => {
      const difference = +new Date(`2022-03-30 10:00:00`) - +new Date();
      let timeLeft = {};
      if (difference > 0) {
         timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
         };
      }
      return timeLeft;
   }

   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

   useEffect(() => {
      const timer = setTimeout(() => {
         setTimeLeft(calculateTimeLeft());
      }, 1000);
      return () => clearTimeout(timer);
   });

   const timerComponents = [];
   Object.keys(timeLeft).forEach((interval) => {
      if (!timeLeft[interval]) {
         return;
      }

      timerComponents.push(
      //    <span>
      //       {timeLeft[interval]} {interval}{" "}
      //    </span>
      );
   });

   return (
      <CountDown>
         <CardBody
            style={{
               boxSizing: 'content-box',
               textAlign: 'center',
               padding: '0px',

            }}>
            {timerComponents.length ? timerComponents :
               <div style={{
                  boxSizing: 'border-box',
                  textAlign: 'center',
                  marginTop: '10px',
                  marginBottom: '30px',
                  fontFamily: 'Urbanist',
                  fontStyle: 'normal',
                  fontWeight: '600',
                  fontSize: '16px',
                  lineHeight: '19px',
               }}>Time up!</div>}
            {timerComponents.length ? timerComponents : <span>Time up!</span>}
         </CardBody>
      </CountDown>
   )
}

export default CountDownCard;