import { Link } from "react-router";
import Foot from "./Foot";
import NavBar from "./NavBar";

export default function About(){
    return(
        <div>
            <div>
                <NavBar/>
            </div>
            <div>
                <div className="head-section">
                Machine Learning Research<br></br>
                Should Be Clear, Dynamic and Vivid.<br></br>
               <b>Distill</b> is Here to Help.
                </div>
            </div>
            <div className="two-navs">
  {[
    {
      to: "/journal",
      heading: "A JOURNAL",
      description: "Devoted to clear explanations, native to the Web.",
    },
    {
      to: "/prize",
      heading: "$10,000 PRIZES",
      description: "For outstanding work communicating and refining ideas.",
    },
  ].map((item, index) => (
    <Link to={item.to} key={index} className="two-nav-item">
      <div>
        <p>
          {item.heading}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </p>
        <p>{item.description}</p>
      </div>
    </Link>
  ))}
</div>

<div className="content">
<p className="text-check">A modern medium for presenting research</p>
The web is a powerful medium to share new ways of thinking. Over the last few years we’ve seen many imaginative examples of such work. But traditional academic publishing remains focused on the PDF, which prevents this sort of communication.
</div>

            <div>
                <Foot/>
            </div>
        </div>
    )
}