import AuthFormInput from "../Components/Forms/AuthFormInput";
import TextArea from "../Components/Forms/TextArea";
import Layout from "../Components/Layout";
import HeaderName from "../Components/Modules/HeaderName";

export default function profile() {
  return (
    <Layout>
      <div className="login">
        <div className="terms__container">
          <div className="terms__heading">Terms of use</div>

          <div className="terms__paragraph">
            These terms & conditions (the “T&C” or “Terms”) govern your access
            and use of our Website and services at SmartWritingService.com (the
            “Website”). Please read them carefully.
          </div>

          <div className="terms__paragraph">
            The Website is owned and operated by Writera Limited.
          </div>

          <div className="terms__paragraph">
            By using this Website, you agree to be bound by the terms and
            conditions stated herein. You claim and warrant that You have full
            legal authority to enter these Terms of Use and to be legally bound
            by it.
          </div>

          <div className="terms__paragraph">
            We may, in its sole discretion, implement controls to restrict
            access to the Services or the Website in any of the Restricted
            Jurisdictions. We reserve the right to close any of your accounts
            immediately upon discovery you are accessing the Website or Services
            in violation of these restrictions.
          </div>

          <div className="terms__paragraph">
            “Website” means an aggregate amount of the web pages available at
            https://www.smartwritingservice.com and all sub-domains thereof,
            where the Services are realized.
          </div>
        </div>
      </div>
    </Layout>
  );
}
