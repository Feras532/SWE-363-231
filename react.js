ReactDOM.render(
  <h2> React hellow world! </h2>,
  document.getElementById("root")
);

function ImageCard({ src, alt, title }) {
  const style = {
    container: {
      borderRadius: "8px",
      overflow: "hidden",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      marginBottom: "16px",
      width: "350px",
    },
    image: {
      width: "100%",
      height: "auto",
    },
    title: {
      padding: "16px",
      backgroundColor: "#f5f5f5",
    },
  };

  return (
    <div style={style.container}>
      <img src={src} alt={alt} style={style.image} />
      <div style={style.title}>{title}</div>
    </div>
  );
}

const images = [
  "assets/demacia.png",
  "assets/mr.png",
  "assets/pfp.png",
  "assets/qiq.png",
  "assets/cam.jpg",
  "assets/eren.png",
  "assets/vik.png",
  "assets/zoee.png",
  "assets/Screenshot 2023-09-05 162339.png",
  "assets/Screenshot 2023-09-05 162730.png",
  "assets/Screenshot 2023-09-05 162804.png",
  "assets/Screenshot 2023-09-05 162832.png",
];

ReactDOM.render(
  <section>
    {images.map((src, index) => (
      <ImageCard
        key={index}
        src={src}
        alt={`image ${index}`}
        title={`Image ${index + 1}`}
      />
    ))}
  </section>,
  document.getElementById("root")
);
