import React from 'react';

export default function Details({ villagers, searchVill }) {
  return (
    <div>
      <h1> Animal Crossing Cuties</h1>
      <img src={villagers.icon.uri} />
      <p>{searchVill.name}</p>
      {villagers.map((vill) => (
        <div key={vill.id}>
          <p>{vill.name}</p>
          <p>{vill.personality}</p>
        </div>
      ))}
    </div>
  );
}
