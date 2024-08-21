// React imports
import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

// CSS Styling imports
import styles from "../styles/MoreDropdown.module.css";

const ThreeDots = React.forwardRef(({ onClick }, ref) => (
  <i
    className="fas fa-ellipsis-v"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  />
));

export const MoreDropdown = ({ handleEdit, handleDelete }) => {
  return (
    <Dropdown className={`ml-auto px-3 ${styles.Absolute}`} drop="left">
      <Dropdown.Toggle as={ThreeDots} />

      <Dropdown.Menu
        className="text-center"
        popperConfig={{ strategy: "fixed" }}
      >
        <Dropdown.Item
          onClick={handleEdit}
          aria-label="edit"
        >
          <div className={styles.DropdownItem}>
            <i className={`fas fa-edit ${styles.DropdownIcon}`} />
            <span className={styles.DropdownItemText}>Edit</span>
          </div>
        </Dropdown.Item>
        <Dropdown.Item
          onClick={handleDelete}
          aria-label="delete"
        >
          <div className={styles.DropdownItem}>
            <i className={`fa-solid fa-circle-xmark ${styles.DropdownIcon}`} />
            <span className={styles.DropdownItemText}>Delete</span>
          </div>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export const ProfileEditDropdown = ({ id }) => {
  const history = useHistory();
  return (
    <Dropdown className={`ml-auto px-3 ${styles.Absolute}`} drop="left">
      <Dropdown.Toggle as={ThreeDots} />
      <Dropdown.Menu>
        <Dropdown.Item
          className={styles.DropdownItem}
          onClick={() => history.push(`/profiles/${id}/edit`)}
          aria-label="edit-profile"
        >
          <i className={`fas fa-edit ${styles.DropdownIcon}`} />
          <span className={styles.DropdownItemText}>Edit Profile</span>
        </Dropdown.Item>
        <Dropdown.Item
          className={styles.DropdownItem}
          onClick={() => history.push(`/profiles/${id}/edit/username`)}
          aria-label="edit-username"
        >
          <i className={`fa-solid fa-gear ${styles.DropdownIcon}`} />
          <span className={styles.DropdownItemText}>Change Username</span>
        </Dropdown.Item>
        <Dropdown.Item
          className={styles.DropdownItem}
          onClick={() => history.push(`/profiles/${id}/edit/password`)}
          aria-label="edit-password"
        >
          <i className={`fas fa-key ${styles.DropdownIcon}`} />
          <span className={styles.DropdownItemText}>Change Password</span>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
