import React, { Component } from 'react';

import InfoSection from '../components/InfoSection';


export default class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: [
        {
          header: 'About',
          body: 'I\'m a software developer living in Northampton Massachusetts.\nI currently work in web development, and am most comfortable with Python and Javascript.\nI\'m interested in websites, networks, and video games.',
        },
        {
          header: 'Contact',
          body: (
            <div>
              <p>(508) 493 1601</p>
              <p>EmmaMaySimon@gmail.com</p>
            </div>
          ),
        },
      ],
    };
  }

  render() {
    return (<div>
      {this.state.sections.map((section, i) => (<InfoSection
        header={section.header}
        body={section.body}
        key={i}
        id={i.toString()}
      />))}
    </div>);
  }
}

