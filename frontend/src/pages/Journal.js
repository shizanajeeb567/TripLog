import React, { useState } from 'react';

const Journal = () => {
  const [view, setView] = useState(null); // 'add' or 'search'

  return (
    <div className="bg-gray-100 min-h-screen p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">My Travel Journal</h1>

      <div className="flex gap-4 mb-6">
        <button
          className={`px-6 py-2 rounded ${view === 'add' ? 'bg-blue-700 text-white' : 'bg-white border'}`}
          onClick={() => setView('add')}
        >
          Add Journal
        </button>
        <button
          className={`px-6 py-2 rounded ${view === 'search' ? 'bg-blue-700 text-white' : 'bg-white border'}`}
          onClick={() => setView('search')}
        >
          Search Journal
        </button>
      </div>

      {view === 'add' && (
        <div className="p-6 bg-white rounded shadow">
          {/* Add Journal Form will go here */}
          <p className="text-gray-600">[ Add Journal Form Placeholder ]</p>
        </div>
      )}

      {view === 'search' && (
        <div className="p-6 bg-white rounded shadow">
          {/* Search Journal UI will go here */}
          <p className="text-gray-600">[ Search Journal UI Placeholder ]</p>
        </div>
      )}
    </div>
  );
};

export default Journal;
