import React, { Component } from 'react';

class Miscellaneous extends Component {
  render() {

    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'images/miscellaneous/'+projects.image;
        return <div key={projects.title} className="columns miscellaneous-item">
           <div className="item-wrap">
            <a href={projects.url} title={projects.title}>
               <img alt={projects.title} src={projectImage} />
               <div className="overlay">
                  <div className="miscellaneous-item-meta">
                 <h5>{projects.title}</h5>
                     <p>{projects.category}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })
    }

    return (
      <section id="miscellaneous">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Some other things about me.</h1>

            <div id="miscellaneous-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {projects}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Miscellaneous;
