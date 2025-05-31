import React from "react";
import "./App.css"; // Import your CSS

function App() {
  return (
    <>
      <header className="header">
        <div className="logo">iSAVE</div>
        <div className="tagline">Smart Savings. Secure Data.</div>
      </header>

      <div className="container">
        <h1 className="heading">Privacy Policy</h1>
        <p>
          <em>Last Updated: May 31, 2025</em>
        </p>

        <p>
          Thank you for using <strong>iSAVE</strong>. We take your privacy
          seriously. This Privacy Policy explains how we handle your information
          when you use our app.
        </p>

        <h2 className="heading">1. Information We Do Not Collect</h2>
        <p>
          iSAVE is designed to work entirely offline and does not collect or
          transmit your personal data. Specifically:
        </p>
        <ul>
          <li>
            No name, email address, or contact information is required or stored
          </li>
          <li>No financial account linking or sensitive data is collected</li>
          <li>We do not track your device location or usage</li>
          <li>We do not use analytics or third-party tracking services</li>
        </ul>

        <h2 className="heading">2. Local Data Storage</h2>
        <p>
          All your savings data is stored securely on your device. We do not
          upload your data to external servers. This ensures your financial
          habits and records remain private and under your control.
        </p>

        <h2 className="heading">3. Ads and Monetization</h2>
        <p>
          We may display non-personalized ads to support app development. These
          ads do not use cookies or track your activity across apps.
        </p>

        <h2 className="heading">4. Children’s Privacy</h2>
        <p>
          iSAVE is not intended for children under 13. We do not knowingly
          collect data from minors.
        </p>

        <h2 className="heading">5. Security</h2>
        <p>
          Although we do not collect data, your device’s security is important.
          We encourage users to use strong passwords and keep devices updated.
        </p>

        <h2 className="heading">6. Changes to This Policy</h2>
        <p>
          We may occasionally update this Privacy Policy. Any changes will be
          shown here with a new "Last Updated" date.
        </p>

        <h2 className="heading">7. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy:</p>
        <a href="mailto:gkmangezi09@gmail.com" className="contactBtn">
          Email Us: gkmangezi09@gmail.com
        </a>
      </div>

      <footer className="footer">
        &copy; 2024 iSAVE Savings App. All rights reserved.
      </footer>
    </>
  );
}

export default App;
