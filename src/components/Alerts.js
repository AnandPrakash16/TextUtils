import React from 'react'

export default function Alerts(props) {
   const capitalise = (message) => {
        let lower = message.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    props.alert &&  <div>
       <div className={`alert alert-${props.alert.type}`} role="alert">
              <strong>{capitalise(props.alert.type)}</strong>: {props.alert.msg}
          </div>
    </div>
  )
}
