import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  root: {
    width: 500,
    justifyContent: "center",
  },

  center: {
    display: 'flex',
    alignItems: "center",
    justifyContent: "center",
    minHeight: "90vh",
    minWidth: '100%'
  },
}));

export default useStyles;
