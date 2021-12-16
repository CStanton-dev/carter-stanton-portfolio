import * as React from 'react'

import { Container } from '../Container'
import { FullScreenSection } from '../FullScreenSection'

export const About = () => (
  <FullScreenSection name="about">
    <Container>
      <h1>ABOUT ME</h1>
      <p>
        I am an aspiring software developer who enjoys connecting the dots: be it ideas from different disciplines, people from different
        teams, or applications from different industries. I have strong technical skills and an academic background in{' '}
        <strong>software development, statistics, and customer service</strong>.
      </p>
      <p>
        My passion lies in solving business problems with tailored data and algorithms and communicating complex ideas to non-technical
        stakeholders. I am able to jump across verticals to deliver <strong>high-performing</strong> software solutions.I attend Western
        Govenors University (WGU), and will graduate in <strong>February 2022</strong> with a degree in{' '}
        <strong>Information Technology BS</strong>. I&apos;m interested in full-time software development or data security management roles.
      </p>
      <p>
        Proficient: ​ HTML/CSS,{' '}
        <a href="https://sass-lang.com/" target="_blank" rel="noopener nonreferrer">
          SASS
        </a>
        , MySQL, Linux/Unix, Excel
      </p>
      <p>
        Knowledgeable: JavaScript (
        <a href="https://reactjs.org/" target="_blank" rel="noopener nonreferrer">
          React.js
        </a>
        ,{' '}
        <a href="https://vuejs.org/" target="_blank" rel="noopener nonreferrer">
          Vue.js
        </a>
        ,{' '}
        <a href="https://typescriptlang.org/" target="_blank" rel="noopener nonreferrer">
          TypeScript
        </a>
        )
      </p>
      <p>Familiar: ColdFusion</p>
      <p>Certifications:</p>
      <ul>
        <li>
          Google I.T. Support
          <a href="https://www.coursera.org/account/accomplishments/specialization/certificate/T9U6ST9M2HCZ" target="_blank">
            <sup>[Credential URL]</sup>
          </a>
        </li>
        <li>
          Appian Associate Developer
          <a href="https://community.appian.com/members/carters0001" target="_blank">
            <sup>[Credential URL]</sup>
          </a>
        </li>
        <ul>
          <li>Expires Feb 2023</li>
        </ul>
        <li>
          Appian Senior Developer
          <a href="https://community.appian.com/members/carters0001" target="_blank">
            <sup>[Credential URL]</sup>
          </a>
        </li>
        <ul>
          <li>Expires Mar 2023</li>
        </ul>
      </ul>
    </Container>
  </FullScreenSection>
)
