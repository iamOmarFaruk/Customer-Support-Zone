import React from 'react';
import StatusCard from './StatusCard';

const Status = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <StatusCard 
          title="In-Progress" 
          count={0} 
          bgImage="bg-[url('/inprogress-bg.svg')] bg-cover bg-center"
        />
        <StatusCard 
          title="Resolved" 
          count={0} 
          bgImage="bg-[url('/resolved-bg.svg')] bg-cover bg-center"
        />
      </div>
    </main>
  );
};

export default Status;