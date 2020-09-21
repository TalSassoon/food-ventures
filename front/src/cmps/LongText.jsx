import React from 'react'

export function LongTxt({ text }) {

  const shortText = text.slice(0, 60);

  return (
    <div style={{ padding: '0 10px' }}>
      {text.length > 60 ? shortText + '...' : text}
    </div>
  )
}