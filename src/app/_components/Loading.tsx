const Loading = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 999,
      }}
    >
      <p
        style={{
          color: "white",
          fontSize: "24px",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        로딩중...
      </p>
    </div>
  );
};

export default Loading;
