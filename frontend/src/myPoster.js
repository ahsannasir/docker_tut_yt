import React from 'react';
import JsonView from 'react-json-view';
import axios from 'axios';
function MyPoster() {
    const json = {env: "nasir"};
  return (
     <JsonView src={json}></JsonView>
  );
}

export default MyPoster;
