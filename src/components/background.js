import React from "react"
import styles from "./layout.module.css"
import Fade from "react-reveal/Fade"

const Background = () => {
  return (
    <div className="d-flex flex-row pb-5">
      <Fade>
        <div className={styles.title}>Background</div>
        <div className={styles.content}>
          <p>
            I'm currently an Engineer at
            <a
              className="underline-link"
              href="https://www.mmu.ac.uk"
              target="_blank"
              rel="noreferrer"
            >
              Manchester Metropolitan University
            </a>
            We survive by offering our services and experience to students,
            lecturers, researchers and the wider community with some awesome
            people. I recently graduated from
            <a
              className="underline-link"
              href="https://www.mmu.ac.uk"
              target="_blank"
              rel="noreferrer"
            >
              Manchester Metropolitan University
            </a>
            after completing three awesome six-month co-ops at
            <a
              className="underline-link"
              href="https://us.mullenlowe.com/"
              target="_blank"
              rel="noreferrer"
            >
              MullenLowe U.S.
            </a>
            ,
            <a
              className="underline-link"
              href="https://starry.com/"
              target="_blank"
              rel="noreferrer"
            >
              Starry
            </a>
            , and
            <a
              className="underline-link"
              href="https://www.apple.com/music/"
              target="_blank"
              rel="noreferrer"
            >
              Apple Music
            </a>
            .
          </p>

          <p>
            As a software engineer, I enjoy bridging the gap between engineering
            and design &mdash; combining my technical knowledge with my keen eye
            for design to create a beautiful product. My goal is to always build
            applications that are scalable and efficient under the hood while
            providing engaging, pixel-perfect user experiences.
          </p>

          <p>
            <strong>When I'm not in front of a computer screen</strong>, I'm
            probably snowboarding, cruising around on my penny board, or
            crossing off another item on my bucket list.
          </p>
        </div>
      </Fade>
    </div>
  )
}

export default Background
