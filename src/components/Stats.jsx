import React, { Component } from "react";
import getStats from "../services/getStats.js";

class Stats extends Component {
  // set initial state
  state = {
    teams: []
  };
  // get the baseball stats
  getStatistics = () => {
    getStats.getDynamicScores().then(response => {
      this.teams = response.data.teams;
      this.setState({
        teams: this.teams
      });
    });
  };
  // show the stats when mounted
  componentDidMount() {
    this.getStatistics();
  }

  render() {
    return (
      <div className="container content-container">
        <div className="row">
          {this.state.teams.map(team => (
            <div className="col-md-4 team-container">
              <div className="card team-card">
                <h6>
                  {team.team.city} {team.team.name}
                </h6>
                <p>Wins: {team.stats.standings.wins}</p>
                <p>Losses: {team.stats.standings.losses}</p>
                <p> Rank: {team.overallRank.rank}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Stats;

