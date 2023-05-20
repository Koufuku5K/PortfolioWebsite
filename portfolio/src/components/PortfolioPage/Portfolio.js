import React from 'react'
import './Portfolio.css';

function Portfolio() {
  return (
    <>
    <div class="container">
        <div class="text">
            <h1>Portfolio</h1>
            <span>
                Throughout my Undergraduate studies, I have learned and produced many artefacts. These
                artefacts include, but are not limited to, games and digital illustrations.
                <br></br>
                In this page, you will be able to see the artefacts that I have created for both my
                academics and leisure.
            </span>
            <p class="scroll">SCROLL</p>
        </div>
    </div>

    <section class="hidden" id="games">
        <img class = "hidden_img top" src="../static/images/yellow_mellow_fellow.png" alt="Yellow Mellow Fellow"/>
        <h2>The Yellow Mellow Fellow</h2>
        <img class = "hidden_img bottom" src="../static/images/yellow_mellow_fellow.png" alt="Yellow Mellow Fellow"/>
    </section>
    </>
  )
}

export default Portfolio