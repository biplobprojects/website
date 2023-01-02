import React from "react";
import Title from "../../components/titles/Title";
import './PrivacyPolicy.css';

export default function PrivacyPolicy() {
  return (
    <div className="privacypolicy-container container page-container">
      <Title
        class="mb-5 title--mod"
        heading="
        Cookie & Privacy Policy"
      />
      <p>
        This Privacy Policy describes how your personal information is
        collected, used, and shared when you visit or make a purchase from <a href="mailto:hello@livasanatural.com">hello@livasanatural.com</a>.
      </p>
      <h5 className="mb-0">
        <b>PERSONAL INFORMATION WE COLLECT</b>
      </h5>
      <p>
        When you visit the Site, we automatically collect information about your
        device, including your web browser, IP address, time zone, and some of
        the cookies installed on your device. Additionally, as you browse the
        Site, we collect information about the individual web pages or products
        that you view, what websites or search terms referred you to the Site,
        and information about how you interact with the Site. We refer to this
        automatically-collected information as “Device Information”.
      </p>

      <h5 className="mb-0">
        <b>We collect Device Information using the following technologies:</b>
      </h5>
      <p className="mb-0">
        “Cookies” are data files that are placed on your device or computer and
        often include a unique anonymous identifier. For more information about
        cookies and how to disable cookies, visit
        http://www.allaboutcookies.org.
      </p>
      <p>
        “Log files” track actions occurring on the Site, and collect data
        including your IP address, browser type, Internet service provider,
        referring/exit pages, and date/time stamps. Additionally, when you make
        a purchase or attempt to purchase through the Site, we collect certain
        information from you, including your name, billing address, shipping
        address, payment information (including credit card numbers [INSERT ANY
        OTHER PAYMENT TYPES ACCEPTED], email address, and phone number. We refer
        to this information as “Order Information”.
      </p>
      <p>
        When we talk about “Personal Information” in this Privacy Policy, we
        talk about Device Information and Order Information.
      </p>
      <h5 className="mb-0">
        <b>HOW DO WE USE YOUR PERSONAL INFORMATION?</b>
      </h5>
      <p>
        We use the Order Information that we generally collect to fulfil any
        orders placed through the Site (including processing your payment
        information, arranging to ship, and providing you with invoices and/or
        order confirmations). Additionally, we use this Order Information to:
      </p>
      <h5 className="mb-0">
        <b>Communicate with you;</b>
      </h5>
      <p className="mb-0">Screen our orders for potential risk or fraud; and</p>
      <p className="mb-0">
        When in line with the preferences you have shared with us, provide you
        with information or advertising relating to our products or services.
      </p>
      <p>
        We use the Device Information that we collect to help us screen for
        potential risk and fraud (in particular, your IP address), and more
        generally, to improve and optimize our Site (for example, by generating
        analytics about how our customers browse and interact with the Site, and
        to assess the success of our marketing and advertising campaigns).
      </p>
      <h5 className="mb-0">
        <b>DATA RETENTION</b>
      </h5>
      <p>
        When you place an order through the Site, we will maintain your Order
        Information for our records unless and until you ask us to delete this
        information.
      </p>
      <h5 className="mb-0">
        <b>CHANGES</b>
      </h5>
      <p>
        We may update this privacy policy from time to time to reflect, for
        example, changes to our practices or for other operational, legal or
        regulatory reasons.
      </p>
      <h5 className="mb-0">
        <b>CONTACT US</b>
      </h5>
      <p>
        You can send your questions to us about the Terms of Service at{" "}
        <a href="mailto:hello@livasanatural.com">hello@livasanatural.com</a>.
      </p>
    </div>
  );
}
