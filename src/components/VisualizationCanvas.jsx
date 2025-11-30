import React from 'react'

export default function VisualizationCanvas({ array }) {
  return (
    <div
      style={{
        flex: 2,
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        padding: '1rem',
        gap: '2px',
        borderRight: '1px solid #ccc',
        minHeight: '300px',
        backgroundColor: '#f7f7f7',
      }}
    >
      {array.map((value, index) => (
        <div
          key={index}
          style={{
            height: `${value * 1}px`,
            width: '5px',
            backgroundColor: 'teal',
          }}
        />
      ))}
    </div>
  )
}
