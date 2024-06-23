import React from 'react'

export const Box = ({item}) => {
    const boxStyle = {
        display: 'inline-block',
        padding: '20px',
        margin: '10px',
        backgroundColor: '#f0f0f0',
        border: '1px solid #ccc',
        borderRadius: '5px',
        textAlign: 'center',
        textDecoration: 'none',
        color: 'black',
        width: '200px'
      };
    
      return (
        <div>
      {items.map((item, index) => (
        <a key={index} href={item.link} style={boxStyle}>
          {item.content}
        </a>
      ))}
    </div>
      );
    };

