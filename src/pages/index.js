/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Button from "@theme/Button";
import Layout from "@theme/Layout";
import classnames from "classnames";
import React, { useRef, useState } from "react";
import Particles from "react-particles-js";
import ScrollUpButton from "react-scroll-up-button";
import BrowserWindow from "../components/BrowserWindow";
import styles from "./styles.module.css";

const particlesOptions = {
  particles: {
    number: {
      value: 185,
      density: {
        enable: true,
        value_area: 1341.5509907748635,
      },
    },
    color: {
      value: "#FA582D",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 1,
      random: true,
      anim: {
        enable: true,
        speed: 0.8120772123013451,
        opacity_min: 0,
        sync: false,
      },
    },
    size: {
      value: 5,
      random: true,
      anim: {
        enable: false,
        speed: 2,
        size_min: 0.3,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 600,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
        mode: "grab",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 316.71011279752463,
        size: 0,
        duration: 6.252994534720358,
        opacity: 0,
        speed: 3,
      },
      repulse: {
        distance: 535.9709601188878,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
};

function Site({ imageUrl, description, href, title }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <Button
      className={classnames(styles.article)}
      variant="plain"
      href={href}
      target="_self"
      uppercase={false}
      newTab={false}
    >
      <section className={styles.image__section}>
        <img src={imgUrl} alt={title} className={styles.cardImage} />
      </section>
      <section className={styles.article__section}>
        <span className={classnames(styles.article__content)}>
          <header>
            <h2 className={classnames("margin-bottom--sm", styles.title)}>
              {title}
            </h2>
          </header>

          <section>{description}</section>
        </span>
      </section>
    </Button>
  );
}

const sites = [
  {
    imageUrl: "/img/Cortex-green.svg",
    description: (
      <>
        An open, continuous security platform to integrate rich context from
        cloud, endpoint and network data
      </>
    ),
    href: "https://cortex.pan.dev",
    title: "Cortex for Developers",
  },
  {
    imageUrl: "/img/Strata-yellow.svg",
    description: (
      <>
        Build next-gen automation with the worlds only next-generation security
        platform
      </>
    ),
    href: "https://strata.pan.dev",
    title: "Strata for Developers",
  },
  {
    imageUrl: "/img/Cortex-XSOAR-product-green.svg",
    description: (
      <>Develop new integrations, automations, playbooks, reports and more</>
    ),
    href: "https://xsoar.pan.dev",
    title: "XSOAR for Developers",
  },
  {
    imageUrl: "/img/prismalogo.png",
    description: <>Develop for the journey to the cloud with Prisma</>,
    href: "https://prisma.pan.dev",
    title: "Prisma Cloud for Developers",
  },
];

function Home() {
  const [site, setSite] = useState("https://pan.dev");
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const scrollToRef = (ref) =>
    ref.current.scrollIntoView({ behavior: "smooth" });
  const vertificalsRef = useRef(0);
  const scrollToVerticals = () => scrollToRef(vertificalsRef);
  return (
    <Layout
      title={`${siteConfig.themeConfig.navbar.title}`}
      description="Palo Alto Networks for Developers"
      wrapperClassName="homepage"
    >
      <ScrollUpButton />
      <header
        className={classnames(
          "hero hero--primary heroTilted",
          styles.heroBanner
        )}
      >
        <div className="container">
          <div className={styles.hero}>
            <div className={styles.heroInner}>
              <h1 className={styles.heroProjectTagline}>
                <div>
                  <Particles className="particles" params={particlesOptions} />
                </div>
                Develop the{" "}
                <span className={styles.heroProjectKeywords}>
                  next generation
                </span>{" "}
                of <span className={styles.heroProjectKeywords}>security</span>{" "}
                with powerful APIs and SDKs
              </h1>
              <div className={styles.indexCtas}>
                <Link
                  className={classnames(
                    "button button--primary button--outline button--lg",
                    styles.indexCtasGetStartedButton
                  )}
                  onClick={scrollToVerticals}
                >
                  Explore Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className={styles.toolsslant} ref={vertificalsRef}>
          <div className={classnames("container", styles.container__width)}>
            <div className="row row--no-gutters">
              <div className={classnames("col col--5", styles.browser__window)}>
                <BrowserWindow url={site} minHeight="450px">
                  <p>test</p>
                </BrowserWindow>
              </div>
              <div className={classnames("col col--7")}>
                {sites && sites.length && (
                  <section className={styles.sites}>
                    <div className={classnames("container")}>
                      <div className="row">
                        {sites.map((props, idx) => (
                          <div
                            className={classnames(
                              "col col--6",
                              styles.cards__justify
                            )}
                            onMouseOver={() => setSite(props.href)}
                          >
                            <Site key={idx} {...props} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
