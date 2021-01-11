import React from 'react';

module.exports = function(pageData){
  return pageData.map((a,i) => {
    let A = a.type;
    return <A key={i} dangerouslySetInnerHTML={{__html: a.content}}/>
  })
}
