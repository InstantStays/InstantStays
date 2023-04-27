import React from "react";
import styled from "styled-components";
import {
  BsFillHouseDoorFill,
  BsFillPhoneFill,
  BsMailbox2,
} from "react-icons/bs";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Container>
        <footer id="footer">
          <div className="left">
            <h3>more about company</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
              sed repellendus laborum doloremque cupiditate consectetur
              voluptatibus debitis consequatur aliquam quaerat!
            </p>
            <Link to="/team">Meet our Team!</Link>
          </div>
          <div className="middle">
            <h3>contact info</h3>
            <div className="address">
              <BsFillHouseDoorFill
                style={{
                  transform: "scale(1.4)",
                }}
              />
              GCOEN, Nagpur
            </div>
            <Link>
              <div className="ph">
                <BsFillPhoneFill
                  style={{
                    transform: "scale(1.4)",
                  }}
                />
                9524755711
              </div>
            </Link>
            <Link>
              <div className="mail">
                <BsMailbox2
                  style={{
                    transform: "scale(1.4)",
                  }}
                />
                vednande10@gmail.com
              </div>
            </Link>
          </div>
          <div className="right">
            <h3>keep connected</h3>
            <Link>
              <div className="insta">
                <FaInstagram
                  style={{
                    transform: "scale(1.8)",
                  }}
                />
                Follow us on Instagram
              </div>
            </Link>
            <Link>
              <div className="fb">
                <FaFacebookF
                  style={{
                    transform: "scale(1.8)",
                  }}
                />
                Follow us on Facebook
              </div>
            </Link>
            <Link>
              <div className="twitter">
                <FaTwitter
                  style={{
                    transform: "scale(1.8)",
                  }}
                />
                Follow us on Twitter
              </div>
            </Link>
          </div>
        </footer>
      </Container>
    </>
  );
};

export default Footer;
const Container = styled.div`
  background-color: #282626;
  color: #fff;
  padding: 4rem;

  #footer {
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    .left {
      display: flex;
      flex-direction: column;
      gap: 0.9rem;
      width: 25%;
      max-width: 33%;

      a {
        text-decoration: none;
        color: #fff;
        border: 2px solid #fff;
        width: fit-content;
        padding: 10px;
        font-weight: 700;
        transition: all 250ms linear;
        :hover {
          background-color: #fff;
          color: #000;
        }
      }

      h3 {
        text-transform: capitalize;
        margin: 0 0 10px 0;
        font-size: 1.6rem;
        letter-spacing: 1.1px;
      }
      p {
        letter-spacing: 1.02px;
      }
    }

    .middle {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;

      a {
        text-decoration: none;
        color: #fff;
      }

      h3 {
        text-transform: capitalize;
        margin: 0 0 10px 0;
        font-size: 1.6rem;
        letter-spacing: 1.1px;
      }

      .address,
      .ph,
      .mail {
        display: flex;
        align-items: center;
        gap: 1rem;
        letter-spacing: 1.1px;
        font-size: 18px;
      }
    }

    .right {
      display: flex;
      flex-direction: column;
      gap: 1.4rem;

      a {
        text-decoration: none;
        color: #fff;
      }

      h3 {
        text-transform: capitalize;
        margin: 0 0 10px 0;
        font-size: 1.6rem;
        letter-spacing: 1.1px;
      }

      .insta,
      .fb,
      .twitter {
        display: flex;
        align-items: center;
        gap: 1rem;
        transition: all 250ms linear;
        font-size: 18px;
      }
      .insta:hover,
      .fb:hover,
      .twitter:hover {
        transform: translateX(5px);
        color: rgba(235, 101, 7, 0.9);
        cursor: pointer;
      }
    }
  }
`;
