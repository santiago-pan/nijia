import styled from "@emotion/styled";
import { Container, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import HomeNavBlock from "./HomeNavBlock";
import SearchBanner from "./SearchBanner";

export type HomeSearchProps = {};

const HomeSearchStyle = styled.div`
  padding-top: 1.5rem;
  background: linear-gradient(180deg, #e6f2f7 0, #e6f2f7 50%, #fff 90%);
`;

export default function HomeSearch(props: HomeSearchProps) {
  return (
    <Container
      sx={{
        maxWidth: "64.5rem",
        paddingTop: "1.5rem",
        background: "linear-gradient(180deg, #e6f2f7 0, #e6f2f7 50%, #fff 90%)",
      }}
    >
      <Stack>
        <SearchBanner />
        <HomeNavBlock />
        <Outlet />
        {/* <SearchBlock /> */}
      </Stack>
    </Container>
  );
}
