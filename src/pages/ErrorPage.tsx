import notFoundImage from "@/assets/not_found-image.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div style={{ margin: "20px 4px" }}>
      <div
        style={{
          textAlign: "center",
          display: "grid",
          gap: "6px",
        }}
      >
        <h3 style={{ fontSize: "28px", color: "red" }}>Page Not found!</h3>
        <p>
          <Link to="/">
            <Button variant="outline">Return to home</Button>
          </Link>
        </p>
      </div>
      <div
        style={{
          margin: "8px auto",
          maxWidth: "550px",
          maxHeight: "550px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={notFoundImage}
          style={{
            objectFit: "contain",
            width: "100%",
            height: "100%",
          }}
          alt="Page Not Found"
        />
      </div>
    </div>
  );
};

export default NotFoundPage;
