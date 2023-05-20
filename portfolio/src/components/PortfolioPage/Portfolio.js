import React from 'react'
import './Portfolio.css';
import yellow_mellow_fellow from '../../images/yellow_mellow_fellow.PNG'

function Portfolio() {
  return (
    <>
    <div class="container">
        <div class="text">
            <h1>Portfolio</h1>
            <div>
                Throughout my Undergraduate studies, I have learned and produced many artefacts. These
                artefacts include, but are not limited to, games and digital illustrations.
                <br></br>
                <br></br>
                In this page, you will be able to see the artefacts that I have created for both my
                academics and leisure.
            </div>
            <div class="scroll">SCROLL</div>
        </div>
    </div>

    <section class="hidden" id="games">
        <img class = "hidden_img top" src={yellow_mellow_fellow} alt="Yellow Mellow Fellow"/>
        <h2>The Yellow Mellow Fellow</h2>
        <img class = "hidden_img bottom" src={yellow_mellow_fellow} alt="Yellow Mellow Fellow"/>
    </section>
    </>
  )
}

export default Portfolio