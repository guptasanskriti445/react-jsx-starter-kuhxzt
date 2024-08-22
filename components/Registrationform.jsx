import React from 'react';
export default function Registrationform() {
  return (
    <div>
      <div className=" row d-flex justify-content-center pt-5">
        <div className="col-4">
          <div class="card bg-light mb-3">
            <div class="card-header text-white bg-info">Registration Form</div>
            <div class="card-body">
              <form action="">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="First name"
                    name="firstname"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Last name"
                    name="lastname"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Email"
                    name="email"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="number"
                    class="form-control"
                    placeholder="Contract Number"
                    name="contractnumber"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Password"
                    name="password"
                  />
                </div>
                <div class="form-group float-right">
                  <button type="button" className="btn btn-info">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
