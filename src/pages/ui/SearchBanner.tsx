import styled from "@emotion/styled";
import { Container } from "@mui/material";
import React from "react";

const SearchBannerStyle = styled.div`
  margin: 0 auto;
  max-width: 64.5rem;
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position: top;
  background-image: url(https://assets.fstatic.nl/master_3884/assets/components/search-banner/images/doorzon-silhouet.svg);
  &:after {
    display: table;
    content: "";
    clear: both;
    box-sizing: border-box;
  }
`;

const SearchBannerOverlayLeftStyle = styled.span`
  display: block;
  float: left;
  width: 17.44%;
  height: 14.5rem;
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position: 100% 100%;
  background-image: url(https://assets.fstatic.nl/master_3884/assets/components/search-banner/images/doorzon-links.svg);
`;

const TaglineStyle = styled.h1`
  position: absolute;
  top: auto;
  bottom: 0;
  left: -4.375rem;
  transform: none;
  padding-left: 1rem;
  padding-bottom: 1rem;
  margin: 0;
  font-weight: 400;
  color: #53241b;
  padding-right: 0.9rem;
`;

const SearchBannerOverlayMiddle = styled.div`
  display: block;
  float: left;
  height: 9.125rem;
  width: 43.8%;
  position: relative;
`;
const SearchBannerOverlayRight = styled.span`
  width: 38.76%;
  height: 14.5rem;
  display: block;
  float: left;
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position: 0 100%;
  background-image: url(https://assets.fstatic.nl/master_3884/assets/components/search-banner/images/doorzon-rechts.svg);
`;

export default function SearchBanner() {
  return (
    <Container
      sx={{
        maxWidth: "64.5rem",
        backgroundImage: "url(https://assets.fstatic.nl/master_3884/assets/components/search-banner/images/doorzon-silhouet.svg);"
      }}
    >
      <SearchBannerOverlayLeftStyle />
      <SearchBannerOverlayMiddle>
        <TaglineStyle>Spring in your new home</TaglineStyle>
      </SearchBannerOverlayMiddle>
      <SearchBannerOverlayRight />
    </Container>
  );
}