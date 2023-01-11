// import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <section class="vh-100 gradient-custom">
        <div class="container py-5 h-100 ">
          <div class="row d-flex justify-content-center align-items-center h-100 ">
            <div class="col-12 col-md-8 col-lg-6 col-xl-5 shadow p-1 mb-1 bg-white rounded">
              <div class="card bg-secondary text-white ">
                <div class="card-body p-5 text-center ">
                  <div class="mb-md-5 mt-md-4 pb-5">
                    <h2 class="fw-bold mb-2 text-uppercase">Login</h2>

                    <form>
                      <div class="form-outline form-white mb-4">
                        <label class="form-label" for="typeEmailX">
                          Email
                        </label>
                        <input
                          required
                          type="email"
                          minlength="4"
                          id="typeEmailX"
                          class="form-control form-control-lg"
                        />
                      </div>

                      <div class="form-outline form-white mb-4">
                        <label className="form-label" for="typePasswordX">
                          Password
                        </label>
                        <input
                          required
                          type="password"
                          minlength="4"
                          id="typePasswordX"
                          class="form-control form-control-lg"
                        />
                      </div>
                      {/* <Link
                      to="/Home"
                      class="btn btn-outline-light btn-lg w-100 mt-4 px-5"
                      type="submit"
                    >
                      Login
                    </Link> */}
                    <input className="btn btn-outline-light btn-lg w-100 mt-4 px-5" type={"submit"}  value="login"/>
                    </form>

                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
