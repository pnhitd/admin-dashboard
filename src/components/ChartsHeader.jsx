import React from 'react';

const ChartsHeader = ({ category, title }) => (
  <div className=" mb-10">
    <div>
      <p className="text-lg">Chart</p>
      <p className="text-3xl font-extrabold tracking-tight text-slate-900">{category}</p>
    </div>
    <p className="text-center text-xl mb-2 mt-3">{title}</p>
  </div>
);

export default ChartsHeader;