import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
      <header>This is the Header</header>
      <div id="flex-container">
        <article>
          <h1>Article</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a tortor a enim porttitor accumsan. Nam dapibus euismod massa, quis suscipit lorem mattis at. Donec felis metus, auctor quis porttitor non, mattis nec ante. Etiam mattis elementum diam, vulputate ornare est fringilla sit amet. Nunc et elit sem. Fusce non sodales lacus. Duis faucibus sem at metus ornare luctus.</p>

          <p>Donec a dapibus mi. Sed nunc dui, suscipit et volutpat ac, volutpat eget tellus. Aliquam id pharetra nibh. Curabitur eget velit mi. Suspendisse interdum feugiat diam ac bibendum. Pellentesque placerat lacus nunc, sit amet venenatis urna posuere et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non nulla semper risus efficitur malesuada. Phasellus non enim ullamcorper, scelerisque turpis eu, ultrices quam. Fusce ullamcorper ante quis magna cursus elementum. Phasellus molestie sapien quis lacus iaculis, id bibendum orci tincidunt. Praesent cursus elit vel sollicitudin tempus.</p>
        </article>
        <nav>Navigation</nav>
        <aside>Aside</aside>
      </div>
      <footer>This is the Footer</footer>
      </div>
    );
  }
}

export default App;
