import React, { useState, useEffect } from 'react';

export default function Form() {
  const [name, setName] = useState('');
  const [club, setClub] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [platform, setPlatform] = useState('');
  const [browser, setBrowser] = useState('');
  const [newsletter, setNewsletter] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    console.log(
      name,
      club,
      email,
      phone,
      platform,
      browser,
      newsletter,
      message
    );
  });

  const platforms = [
    'Hvilken enhet brukte du?',
    'PC',
    'Mac',
    'Nettbrett/IPad',
    'Android',
    'IPhone',
  ];

  const browsers = [
    'Hvilken nettleser brukte du?',
    'Chrome',
    'Firefox',
    'Safari',
    'Edge',
    'Opera',
    'IE',
  ];

  function handleOnChange(event) {
    switch (event.target.id) {
      case 'name':
        setName(event.target.value);
        break;
      case 'club':
        setClub(event.target.value);
        break;
      case 'email':
        setEmail(event.target.value);
        break;
      case 'phone':
        setPhone(event.target.value);
        break;
      case 'platform':
        setPlatform(event.target.value);
        break;
      case 'browser':
        setBrowser(event.target.value);
        break;
      case 'newsletter':
        setNewsletter(event.target.checked);
        break;
      case 'message':
        // console.log('VALUE: ', event);
        setMessage(event.target.value);
        break;

      default:
        console.log('Switch Error!');
        break;
    }
  }

  function handleSubmit(event) {
    console.log('SUBMITTED');
    event.preventDefault();
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <img
        src="/images/buypassLogoSmall.png"
        alt="Buypass logo"
        className="form__logo"
      />
      <h1 className="form__title">iSonen tilbakemelding</h1>
      <span className="form__subtitle">Tilbakemelding til iSonen</span>

      <div className="form__control-container">
        <div className="form__form-group">
          <input
            id="name"
            type="text"
            className="form__form-control"
            placeholder="Name"
            value={name}
            onChange={handleOnChange}
          />
          <label className="form__form-label" htmlFor="name">
            Name
          </label>
        </div>

        <div className="form__form-group">
          <input
            id="club"
            type="text"
            className="form__form-control"
            placeholder="Klubb/Forbund"
            value={club}
            onChange={handleOnChange}
          />
          <label className="form__form-label" htmlFor="club">
            Klubb/Forbund
          </label>
        </div>

        <div className="form__form-group">
          <input
            id="email"
            type="email"
            className="form__form-control"
            placeholder="Din e-post"
            value={email}
            onChange={handleOnChange}
          />
          <label className="form__form-label" htmlFor="email">
            Din e-post
          </label>
        </div>

        <div className="form__form-group">
          <input
            id="phone"
            type="phone"
            className="form__form-control"
            placeholder="Ditt mobilnummer"
            value={phone}
            onChange={handleOnChange}
          />
          <label className="form__form-label" htmlFor="phone">
            Ditt mobilnummer
          </label>
        </div>

        <div className="form__form-group">
          <select
            id="platform"
            className="form__form-control"
            value={platform}
            onChange={handleOnChange}
          >
            {platforms.map((platform, i) => (
              <option
                key={platform}
                value={platform}
                hidden={i === 0 ? true : false}
              >
                {platform}
              </option>
            ))}
          </select>
          <label className="form__form-label" htmlFor="platform">
            Plattform
          </label>
        </div>

        <div className="form__form-group">
          <select
            id="browser"
            className="form__form-control"
            value={browser}
            onChange={handleOnChange}
          >
            {browsers.map((browser, i) => (
              <option
                key={browser}
                value={browser}
                hidden={i === 0 ? true : false}
              >
                {browser}
              </option>
            ))}
          </select>
          <label className="form__form-label" htmlFor="browser">
            Nettleser
          </label>
        </div>

        <div className="form__form-group">
          <input
            id="newsletter"
            type="checkbox"
            className="form__form-control--checkbox"
            checked={newsletter}
            onChange={handleOnChange}
          />
          <label className="form__form-label" htmlFor="newsletter">
            Vil du melde deg på vårt nyhetsbrev?
          </label>
        </div>

        <div className="form__form-group">
          <textarea
            id="message"
            rows="5"
            className="form__form-control form__form-control--text-area"
            placeholder="Tilbakemelding"
            value={message}
            onChange={handleOnChange}
          />
          <label className="form__form-label" htmlFor="message">
            Tilbakemelding
          </label>
        </div>
      </div>
      <button className="btn btn--blue form__submit">Submit</button>
    </form>
  );
}
