import React from "react";
import { Link } from 'react-router-dom';

// https://getbootstrap.com/docs/5.1/examples/jumbotron/
// bootstrap doesn't do jumbotron anymore,
// but when you're done, do some styling per the examples on that page
// it's not broken, it could just look nicer with borders and bg...
// the guy in the tutorial is using bootstrap 4, most of the stuff below isn't doing anything actually...



const home = () => (
<div className="container">
<div className="jumbotron mt-5">
    <h1 className="display-4">Welcome to my Blog!</h1>
    <p className="lead">This Blog is a Django and React project. I hope you enjoy the content!</p>
    <hr className="my-4"/>
    <p>Click the button below to check out some cool posts :) </p>
    <Link className="btn btn-primary btn-lg" to="/blog" role="button">Click Here!</Link>
  </div>
  </div>
);

export default home;

