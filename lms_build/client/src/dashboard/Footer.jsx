// Footer.js
import React from 'react';

function Footer() {
  const footerStyle = {
    backgroundColor: '#1f2937',
    color: '#f3f4f6',
    padding: '64px 32px',
    marginTop: '80px',
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '40px',
  };

  const columnStyle = {
    minWidth: '200px',
    flex: 1,
  };

  const headingStyle = {
    fontSize: '18px',
    fontWeight: '600',
    marginBottom: '24px',
  };

  const linkStyle = {
    color: '#9ca3af',
    textDecoration: 'none',
    display: 'block',
    marginBottom: '12px',
    transition: 'color 0.2s ease',
    ':hover': {
      color: '#6366f1',
    },
  };

  const socialIconStyle = {
    display: 'flex',
    gap: '20px',
    marginTop: '20px',
  };

  const iconStyle = {
    width: '24px',
    height: '24px',
    cursor: 'pointer',
    transition: 'fill 0.2s ease',
    fill: '#9ca3af',
    ':hover': {
      fill: '#6366f1',
    },
  };

  const copyrightStyle = {
    textAlign: 'center',
    marginTop: '60px',
    paddingTop: '40px',
    borderTop: '1px solid #374151',
    color: '#9ca3af',
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={columnStyle}>
          <h4 style={headingStyle}>About Us</h4>
          <a href="/about" style={linkStyle}>Our Story</a>
          <a href="/team" style={linkStyle}>Our Team</a>
          <a href="/careers" style={linkStyle}>Careers</a>
          <a href="/blog" style={linkStyle}>Blog</a>
        </div>

        <div style={columnStyle}>
          <h4 style={headingStyle}>Company</h4>
          <a href="/privacy" style={linkStyle}>Privacy Policy</a>
          <a href="/terms" style={linkStyle}>Terms of Service</a>
          <a href="/contact" style={linkStyle}>Contact Us</a>
          <a href="/faq" style={linkStyle}>FAQs</a>
        </div>

        <div style={columnStyle}>
          <h4 style={headingStyle}>Resources</h4>
          <a href="/tutorials" style={linkStyle}>Tutorials</a>
          <a href="/webinars" style={linkStyle}>Webinars</a>
          <a href="/guides" style={linkStyle}>Guides</a>
          <a href="/certifications" style={linkStyle}>Certifications</a>
        </div>

        <div style={columnStyle}>
          <h4 style={headingStyle}>Follow Us</h4>
          <div style={socialIconStyle}>
            <svg style={iconStyle} viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
            </svg>
            <svg style={iconStyle} viewBox="0 0 24 24">
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/>
            </svg>
            <svg style={iconStyle} viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </div>
        </div>
      </div>
      <div style={copyrightStyle}>
        © {new Date().getFullYear()} Mark Tech. All rights reserved.
      </div>
    </footer>
  );
}
export default Footer;