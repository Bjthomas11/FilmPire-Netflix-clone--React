import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "2rem"
  },
  pageNumber: {
    margin: "0 20px !important",
    color: theme.palette.text.primary
  },
  button: {
    margin: "30px 2px"
  }
}));
