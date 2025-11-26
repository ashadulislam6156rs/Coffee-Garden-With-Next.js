import React from 'react';
import Container from '../Container/Container';
import img from "../assets/images/404/404.gif"
import { MdKeyboardDoubleArrowLeft } from 'react-icons/md';
import { Link } from 'react-router';

const Error_404 = () => {
    return (
      <div>
        <Container>
          <div className="flex flex-col justify-center items-center min-h-screen">
            <div className="text-center mt-10">
              {" "}
              <Link to={"/"} className="bg-[#331A15] btn rounded-md text-white">
                <MdKeyboardDoubleArrowLeft />
                Back To Home
              </Link>
            </div>
            <div className="flex justify-center items-center">
              <img src={img} alt="" />
            </div>
          </div>
        </Container>
      </div>
    );
};

export default Error_404;