import { GetStaticPropsResult } from "next";

interface Props {
  title: string;
}

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  return {
    props: {
      title: "News",
    },
  };
}

const Privacy = () => (
  <div>
    <h2>Consent to the use of cookies.</h2>
    <p>
      For our website to function properly we use cookies. To obtain your valid
      consent for the use and storage of cookies in the browser you use to
      access our website and to properly document this we use a consent
      management platform: CookieFirst. This technology is provided by Digital
      Data Solutions BV, Plantage Middenlaan 42a, 1018 DH, Amsterdam, The
      Netherlands. Website:{" "}
      <a href="https://cookiefirst.com" title="Cookiefirst page">
        https://cookiefirst.com
      </a>{" "}
      referred to as CookieFirst.
    </p>
    <p>
      When you access our website, a connection is established with
      CookieFirst’s server to give us the possibility to obtain valid consent
      from you to the use of certain cookies. CookieFirst then stores a cookie
      in your browser in order to be able to activate only those cookies to
      which you have consented and to properly document this. The data processed
      is stored until the predefined storage period expires or you request to
      delete the data. Certain mandatory legal storage periods may apply
      notwithstanding the aforementioned.
    </p>
    <p>
      CookieFirst is used to obtain the legally required consent for the use of
      cookies. The legal basis for this is article 6(1)(c) of the General Data
      Protection Regulation (GDPR).
    </p>
    <h2>Data processing agreement</h2>
    <p>
      We have concluded a data processing agreement with CookieFirst. This is a
      contract required by data protection law, which ensures that data of our
      website visitors is only processed in accordance with our instructions and
      in compliance with the GDPR.
    </p>
    <h2>Server log files</h2>
    <p>
      Our website and CookieFirst automatically collect and store information in
      so-called server log files, which your browser automatically transmits to
      us. The following data is collected:
    </p>
    <ul>
      <li>Your consent status or the withdrawal of consent</li>
      <li>Your anonymised IP address</li>
      <li>Information about your Browser</li>
      <li>Information about your Device</li>
      <li>The date and time you have visited our website</li>
      <li>
        The webpage url where you saved or updated your consent preferences
      </li>
      <li>
        The approximate location of the user that saved their consent preference
      </li>
      <li>
        A universally unique identifier (UUID) of the website visitor that
        clicked the cookie banner
      </li>
    </ul>
  </div>
);

export default Privacy;
