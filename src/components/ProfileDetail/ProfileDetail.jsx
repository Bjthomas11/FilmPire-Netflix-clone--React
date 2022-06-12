import React, { useEffect } from "react";
import { ExitToApp } from "@mui/icons-material";
import { Box, Typography, Button } from "@mui/material";
import { useSelector } from "react-redux";
import { userSelector } from "../../features/authSlice";
import { useGetListQuery } from "../../services/movieAPI";
import { RatedCards } from "../index";

const ProfileDetail = () => {
  const { user } = useSelector(userSelector);

  const { data: favoriteMovies, refetch: fetchFavorites } = useGetListQuery({
    listName: "favorite/movies",
    accountId: user.id,
    sessionId: localStorage.getItem("session_id"),
    page: 1
  });
  const { data: watchlistMovies, refetch: fetchWatchlists } = useGetListQuery({
    listName: "watchlist/movies",
    accountId: user.id,
    sessionId: localStorage.getItem("session_id"),
    page: 1
  });

  useEffect(() => {
    fetchFavorites();
    fetchWatchlists();
  }, [fetchFavorites, fetchWatchlists]);

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };
  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h4" gutterBottom>
          My Profile
        </Typography>
        <Button color="inherit" onClick={logout}>
          Logout &nbsp; <ExitToApp />
        </Button>
      </Box>
      {!favoriteMovies?.results?.length && !watchlistMovies?.results?.length ? (
        <Typography variant="h5">
          Add Favorite Movies or Watchlist Movies!
        </Typography>
      ) : (
        <Box>
          <RatedCards title="Favorite Movies" data={favoriteMovies} />
          <RatedCards title="Watchlist" data={watchlistMovies} />
        </Box>
      )}
    </Box>
  );
};

export default ProfileDetail;
