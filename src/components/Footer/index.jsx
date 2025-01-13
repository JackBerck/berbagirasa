import FooterLink from "./FooterLink";
import SocialMediaLinks from "./SocialMediaLinks";
import { navigationRoutes } from "../../data/routes";
import { followUs } from "../../data/follow-us";
import { legal } from "../../data/legal";
import { socialMediaLinks } from "../../data/social-media";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="section-padding-x pt-4 pb-4 normal-font-size text-light-base bg-dark-base flex items-center justify-center"
    >
      <div className="max-w-screen-xl container py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="/" className="flex items-center">
              <img
                src="/favicon.webp"
                className="h-8 me-3"
                alt="BerbagiRasa Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap">
                BerbagiRasa
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <FooterLink title="Tautan" links={navigationRoutes} />
            <FooterLink title="Ikuti Kami" links={followUs} />
            <FooterLink title="Legal" links={legal} />
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-gray-500 sm:text-center">
            &copy; {new Date().getFullYear()}{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              BerbagiRasa™
            </a>
            . All Rights Reserved.
          </span>
          <SocialMediaLinks />
        </div>
      </div>
    </footer>
  );
}
