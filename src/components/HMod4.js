import React from "react";

export default function HMod4(){
    return (<div className="Hmod4">
        <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="text-left"><span class="underlineHeading">Speakers</span></h1>

                        <div className="row owl-carousel owl-theme speaker" id="speaker" style={{opacity: "1", display: "block"}}>
                                                                <div className="owl-wrapper-outer"><div class="owl-wrapper" style={{width:"1710px", left: "0px", display: "block", transition: "all 1000ms ease 0s", transform: "translate3d(0px, 0px, 0px)"}}>
                                                                <div className="owl-item" style={{width: "285px"}}>
                                                                <div className="col-md-12 item">
                                        <div className="speaker_img text-center">
                                            <img src="../images/1.jpg" class="img-responsive" style={{margin: "0 auto"}}/>
                                        </div>

                                        <div className="speaker_name">Dr. Maode Ma</div>
                                        <div className="speaker_company">School of Electrical &amp; Electronic Engineering,
Nanyang Technological University,Singapore
</div>
                                    </div>
                                    </div>
                                    <div className="owl-item" style={{width: "285px"}}>
                                    <div className="col-md-12 item">
                                        <div className="speaker_img text-center">
                                            <img src="../images/5.jpg" class="img-responsive" style={{margin: "0 auto"}}/>
                                        </div>

                                        <div className="speaker_name">Dr. Ng Kok Why</div>
                                        <div className="speaker_company">Faculty of Computing &amp; Informatics (FCI),
Multimedia University, Cyberjaya, Malaysia</div>
                                    </div></div>
                                    
                                    <div class="owl-item" style={{width: "285px"}}><div class="col-md-12 item">
                                        <div className="speaker_img text-center">
                                            <img src="../images/6.jpg" class="img-responsive" style={{margin: "0 auto"}}/>
                                        </div>

                                        <div className="speaker_name">Dr. Firoz Ahmed</div>
                                        <div className="speaker_company">University of Rajshahi, Rajshahi 6205, Bangladesh</div>
                                    </div></div></div></div>
                                                                        {/* <!-- <div class="col-md-12 item">
                                        <div class="speaker_img text-center">
                                            <img src="images/2.jpg" class="img-responsive" style="margin: 0 auto;" />
                                        </div>

                                       <div class="speaker_name">Dr. Ho Chiung Ching</div>
                                        <div class="speaker_company">Dean , Faculty of Computing & Informatics (FCI),
Multimedia University, Cyberjaya, Malaysia</div>
                                    </div>--> */}
                                                                        
                                                                        
         <div className="owl-controls clickable" style={{display: "none"}}>
         <div className="owl-pagination">
         <div className="owl-page"><span class=""></span></div></div><div class="owl-buttons">
         <div className="owl-prev"><i class="fa fa-chevron-left"></i></div><div class="owl-next"><i class="fa fa-chevron-right"></i></div>

         </div>
         </div>
         </div>
                    </div>
                </div>

                

                
            </div>
    </div>);
}