import React from 'react';
import './home.css';
import membersData from '../data/members.json'

const Home = () => {
  const memberData = membersData;

  const roles = ['Projection', 'Streaming', 'Videography', 'Sound Management'];

  return (
    <div>
      {memberData.map((member, index) => (
        <div key={index}>
          <h2>{member.name}</h2>
          <table>
            <thead>
              <tr>
                <th>Section</th>
                <th>Names</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {roles.map((role, i) => (
                <tr key={i}>
                  <td>{role}</td>
                  <td>{member.name}</td>
                  <td>October 15, 2021</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default Home;
