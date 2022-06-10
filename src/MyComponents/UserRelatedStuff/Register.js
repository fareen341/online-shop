import React from 'react'

export const Register = () => {
    return (
        <div>
            <div className="container">
                <div className="row justify-content-md-center">
                    <p className="lead text-center">Register Here</p>
                    <p className="lead text-center"></p>
                    <p className="text-center"> <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#A32CC4" className="bi bi-dash-lg" viewBox="0 0 16 16">
                        <path d="M0 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1z" />
                    </svg></p>
                    <div className="col-lg-4">
                        <p className=" text-center">
                            <a className="navbar-brand" href="" style={{ color: "black" }}>
                                <i>classNameic Watches</i>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="35" fill="currentColor" className="bi bi-watch" viewBox="0 0 14 14">
                                    <path d="M8.5 5a.5.5 0 0 0-1 0v2.5H6a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5V5z" />
                                    <path d="M5.667 16C4.747 16 4 15.254 4 14.333v-1.86A5.985 5.985 0 0 1 2 8c0-1.777.772-3.374 2-4.472V1.667C4 .747 4.746 0 5.667 0h4.666C11.253 0 12 .746 12 1.667v1.86a5.99 5.99 0 0 1 1.918 3.48.502.502 0 0 1 .582.493v1a.5.5 0 0 1-.582.493A5.99 5.99 0 0 1 12 12.473v1.86c0 .92-.746 1.667-1.667 1.667H5.667zM13 8A5 5 0 1 0 3 8a5 5 0 0 0 10 0z" />
                                </svg>
                            </a>
                        </p>

                        <form action="" method="" noValidate>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                            </div>
                            <p className="my-3"> <input type="submit" value="Register" className="btn btn-dark" style={{ width: "100%" }} /></p>
                            <p>Already have an account? <a href="" className="text-decoration-none">Sign in</a></p>
                            <p>Create a business account!! <a href="" className="text-decoration-none">Sign up here</a></p>
                            <p className="text-center"><a href="{% url 'index' %}" className="text-decoration-none"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
                            </svg></a> Go back</p>
                        </form>
                        <hr />
                        <p className="text-center">© 2021 Company, Inc. All rights reserved.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
