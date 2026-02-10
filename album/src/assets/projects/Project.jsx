import React, { useState, useEffect } from "react";
import blog from "../Images/real-logo.png";
import know_us from "../Images/Get_To_Know_us.png";
import location from "../Images/location.png";
import broom from "../Images/Artboard.jpg";
import love from "../Images/love.png";
import news_paper from "../Images/NEWS_PAPER.jpg";
import shopping from "../Images/shopping.png";
import sign_in from "../Images/sign-In.png";
import transact from "../Images/transact.png";
import Inside1 from "../Images/ISNigeria.jpg";
import minions from "../Images/my-minions_drawings.png";
import big_boy from "../Images/bigboy.PNG";
import buygiftcard from "../Images/buygiftcard.PNG";
import forgotpassword from "../Images/forgot_password.PNG";
import giftcard from "../Images/giftcards.PNG";
import penguin from "../Images/new_penguin.png";
import art from "../Images/art.jpg";
import banner from "../Images/Banner_example.jpg";
import coke from "../Images/coke.png";
import fomer_portfolio from "../Images/former_portfolio_design.png";
import indexpage from "../Images/indexpage.png";
import NBC_Peacock from "../Images/NBC_Peacock.png";
import profile from "../Images/profile.png";
import Inside2 from "../Images/ISNigeria2.jpg";
import bakery from "../Images/bakery.jpg";
import palmtree from "../Images/Backup_of_PALM TREE.jpg";
import cheatah from "../Images/cheatah.jpg";
import coverpage1 from "../Images/COVERPAGE1.jpg";
import fashion from "../Images/FASHION.jpg";
import Afro_Future from "../Images/Afro-Future.jpg";
import jeep from "../Images/JEEP.jpg";
import Lana from "../Images/Lana.jpg";
import NewsPaper from "../Images/Newpaper.jpg";
import Abra from "../Images/Abra.jpg";
import logo from "../Images/philo_gist-full_logo2.jpg";
import Gold from "../Images/logo2-no_3d.jpg";
import final_whistle from "../Images/final-whistle1.png";
import YAAK from "../Images/YAAK.jpeg";
import new_year from "../Images/new-year.jpg";
import our_service from "../Images/Our-Services.jpg";
import victoria_ID from "../Images/Victoria-ID-CARD.jpg";
import skill from "../Images/Bold-Weekend Skill-Up-Sessions-Poster.jpg";
import digital from "../Images/Digital-Scene Weekend-Safety-Reminder.jpg";
import fall_protection from "../Images/Flyer-Fall-Protection-Awareness.jpg";
import did_you_know from "../Images/Flyer-Did You-Know.jpg";
import process_safety from "../Images/Process-Safety.jpg";
import LOTO from "../Images/LOTO.jpg";
import free_training from "../Images/Free-Training-Flyer.jpg";  

import "./project-artpal.css";

const Project = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState("");
  const [viewIndex, setViewIndex] = useState(0);
  const [filterOpen, setFilterOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeFilter, setActiveFilter] = useState(null);

  const categories = [
    "Paintings & Sketches",
    "Photography",
    "Drawings & Illustrations",
  ];

  const images = [
    { src: YAAK, title: "YAAK", category: "Drawings & Illustrations" },
    { src: final_whistle, title: "Final Whistle", category: "Digital Art" },
    { src: Afro_Future, title: "Afro Future", category: "Digital Art" },
    { src: jeep, title: "Jeep", category: "Photography" },
    {
      src: logo,
      title: "Philo Gist Logo",
      category: "Drawings & Illustrations",
    },
    {
      src: Gold,
      title: "Philo Gist Logo Gold",
      category: "Drawings & Illustrations",
    },
    { src: broom, title: "Broom", category: "Paintings & Sketches" },
    { src: Lana, title: "Lana", category: "Digital Art" },
    { src: digital, title: "Weekend Safety Reminder", category: "Digital Art" },
    { src: shopping, title: "Shopping", category: "Drawings & Illustrations" },
    { src: love, title: "Love", category: "Paintings & Sketches" },
    { src: new_year, title: "New Year", category: "Photography" },
    { src: Inside1, title: "Inside Success1", category: "Photography" },
    { src: fashion, title: "Fashion", category: "Digital Art" },
    { src: Inside2, title: "Inside Success2", category: "Photography" },
    { src: location, title: "Location", category: "Photography" },
    {src: LOTO, title: "LOTO", category: "Digital Art" },
    { src: minions, title: "Minions", category: "Drawings & Illustrations" },
    { src: our_service, title: "Our Services", category: "Photography" },
    { src: blog, title: "Unox Transport Logo", category: "Digital Art" },
    { src: know_us, title: "Get To Know Us", category: "Digital Art" },
    { src: news_paper, title: "News Paper", category: "Paintings & Sketches" },
    {src: process_safety, title: "Process Safety", category: "Digital Art" },
    { src: sign_in, title: "Sign In", category: "Digital Art" },
    { src: transact, title: "Transact", category: "Drawings & Illustrations" },
    { src: big_boy, title: "Big Boy", category: "Photography" },
    {
      src: buygiftcard,
      title: "Buy and Sell Gift Card",
      category: "Digital Art",
    },
    { src: forgotpassword, title: "Forgot Password", category: "Digital Art" },
    { src: giftcard, title: "Gift Card", category: "Digital Art" },
    { src: penguin, title: "Penguin", category: "Drawings & Illustrations" },
    {
      src: fall_protection,
      title: "Fall Protection Awareness",
      category: "Digital Art",
    },
    { src: art, title: "Art", category: "Paintings & Sketches" },
    { src: banner, title: "Banner", category: "Digital Art" },
    { src: coke, title: "Coke", category: "Photography" },
    { src: victoria_ID, title: "Victoria ID Card", category: "Photography" },
    {
      src: fomer_portfolio,
      title: "Former Portfolio Design",
      category: "Digital Art",
    },
    { src: indexpage, title: "Index Page", category: "Digital Art" },
    { src: NBC_Peacock, title: "NBC Peacock", category: "Photography" },
    { src: profile, title: "Profile", category: "Photography" },
    {src: did_you_know, title: "Did You Know?", category: "Digital Art" },
    { src: bakery, title: "Bakery", category: "Photography" },
    {
      src: skill,
      title: "Bold Weekend Skill-Up-Sessions Poster",
      category: "Photography",
    },
    { src: palmtree, title: "Palm Tree", category: "Photography" },
    { src: cheatah, title: "Cheetah", category: "Photography" },
    {
      src: coverpage1,
      title: "Cover Page 1",
      category: "Paintings & Sketches",
    },
    { src: Abra, title: "Abra", category: "Drawings & Illustrations" },
    {src: free_training, title: "Free Training Flyer", category: "Digital Art" },
    { src: NewsPaper, title: "News Paper2", category: "Paintings & Sketches" },
  ];

  const filteredImages = activeFilter
    ? images.filter((img) => img.category === activeFilter)
    : images;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handleViewImage = (index) => {
    setSelectedImage(images[index].src);
    setSelectedTitle(images[index].title);
    setViewIndex(index);
  };

  const handleViewPrev = () => {
    const newIndex = (viewIndex - 1 + images.length) % images.length;
    setSelectedImage(images[newIndex].src);
    setSelectedTitle(images[newIndex].title);
    setViewIndex(newIndex);
  };

  const handleViewNext = () => {
    const newIndex = (viewIndex + 1) % filteredImages.length;
    setViewIndex(newIndex);
    setSelectedImage(filteredImages[newIndex].src);
    setSelectedTitle(filteredImages[newIndex].title);
  };

  const handleApplyFilter = () => {
    if (selectedCategory) {
      setActiveFilter(selectedCategory);
    }
  };

  const handleResetFilter = () => {
    setSelectedCategory(null);
    setActiveFilter(null);
  };

  return (
    <div className="art-platform">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <span className="logo-text">Chiji's Creative Gallery</span>
          </div>

          <button
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="main-container">
        {/* Left Sidebar */}
        <aside className="sidebar">
          <div className="sidebar-section">
            <h3>CATEGORIES</h3>
            <ul className="category-list">
              {categories.map((cat) => (
                <li
                  key={cat}
                  className={`category-item ${
                    selectedCategory === cat ? "active" : ""
                  }`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </li>
              ))}
            </ul>
          </div>

          <button className="apply-filters" onClick={handleApplyFilter}>
            Apply Filters
          </button>
          <button className="reset-btn" onClick={handleResetFilter}>
            Reset
          </button>
        </aside>

        {/* Grid Gallery */}
        <section className="gallery-section">
          <header className="gallery-header">
            <h1>My Creative Works</h1>
            <p>Explore My collection of original art and creative pieces</p>
          </header>

          <div className="grid-container">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="grid-item"
                onClick={() => handleViewImage(index, image.title)}
              >
                <img src={image.src} alt={image.title} />
                <div className="grid-badge">
                  <span className="red-square">+</span>
                </div>
                <div className="grid-overlay">
                  <p>{image.title}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Image Viewer Modal */}
      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>

            <img
              src={selectedImage}
              alt={selectedTitle}
              className="modal-image"
            />

            <div className="modal-info">
              <h2>{selectedTitle}</h2>
              <div className="modal-buttons">
                <button className="btn" onClick={handleViewPrev}>
                  ← Previous
                </button>
                <span className="counter">
                  {viewIndex + 1} / {images.length}
                </span>
                <button className="btn" onClick={handleViewNext}>
                  Next →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
