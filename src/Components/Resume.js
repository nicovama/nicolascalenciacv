import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var bizmessage = this.props.data.bizmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p>
        <p>{education.description2}</p>
        <p>{education.description3}</p>
        </div>


      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
            <p>{work.description2}</p>
            <p>{work.description3}</p>
        </div>
      })
      var programming = this.props.data.programming.map(function(programming){
        var className = 'bar-expand '+programming.name.toLowerCase();
        return <li key={programming.name}><span style={{width:programming.level}}className={className}></span><em>{programming.name}</em></li>
      })
      var business = this.props.data.business.map(function(business){
        var className = 'bar-expand '+business.name.toLowerCase();
        return <li key={business.name}><span style={{width:business.level}}className={className}></span><em>{business.name}</em></li>
      })
    }

    return (
      <section id="resume">
      <div className="row work">

        <div className="three columns header-col">
          <h1><span>Work</span></h1>
        </div>

        <div className="nine columns main-col">
        {work}
        </div>
        </div>

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row programming skill">

         <div className="three columns header-col">
            <h1><span>Software skills</span></h1>
         </div>

         <div className="nine columns main-col">

            <p>{skillmessage}
            </p>

				<div className="bars">
				   <ul className="programming">
					  {programming}
					</ul>
				</div>
			</div>
			</div>

      <div className="row business skill">

        <div className="three columns header-col">
          <h1><span>Business skills</span></h1>
        </div>

        <div className="nine columns main-col">

          <p>{bizmessage}
          </p>

        <div className="bars">
          <ul className="business">
          {business}
        </ul>
        </div>
      </div>

      </div>
    </section>
    );
  }
}

export default Resume;
