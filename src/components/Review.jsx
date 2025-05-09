import React from 'react';

function Review() {
  return (
   <div className='container-fluid'>
      <div className="container py-5 font-text">
        <h2 className="text-center mb-4">"Customer <span className='text-coffee-900'>Reviews</span>"</h2>
        <div className="row">
          {/* Card 1 */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body p-4">
                <h5 className="card-title fs-4 font-khmer">គ្រូអាយធីចិត្តល្អ</h5>
                <h6 className="card-subtitle mb-2 text-muted">★★★★★</h6>
                <p className="card-text fs-5">
                  Excellent service and top-quality products. I highly recommend this store to everyone!
                </p>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body p-4">
                <h5 className="card-title fs-4">Seng Hour</h5>
                <h6 className="card-subtitle mb-2 text-muted">★★★★☆</h6>
                <p className="card-text fs-5">
                  Great experience overall. Fast delivery and friendly customer support.
                </p>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body p-4">
                <h5 className="card-title fs-4 font-khmer">គីមឆាយ</h5>
                <h6 className="card-subtitle mb-2 text-muted">★★★★★</h6>
                <p className="card-text fs-5">
                  Amazing quality! I'm very satisfied with my purchase and will shop again soon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
   </div>
  );
}

export default Review;
