import React from 'react';

function Page({ params }: { params: { collection: string } }) {
  const { collection } = params;
  return (
    <div>
      <h1>Collection: {collection} </h1>
    </div>
  );
}

export default Page;
