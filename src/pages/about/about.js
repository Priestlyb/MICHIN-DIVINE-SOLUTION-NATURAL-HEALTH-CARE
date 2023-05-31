import React from 'react'
import "./about.css"
import dp from "./dp.jpg"

function About() {
  return (
    <>

    <div className='about_header'>

      <div className='about_cover'></div>

      <div className='about_title'>
        <h1>About us</h1>
        <h2>Want to hear a story?</h2>
      </div>

    </div>

    <div className='container text-light'>
      <div className='row'>

        <div className='col-7 my-4 py-4'>
      <h1 className='my-1 py-1'> Who we are</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>

      <div className=' row col-5 my-4 py-4'>
        
        <div className='col-6 scores'>
          <h2>350</h2>
          <span>Millions</span>
        </div>

        <div className='col-6 scores'>
        <h2>700+</h2>
          <span>Millions</span>
        </div>

        <div className='col-6 scores'>
        <h2>50+</h2>
          <span>Millions</span>
        </div>

        <div className='col-6 scores'>
        <h2>13+</h2>
          <span>Millions</span>
        </div>
      </div>

      </div>
      
    </div>

    <div className='container-fluid mt-5 text-light our_teams'>

      <div className='team_header text-dark'>
      <h1>Our Expert Specialists, led by our visionary CEO, excels in delivering top-notch solutions.</h1>
      <p>At Michin Divine Solution Natural Health Care, our CEO prioritizes strong relationships and customer feedback. These values drive our business success and enable us to provide exceptional holistic health care solutions.</p>
      </div>

      <div className='container text-dark'>
        <div className='row  team_row'>

          <div className='col-4 col_team'>
            <img src={dp} alt='team__member_dp' width="50%" />
            <h4>Mr. CEO</h4>
            <h6>creative leader</h6> <br />
            <p>Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum</p>
          </div>

<div className='col-4 col_team'>
  <img src={dp} alt='team__member_dp' width="50%" />
  <h4>Mr. CEO</h4>
            <h6>creative leader</h6> <br />
            <p>Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum</p>
</div>

<div className='col-4 col_team'>
  <img src={dp} alt='team__member_dp' width="50%" />
  <h4>Mr. CEO</h4>
            <h6>creative leader</h6> <br />
            <p>Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum</p>
</div>

        </div>
      </div>

    </div>


    <div className='container'>

      <h1 className='text-light'><strong>Our Services</strong></h1>

    <div class="accordion py-5" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Holistic Health Consultations
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Our experienced practitioners provide comprehensive consultations, considering your physical, mental, and emotional aspects to develop personalized health plans.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Natural Therapies
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      We offer a variety of natural therapies, including acupuncture, herbal medicine, and nutritional counseling, to promote balance, vitality, and overall wellness.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Mind-Body Techniques
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Explore mind-body approaches like mindfulness, yoga, and breathwork to cultivate self-awareness, reduce anxiety, and enhance overall well-being.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingFour">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
      Lifestyle Coaching
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Our lifestyle coaches offer guidance and support to help you make positive changes in areas such as nutrition, exercise, stress management, and sleep for sustainable health improvement.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingFive">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
      Energy Healing
      </button>
    </h2>
    <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Experience the transformative power of energy healing modalities such as Reiki, sound therapy, and meditation, which help restore harmony and promote deep relaxation.
      </div>
    </div>
  </div>
</div>
</div>

    </>
  )
}

export default About