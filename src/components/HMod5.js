import React from "react";

export default function HMod5(){
    return (<div classNameName="Hmod5">
        <section id="contactus">
        <div className="contactus_content">
            <div className="container">
                <div className="col-lg-12" style={{padding: "0",marginBottom:"30px"}}>
                    <h1 className="text-left"><span className="underlineHeading">CONTACT US</span></h1>
                </div>

                <div className="col-lg-12 text-justify" style={{padding: "0"}}>
                    <div className="row">
                        <div className="col-md-6">
                            
                            <img style={{height:"300px",width:"580px"}} src="images/contact.jpg"></img>
                        </div>

                        <div className="col-md-6">
                            <div className="pad0" style={{textAlign: "center",color:"#333333"}}>
                                <div className="col-lg-12 pad0 text-center" style={{padding:"0 0 10px 0", marginTop: "-20px"}}>
                                    <div style={{borderBottom: "1px solid #9f9f9f",width:"250px",margin:"auto",padding:" 0 0 10px 0",color:"#F15438"}}>
                                        <span className="h3" style={{fontFamily:"Amaranth"}}>Contact Persons</span>

                                    </div>
                                </div>
                                {/* <!--<div className="col-lg-12 pad0" style="padding: 0;font-weight: bold;margin-bottom: 5px;font-size: 1.2em;">
                                    <span>Dr. Deepak Garg</span>
                                </div>--> */}
                                <div className="col-lg-12 pad0" style={{padding:"0",fontSize:" 1em"}}>
							
                    <h3 className="sub-title">Dr. B. Sujatha</h3>
                    Professor &amp; Head, Department of CSE<br/>
                    GIET Rajahmundry, Andhra Pradesh, India 533101<br/>

                                    <i className="fa fa-envelope" aria-hidden="true"> </i><span style={{fontWeight:"bold",color:"rgb(198, 21, 42)"}}> icchsn2020@gmail.com</span>
                                </div>
                              
<div className="col-lg-12 pad0" style={{padding: "0",fontSize: "1em",borderTop: "1px dotted #b3adad",marginTop:"10px",paddingTop: "10px"}}>
							
                    <h3 className="sub-title">Dr. B. N. Jagadesh</h3>
                    Professor &amp; Head, Department of CSE<br/>
                    Srinivasa Institute of Engineering &amp; Technology, Amalapuram, Andhra Pradesh, India 533003<br/>
                                    
                                    
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        </section>
        <img src="../images/maplogo.png" style={{width:"100%"}}></img>
        
    </div>);
}