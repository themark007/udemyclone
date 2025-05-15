import React from 'react';

// Header.js
// Header.js
function Header() {
  const appBarStyle = {
    position: 'sticky',
    top: 0,
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
    padding: '0 32px',
    zIndex: 1000,
  };

  const toolbarStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '1200px',
    margin: '0 auto',
    height: '72px',
  };

  const navStyle = {
    display: 'flex',
    gap: '32px',
    alignItems: 'center',
  };

  const logoStyle = {
    fontSize: '24px',
    fontWeight: '800',
    background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginRight: '40px',
  };

  const navLinkStyle = {
    color: '#4b5563',
    textDecoration: 'none',
    fontWeight: '500',
    transition: 'all 0.2s ease',
    ':hover': {
      color: '#6366f1',
    },
  };

  const searchBarStyle = {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#f3f4f6',
    borderRadius: '8px',
    padding: '8px 16px',
    width: '400px',
  };

  const searchInputStyle = {
    border: 'none',
    background: 'transparent',
    marginLeft: '12px',
    width: '100%',
    fontSize: '14px',
    outline: 'none',
  };

  const iconContainerStyle = {
    display: 'flex',
    gap: '24px',
    alignItems: 'center',
  };

  const iconButtonStyle = {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '20px',
    color: '#4b5563',
    padding: '8px',
    borderRadius: '50%',
    transition: 'all 0.2s ease',
    ':hover': {
      backgroundColor: '#f3f4f6',
    },
  };

  return (
    <header style={appBarStyle}>
      <div style={toolbarStyle}>
        <div style={navStyle}>
          <div style={logoStyle}>Mark Tech</div>
          <nav style={{ display: 'flex', gap: '24px' }}>
            <a href="/" style={navLinkStyle}>Home</a>
            <a href="/courses" style={navLinkStyle}>Courses</a>
            <a href="/about" style={navLinkStyle}>About</a>
            <a href="/contact" style={navLinkStyle}>Contact</a>
          </nav>
        </div>

        <div style={iconContainerStyle}>
          <div style={searchBarStyle}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6b7280">
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input 
              type="text" 
              placeholder="Search courses..." 
              style={searchInputStyle}
            />
          </div>
          <button style={iconButtonStyle} title="Notifications">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4b5563">
              <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1" />
            </svg>
          </button>
          <button style={iconButtonStyle} title="User Profile">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4b5563">
              <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;