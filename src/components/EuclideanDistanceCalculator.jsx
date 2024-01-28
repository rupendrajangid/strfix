import React, { useState } from "react";

const EuclideanDistanceCalculator = () => {
  const [x1, setX1] = useState(0);
  const [y1, setY1] = useState(0);
  const [x2, setX2] = useState(0);
  const [y2, setY2] = useState(0);

  const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

  return (
    <div>
      <div class="container">
        <div class="row">
          <div className="col-lg-6">
            <div className="row">
              <div class="col-lg-2">
                <div class="mb-3">
                  <label for="x1" class="form-label">
                    x1:
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="x1"
                    value={x1}
                    onChange={(e) => setX1(parseFloat(e.target.value))}
                  />
                </div>
              </div>

              <div class="col-lg-2">
                <div class="mb-3">
                  <label for="y1" class="form-label">
                    y1:
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="y1"
                    value={y1}
                    onChange={(e) => setY1(parseFloat(e.target.value))}
                  />
                </div>
              </div>

              <div class="col-lg-2">
                <div class="mb-3">
                  <label for="x2" class="form-label">
                    x2:
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="x2"
                    value={x2}
                    onChange={(e) => setX2(parseFloat(e.target.value))}
                  />
                </div>
              </div>

              <div class="col-lg-2">
                <div class="mb-3">
                  <label for="y2" class="form-label">
                    y2:
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="y2"
                    value={y2}
                    onChange={(e) => setY2(parseFloat(e.target.value))}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            Plain
            <textarea className="form-control" value={distance} disabled />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EuclideanDistanceCalculator;
