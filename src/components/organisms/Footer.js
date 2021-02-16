import styled from "styled-components";
import {
  FaHome,
  FaBuilding,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

import Container from "components/atoms/Container";
import Grid from "components/atoms/Grid";
import Heading from "components/atoms/Heading";

const Root = styled.footer`
  background-color: #2a2a2a;
  color: #aaa;
  padding: 40px 0;

  h6 {
    color: #fff;
    margin-top: 0;
    text-transform: uppercase;
  }
`;

const IconContainer = styled.span`
  margin-right: 8px;
`;

const FooterLink = styled.a`
  color: ${(props) => props.theme.colors.primary.main};
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.colors.primary.dark};
  }
`;

const Footer = () => (
  <Root>
    <Container>
      <Grid md={3}>
        <div>
          <Heading>
            <h6>Nardini Auto Escola</h6>
          </Heading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam illum,
            vel accusamus nobis recusandae distinctio quod quidem aliquam
            maiores eveniet consequuntur optio. Iste exercitationem itaque in
            fugiat, fuga quos error!
          </p>
        </div>
        <div>
          <Heading>
            <h6>Contatos</h6>
          </Heading>
          <p>
            <IconContainer>
              <FaHome />
            </IconContainer>
            (19) 99999-9999
          </p>
          <p>
            <IconContainer>
              <FaBuilding />
            </IconContainer>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div>
          <Heading>
            <h6>Redes Sociais</h6>
            <p>
              <FooterLink target="_blank" href="https://www.google.com">
                <IconContainer>
                  <FaFacebookF />
                </IconContainer>
                Facebook
              </FooterLink>
            </p>
            <p>
              <FooterLink target="_blank" href="https://www.google.com">
                <IconContainer>
                  <FaLinkedinIn />
                </IconContainer>
                Linkedin
              </FooterLink>
            </p>
            <p>
              <FooterLink target="_blank" href="https://www.google.com">
                <IconContainer>
                  <FaInstagram />
                </IconContainer>
                Instagram
              </FooterLink>
            </p>
          </Heading>
        </div>
      </Grid>
    </Container>
  </Root>
);

Footer.defaultProps = {};

Footer.propTypes = {};

export default Footer;
