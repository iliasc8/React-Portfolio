import React from "react";
import profile from '../Assets/profile.jpg'

function About() {
    let dogBackgroundImage = "https://i.imgur.com/qkdpN.jpg";

    return (
        <>

        <div class="img-container">
            <div class="row">
            <div class="col-md-4">
                <img src={profile} class="img-responsive" alt="Cinque Terre" width="304" height="236"></img>

            </div>

            <div id="git">
                <a target="_blank" href="assets/myinfo.png">Resume</a>
            </div>
            <a target="_blank" href="mailto: iliasc8@gmail.com"> <i id="gitt"
                    class="fab fa-google plus g icon"></i></a>
            <a target="_blank" href="https://www.linkedin.com/in/ilias-c-a2594717a/"> <i id="gitt"
                    class="fab fa-linkedin in icon"></i> </a>
            <a target="_blank" href="https://github.com/iliasc8"> <i id="gitt"
                    class="fab fa-github-square"></i> </a>
                    {/* <li style="list-style-type: none !important; "> <i style="text-align: left; margin:0%;"
                    class="fas fa-mobile">+1 416 999 9999</i></li> */}
            </div>
        </div>

        <br></br>
        <div class="col">
            <p>
                <li>Education: <span>Business Administration Accounting Diploma</span></li>
            </p>
            <br></br>
                        <p2>
                            <li>Exprience: <span>HTML, CSS, JavaScript, JQuery, Bootstrap,Github, NodeJs, MySql, MongoDB, React and MS Office
  </span></li>
                        </p2>
                        <br></br>
                            <p3><li>
                                <span>Offer years of experince in Financial Industry</span></li>
                            </p3>
                            <br></br>
                                <p4><li><span>Excellent keyboard skills
</span></li>
                                </p4>
                                <br></br>
</div>
</>
)
}




export default About;