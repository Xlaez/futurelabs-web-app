import ToolBar from '../layout/toolbar';
import Contact from "../layout/contact"
import "./strategy.css"


export default function Strategy() {
return (
      
<div>
<ToolBar />
  {/* *********************************************************************** */}

    {/* THIS BASE IS BI-SEGMENTED FOR REUSABILITY. */}
    {/* SEGMENT-ONE BEGINS HERE & IS REPEATED AS SEGMENT-TWO*/}

  {/* *********************************************************************** */}

  {/* Section-One begins here */}
  <div className="video-container">
        <video autoPlay muted loop className='overall'>
            {/* <Transformation endOffset="30" videoCodec="auto" /> */}
            <source 
              src="https://res.cloudinary.com/eacademy/video/upload/v1643989706/Agency/Strategy.mp4" type="video/mp4" 
            /> 
            
          
        </video> 

        <div className="parent-box1 d-flex justify-space-between ontop .bg-warning px-5 text-white">
            <div className="text-box .bg-danger">
              <h5 className="line1">
                  Strategy
              </h5>
              {/* <button type="button" class="btn btn-outline-warning strategy-button-text mt-4 text-white">LEARN MORE</button> */}

              <h6 className="line3"> We develop corporate & brand strategies that <br className="mobile-no" /> set you apart</h6>

            </div>


            {/* THE MUTE ICON IS HERE */}
            <div className="mute-box text-center .bg-info">
                <img className=".img-fluid mute-img mute-mobile-yes .bg-danger" src="https://res.cloudinary.com/not-set/image/upload/v1634901154/mute_1_2_joyf7a.png" alt="" />
            </div>

        </div>


    </div>




    




    {/* Section-One begins here */}
    <section className="section1 strategy-image2">

        <div className="container">
            <div className="row .bg-warning d-flex justify-space-between">
                <div className="col-9 .bg-primary px-3 px-sm-1 text-white">

                    <h5 className="line1">
                      Rapid Results Through Teamwork
                    </h5>
                    {/* <button type="button" class="btn btn-outline-warning strategy-button-text mt-4 text-white">LEARN MORE</button> */}

                    <h6 className="line3"> Harnessing the power of a team of talented <br className="mobile-no" /> innovators to build usable products and services</h6>


                </div>
                

                {/* THE MUTE ICON IS HERE */}
                <div className="col-3 .bg-danger text-center">
                  <img className=".img-fluid mute2 mute-mobile-yes" src="https://res.cloudinary.com/not-set/image/upload/v1634901154/mute_1_2_joyf7a.png" alt="" />
                </div>

            </div>
        </div>

    </section>
    {/* Section-One ends here */}




    {/* Section-One begins here */}
    <section className="section1 strategy-image3">

        <div className="container">
            <div className="row .bg-warning d-flex justify-space-between">
                <div className="col-9 .bg-primary px-3 px-sm-1 text-white">

                    <h5 className="line1">
                      Ideas Aren’t Enough
                    </h5>
                    {/* <button type="button" class="btn btn-outline-warning strategy-button-text mt-4 text-white">LEARN MORE</button> */}

                    <h6 className="line3"> This generation is only fascinated by results, let’s <br className="mobile-no" /> help you go from ideas to MVPs rapidly </h6>


                </div>
                

                {/* THE MUTE ICON IS HERE */}
                <div className="col-3 .bg-danger text-center">
                  <img className=".img-fluid mute2 mute-mobile-yes" src="https://res.cloudinary.com/not-set/image/upload/v1634901154/mute_1_2_joyf7a.png" alt="" />
                </div>

            </div>
        </div>

    </section>
    {/* Section-One ends here */}



    {/* Section-One begins here */}
    <section className="section1 strategy-image4">

        <div className="container">
            <div className="row .bg-warning d-flex justify-space-between">
                <div className="col-9 .bg-primary px-3 px-sm-1 text-white">

                    <h5 className="line1">
                      Bringing You Project 1000
                    </h5>
                    {/* <button type="button" class="btn btn-outline-warning strategy-button-text mt-4 text-white">LEARN MORE</button> */}

                    <h6 className="line3"> Our digital skills training to postion young minds <br className="mobile-no" /> for relevance, as an avenue for combating cyber fraud</h6>


                </div>
                

                {/* THE MUTE ICON IS HERE */}
                <div className="col-3 .bg-danger text-center">
                  <img className=".img-fluid mute2 mute-mobile-yes" src="https://res.cloudinary.com/not-set/image/upload/v1634901154/mute_1_2_joyf7a.png" alt="" />
                </div>

            </div>
        </div>

    </section>
    {/* Section-One ends here */}



    <Contact />
















</div>
)
}