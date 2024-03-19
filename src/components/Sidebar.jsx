import React, { useEffect } from 'react';
import Navbar from "./Navbar";
import DataUser from "./DataUser";
import '../styles/sidebar.css'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  useEffect(() => {
    const sidebarOpen = document.querySelector("#sidebarOpen");
    const sidebarClose = document.querySelector(".collapse_sidebar");
    const sidebarExpand = document.querySelector(".expand_sidebar");

    if (sidebarOpen && sidebarClose && sidebarExpand) {
      sidebarOpen.addEventListener("click", () => sidebar.classList.toggle("close"));

      sidebarClose.addEventListener("click", () => {
        sidebar.classList.add("close", "hoverable");
      });
      sidebarExpand.addEventListener("click", () => {
        sidebar.classList.remove("close", "hoverable");
      });
    }

    const sidebar = document.querySelector(".sidebar");
    if (sidebar) {
      sidebar.addEventListener("mouseenter", () => {
        if (sidebar.classList.contains("hoverable")) {
          sidebar.classList.remove("close");
        }
      });
      sidebar.addEventListener("mouseleave", () => {
        if (sidebar.classList.contains("hoverable")) {
          sidebar.classList.add("close");
        }
      });

      if (window.innerWidth < 768) {
        sidebar.classList.add("close");
      } else {
        sidebar.classList.remove("close");
      }
    }

    return () => {
      // Cleanup event listeners if the component unmounts
      if (sidebarOpen && sidebarClose && sidebarExpand) {
        sidebarOpen.removeEventListener("click", () => sidebar.classList.toggle("close"));
        sidebarClose.removeEventListener("click", () => sidebar.classList.add("close", "hoverable"));
        sidebarExpand.removeEventListener("click", () => sidebar.classList.remove("close", "hoverable"));
      }

      if (sidebar) {
        sidebar.removeEventListener("mouseenter", () => {
          if (sidebar.classList.contains("hoverable")) {
            sidebar.classList.remove("close");
          }
        });
        sidebar.removeEventListener("mouseleave", () => {
          if (sidebar.classList.contains("hoverable")) {
            sidebar.classList.add("close");
          }
        });
      }
    };
  }, []);

  return (
    <nav className="sidebar">
      <Navbar />
      <div className="menu_content">
        <ul className="menu_items">
          <li className="menu_item">
            <Link to='/administracion' className="nav_link">
              <span className="navlink_icon">
                <i className="bx bx-home"></i>
              </span>
              <span className="navlink">Home</span>
            </Link>

          </li>

          <li className="menu_item">
            <Link to='/administracion/crear' className="nav_link">
              <span className="navlink_icon">
                <i className="bx bx-home"></i>
              </span>
              <span className="navlink">Add Products</span>
            </Link>

          </li>
          <li className="menu_item">
            <a href="#" className="nav_link">
              <span className="navlink_icon">
                <i className="bx bx-cloud-upload"></i>
              </span>
              <span className="navlink">Github Code</span>
            </a>
          </li>
        </ul>

        <div className="collapse_content">
          <div className="collapse expand_sidebar">
            <Link to='/'>Logout</Link>
            <i className="bx bx-chevron-right"></i>
          </div>
          <div className="collapse collapse_sidebar">
            <Link to='/'>Logout</Link>
            <i className="bx bx-chevron-left"></i>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;
