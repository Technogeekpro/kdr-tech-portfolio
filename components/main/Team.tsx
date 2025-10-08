import React from "react";
import Head from "next/head";
import ProfileCard from "../sub/ProfileCard";
import BhaktiDescription from "../descriptions/BhaktiDescription";
import RazakDescription from "../descriptions/RazakDescription";
import ApoorvaDescription from "../descriptions/ApoorvaDescription";
import ArbazDescription from "../descriptions/ArbazDescription";
import KadarDescription from "../descriptions/KadarDescription";
import App from "next/app";

const Team = () => {
  return (
    <>
      <Head>
        <title>
          Our Team - Expert Flutter, Android, and Mobile Application Developers
        </title>
        <meta
          name="description"
          content="Meet our team of expert Flutter developers, Android developers, and mobile application developers. Our team has extensive experience in delivering high-quality projects."
        />
        <meta
          name="keywords"
          content="Flutter developer, Android developer, mobile application developer, UI/UX designer, backend developer, project manager"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Our Team - Expert Flutter, Android, and Mobile Application Developers"
        />
        <meta
          property="og:description"
          content="Meet our team of expert Flutter developers, Android developers, and mobile application developers. Our team has extensive experience in delivering high-quality projects."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.kdrtech.in/team" />
        <meta
          property="og:image"
          content="https://www.kdrtech.in/images/team.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Our Team - Expert Flutter, Android, and Mobile Application Developers"
        />
        <meta
          name="twitter:description"
          content="Meet our team of expert Flutter developers, Android developers, and mobile application developers. Our team has extensive experience in delivering high-quality projects."
        />
        <meta
          name="twitter:image"
          content="https://www.kdrtech.in/images/team.jpg"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Your Company",
            url: "https:///www.kdrtech.in",
            logo: "https:///www.kdrtech.in/images/logo.png",
            sameAs: [
              "https://www.facebook.com/arbazkdr",
              "https://www.twitter.com/arbazkdr",
              "https://www.linkedin.com/in/arbazkdr/",
            ],
            description:
              "Meet our team of expert Flutter developers, Android developers, and mobile application developers. Our team has extensive experience in delivering high-quality projects.",
            member: [
              {
                "@type": "Person",
                name: "Bhakti",
                jobTitle: "UI/UX Designer",
                description: BhaktiDescription,
                image: "https://www.kdrtech.in/bhakti.jpg",
              },
              {
                "@type": "Person",
                name: "Abdul Razak",
                jobTitle: "Manager & Developer",
                description: RazakDescription,
                image: "https://www.kdrtech.in/Razak.jpg",
              },
              {
                "@type": "Person",
                name: "Apoorv Pandey",
                jobTitle: "Backend Developer",
                description: ApoorvaDescription,
                image: "https://www.kdrtech.in/apoorv.jpg",
              },
            ],
          })}
        </script>
      </Head>
      <div id='Team' className="py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Our Team
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Meet the Experts
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto">
              Our team is the best team in the world.
            </p>
          </div>
          <div className="mt-10">
            <div className="flex justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <ProfileCard
                  image="/images/profiles/me.png"
                  name="Arbaz Kudekar"
                  role="Lead Developer"
                  description={ArbazDescription}
                  quote="#FlutterExpert"
                />
                <ProfileCard
                  image="/images/profiles/bhakti.jpg"
                  name="Bhakti"
                  role="UI/UX Designer"
                  description={BhaktiDescription}
                  quote="#DesignGuru"
                />
                <ProfileCard
                  image="/images/profiles/Razak.jpg"
                  name="Abdul Razak"
                  role="Manager & Developer"
                  description={RazakDescription}
                  quote="#ManagerExtraordinaire"
                />

                <ProfileCard
                  image="/images/profiles/kadar.png"
                  name="Abdul Kadar"
                  role="Frontend Developer"
                  description={KadarDescription}
                  quote="#FrontendMaster"
                />
                
                <ProfileCard
                  image="/images/profiles/apoorva.jpg"
                  name="Apoorv pandey"
                  role="Backend Developer"
                  description={ApoorvaDescription}
                  quote="#BackendWizard"
                />
                {/* Add more ProfileCard components as needed */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
