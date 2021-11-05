const styles = {
  center: { display: "flex", justifyContent: "center", alignItems: "center" },
  row: { display: "flex", flexDirection: "row"},
  around: { display: "flex", flexDirection: "row",  justifyContent: "space-around", alignItems: "center" },
  between: { display: "flex", flexDirection: "row",  justifyContent: "space-between", alignItems: "center" },

  fullHeight: {
    height: "calc(100vh - 60px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  error: {
    height: "20px",
    color: "red",
    fontSize: "15px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#caebf5",
    padding: "2rem 4rem",
    borderRadius: "15px",
  },
};

export default styles;
