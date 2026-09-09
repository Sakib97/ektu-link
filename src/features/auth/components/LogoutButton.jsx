import { useNavigate } from "react-router-dom";
import { supabase } from "../../../config/supabaseClient";
import { Button, Modal, Alert } from "react-bootstrap";
import { useState } from "react";
import { showToast } from "../../../components/layout/CustomToast";
import { useAuth } from "../../../context/AuthProvider";

const LogoutButton = ({show, setShow, logoutLoading, setLogoutLoading }) => {
//   const [show, setShow] = useState(false);

//   const [logoutLoading, setLogoutLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const { setUser, setUserMeta, setLoading } = useAuth();

  const handleLogout = async () => {
    setLogoutLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.signOut();

      if (error) {
        console.error("Logout failed:", error.message);
        setError("Failed to log out. Please try again.");
        showToast("Logout failed. Please try again.", "error");
        setLogoutLoading(false);
        return;
      }

      // Clear user context
      setUser(null);
      setUserMeta(null);
      setLoading(false);

      // Redirect to sign-in (component unmounts after this,
      // so no further state updates should happen)
      navigate("/signin");
      return;
    } catch (err) {
      console.error("Unexpected logout error:", err);
      setError("An unexpected error occurred. Please try again.");
      showToast("Unexpected logout error.", "error");
      setLogoutLoading(false);
    }
  };

  return (
    <>
      {/* <Button
        variant="danger"
        onClick={() => setShow(true)}
        disabled={logoutLoading}
      >
        <span style={{ fontWeight: "bold" }}>Logout</span>
      </Button> */}

      {/* Confirmation modal */}
      <Modal
        show={show}
        onHide={() => setShow(false)}
        centered
        backdrop="static"
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirm Logout</Modal.Title>
        </Modal.Header>

        <Modal.Body style={{ textAlign: "center" }}>
          {error && (
            <Alert variant="danger" className="mb-3">
              {error}
            </Alert>
          )}
          Are you sure you want to log out of your account?
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setShow(false)}
            disabled={logoutLoading}
          >
            Cancel
          </Button>
          <Button
            variant="danger"
            onClick={handleLogout}
            disabled={logoutLoading}
          >
            {logoutLoading ? "Logging out..." : "Logout"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default LogoutButton;
