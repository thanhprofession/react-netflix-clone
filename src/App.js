import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Header from './Header';
import SelectionRow from './SelectionRow';
import './App.css';

class App extends React.Component {

  state = {
    categories: [
      {
        title: "Top Picks for Joshua",
        dataKey: "topPicks"
      },
      {
        title: "Trending Now",
        dataKey: "trendingNow"
      },
      {
        title: "Because you watched Narcos",
        dataKey: "becauseWatched"
      },
      {
        title: "New Releases",
        dataKey: "newReleases"
      },
    ]
  }

  render() {
    let netflixRows = this.state.categories.map((element, i) => (
      <MDBRow>
        <MDBCol size="12">
          <SelectionRow
            key={i}
            title={element.title}
            dataKey={element.dataKey} 
          />
        </MDBCol>
      </MDBRow>
    ));
    return (
      <MDBContainer fluid>
        <MDBRow>
          <MDBCol size="12">
            <Header />
          </MDBCol>
        </MDBRow>
        {netflixRows}
      </MDBContainer>
    )
  }

}

export default App;
